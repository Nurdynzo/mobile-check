/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {Component} from 'react';
import {PanResponder, View} from 'react-native';
import {appZoomableViewStyles} from './styles';
import {
  ReactNativeZoomableViewProps,
  ReactNativeZoomableViewState,
  ZoomableViewEvent,
} from './types';

const initialState = {
  lastZoomLevel: 1,
  offsetX: 0,
  offsetY: 0,
  lastX: 0,
  lastY: 0,
  lastMovePinch: false,
  originalWidth: null,
  originalHeight: null,
};

class AppZoomableView extends Component<
  ReactNativeZoomableViewProps,
  ReactNativeZoomableViewState
> {
  gestureHandlers: any;
  distance: number;
  isDistanceSet: boolean;
  lastPressHolder: number | undefined;
  gestureType: 'pinch' | 'shift' | null;
  contextState = {
    distanceLeft: 0,
    distanceRight: 0,
    distanceTop: 0,
    distanceBottom: 0,
  };

  static defaultProps = {
    zoomEnabled: true,
    initialZoom: 1,
    initialOffsetX: 0,
    initialOffsetY: 0,
    maxZoom: 1.5,
    minZoom: 0.5,
    pinchToZoomInSensitivity: 3,
    pinchToZoomOutSensitivity: 1,
    zoomCenteringLevelDistance: 0.5,
    movementSensibility: 1.9,
    doubleTapDelay: 300,
    bindToBorders: true,
    zoomStep: 0.5,
    onLongPress: null,
    longPressDuration: 700,
    captureEvent: false,
  };

  constructor(props: any) {
    super(props);

    this.gestureHandlers = PanResponder.create({
      onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
      onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
      onPanResponderGrant: this._handlePanResponderGrant,
      onPanResponderMove: this._handlePanResponderMove,
      onPanResponderRelease: this._handlePanResponderEnd,
      onPanResponderTerminate: props.onPanResponderTerminate,
      onPanResponderTerminationRequest:
        props.onPanResponderTerminationRequest ?? (() => false),
      onShouldBlockNativeResponder: () => false,
    });

    this.state = {
      ...initialState,
      zoomLevel: props.initialZoom,
      lastZoomLevel: props.initialZoom || initialState.lastZoomLevel,
      offsetX: props.initialOffsetX,
      offsetY: props.initialOffsetY,
    };

    this.distance = 150;
    this.isDistanceSet = true;

    this.gestureType = null;

    this.contextState = {
      distanceLeft: 0,
      distanceRight: 0,
      distanceTop: 0,
      distanceBottom: 0,
    };
  }

  componentDidUpdate(prevProps: any) {
    const {zoomEnabled, initialZoom}: any = this.props;
    if (prevProps.zoomEnabled && !zoomEnabled) {
      this.setState({
        zoomLevel: initialZoom,
        ...initialState,
      });
    }
  }

  /**
   * Last press time (used to evaluate whether user double tapped)
   * @type {number}
   */
  longPressTimeout: NodeJS.Timeout | number | null = null;

  /**
   * Current position of zoom center
   * @type { x: number, y: number }
   */
  pinchZoomPosition: {x: number; y: number} | null = null;

  /**
   * Returns additional information about components current state for external event hooks
   *
   * @returns {{}}
   * @private
   */
  _getZoomableViewEventObject(overwriteObj = {}): ZoomableViewEvent {
    return {
      ...this.state,
      ...this.contextState,
      ...overwriteObj,
    } as ZoomableViewEvent;
  }

  /**
   * Get the original box dimensions and save them for later use.
   * (They will be used to calculate boxBorders)
   *
   * @param layoutEvent
   * @private
   */
  _getBoxDimensions = (layoutEvent: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {x, y, height, width} = layoutEvent.nativeEvent.layout;

    this.setState({
      originalWidth: width,
      originalHeight: height,
    });
  };

  /**
   * Handles the start of touch events and checks for taps
   *
   * @param e
   * @param gestureState
   * @returns {boolean}
   *
   * @private
   */
  _handleStartShouldSetPanResponder = (e: any, gestureState: any): boolean => {
    this._doubleTapCheck(e, gestureState);

    if (this.props.onStartShouldSetPanResponder) {
      this.props.onStartShouldSetPanResponder(
        e,
        gestureState,
        this._getZoomableViewEventObject(),
        false,
      );
    }

    return this.props.captureEvent ?? false;
  };

  /**
   * Checks if the movement responder should be triggered
   *
   * @param e
   * @param gestureState
   * @returns {Boolean|boolean}
   */
  _handleMoveShouldSetPanResponder = (e: any, gestureState: any): boolean => {
    let baseComponentResult: boolean =
      (this.props.zoomEnabled &&
        (Math.abs(gestureState.dx) > 2 ||
          Math.abs(gestureState.dy) > 2 ||
          gestureState.numberActiveTouches === 2)) ||
      false;

    if (this.props.onMoveShouldSetPanResponder) {
      baseComponentResult = this.props.onMoveShouldSetPanResponder(
        e,
        gestureState,
        this._getZoomableViewEventObject(),
        baseComponentResult,
      );
    }

    return baseComponentResult ?? false;
  };

  /**
   * Calculates pinch distance
   *
   * @param e
   * @param gestureState
   * @private
   */
  _handlePanResponderGrant = (e: any, gestureState: any) => {
    this.isDistanceSet = false;

    if (gestureState.numberActiveTouches === 2) {
      const dx = Math.abs(
        e.nativeEvent.touches[0].pageX - e.nativeEvent.touches[1].pageX,
      );
      const dy = Math.abs(
        e.nativeEvent.touches[0].pageY - e.nativeEvent.touches[1].pageY,
      );

      const distant = Math.sqrt(dx * dx + dy * dy);
      this.distance = distant;
      this.isDistanceSet = true;
    }

    if (this.props.onLongPress) {
      this.longPressTimeout = setTimeout(() => {
        if (this.props.onLongPress) {
          this.props.onLongPress(
            e,
            gestureState,
            this._getZoomableViewEventObject(),
          );
          this.longPressTimeout = null;
        }
      }, this.props.longPressDuration);
    }

    if (this.props.onPanResponderGrant) {
      this.props.onPanResponderGrant(
        e,
        gestureState,
        this._getZoomableViewEventObject(),
      );
    }
  };

  /**
   * Handles the end of touch events
   *
   * @param e
   * @param gestureState
   *
   * @private
   */
  _handlePanResponderEnd = (e: any, gestureState: any) => {
    this.setState({
      lastX: this.state.offsetX,
      lastY: this.state.offsetY,
      lastZoomLevel: this.state.zoomLevel,
    });

    if (this.longPressTimeout) {
      clearTimeout(this.longPressTimeout);
      this.longPressTimeout = null;
    }

    if (this.props.onPanResponderEnd) {
      this.props.onPanResponderEnd(
        e,
        gestureState,
        this._getZoomableViewEventObject(),
      );
    }

    if (this.gestureType === 'pinch') {
      this.pinchZoomPosition = null;
      if (this.props.onZoomEnd) {
        this.props.onZoomEnd(
          e,
          gestureState,
          this._getZoomableViewEventObject(),
        );
      }
    } else if (this.gestureType === 'shift') {
      if (this.props.onShiftingEnd) {
        this.props.onShiftingEnd(
          e,
          gestureState,
          this._getZoomableViewEventObject(),
        );
      }
    }

    this.gestureType = null;
  };

  /**
   * Takes a single offset value and calculates the correct offset value within our view to make
   *
   * @param {'x'|'y'} axis
   * @param offsetValue
   * @param containerSize
   * @param elementSize
   * @param zoomLevel
   *
   * @returns {number}
   */
  _getBoundOffsetValue(
    axis: 'x' | 'y',
    offsetValue: number,
    containerSize: number,
    elementSize: number,
    zoomLevel: number,
  ) {
    // const zoomLevelOffsetValue = zoomLevel * offsetValue;

    const containerToScaledElementRatioSub = 1 - containerSize / elementSize;
    const halfLengthPlusScaledHalf = 0.5 + 0.5 / zoomLevel;
    const startBorder =
      containerSize *
      containerToScaledElementRatioSub *
      halfLengthPlusScaledHalf;
    const endBorder = (containerSize + startBorder - containerSize) * -1;

    // calculate distance to start and end borders
    const distanceToStart = offsetValue - startBorder;
    const distanceToEnd = (offsetValue + startBorder) * -1;

    // set context for callback events
    this._setContextStateDistances(axis, distanceToStart, distanceToEnd);

    // if both sides (before and after the element) have a positive distance
    // => (our zoomed content is smaller than the frame)
    // => so center it
    if (containerSize > elementSize) {
      return containerSize / 2 - elementSize / 2 / zoomLevel;
    }

    // if everything above failed
    // => (one side is outside of the borders)
    // => find out which one it is and make sure it is 0
    if (distanceToStart > 0) {
      return startBorder;
    }

    // if there is distance to the end border
    // => (it is outside of the box)
    // => adjust offset to make sure it stays within
    if (distanceToEnd > 0) {
      return endBorder;
    }

    // if everything above failed
    // => (everything is within borders)
    // => just return the original offset value
    return offsetValue;
  }

  /**
   * Sets the distance to borders for callback events
   *
   * @param axis
   * @param distanceToStart
   * @param distanceToEnd
   * @private
   */
  _setContextStateDistances(
    axis: 'x' | 'y',
    distanceToStart: number,
    distanceToEnd: number,
  ) {
    if (axis === 'x') {
      this.contextState.distanceLeft = distanceToStart;
      this.contextState.distanceRight = distanceToEnd;
      return;
    }

    this.contextState.distanceTop = distanceToStart;
    this.contextState.distanceBottom = distanceToEnd;
  }

  /**
   * Takes a change object (that is going to be used in setState) and makes sure offsetX and
   * offsetY are within our view borders. If that is not the case, they will be corrected.
   *
   * @param changeObj the object that is going to be modified.
   *    Needs to contain at least the following elements:
   *    {
   *      zoomLevel: numeric,
   *      offsetX: numeric,
   *      offsetY: numeric,
   *    }
   * @private
   */
  _bindOffsetValuesToBorders(
    changeObj: any,
    bindToBorders: boolean | null = null,
  ) {
    // if bindToBorders is disabled -> nothing do here
    if (
      bindToBorders === false ||
      (bindToBorders === null && !this.props.bindToBorders)
    ) {
      return changeObj;
    }

    const {originalWidth, originalHeight}: any = this.state;

    const currentElementWidth = originalWidth * changeObj.zoomLevel;
    const currentElementHeight = originalHeight * changeObj.zoomLevel;

    // make sure that view doesn't go out of borders
    const offsetXBound = this._getBoundOffsetValue(
      'x',
      changeObj.offsetX,
      originalWidth,
      currentElementWidth,
      changeObj.zoomLevel,
    );
    changeObj.offsetX = offsetXBound;

    const offsetYBound = this._getBoundOffsetValue(
      'y',
      changeObj.offsetY,
      originalHeight,
      currentElementHeight,
      changeObj.zoomLevel,
    );
    changeObj.offsetY = offsetYBound;

    return changeObj;
  }

  /**
   * Handles the acutal movement of our pan responder
   *
   * @param e
   * @param gestureState
   *
   * @private
   */
  _handlePanResponderMove = (e: any, gestureState: any) => {
    if (this.props.onPanResponderMove) {
      if (
        this.props.onPanResponderMove(
          e,
          gestureState,
          this._getZoomableViewEventObject(),
        )
      ) {
        return false;
      }
    }

    if (gestureState.numberActiveTouches === 2) {
      if (this.longPressTimeout) {
        clearTimeout(this.longPressTimeout);
        this.longPressTimeout = null;
      }

      if (!this.isDistanceSet) {
        this._handlePanResponderGrant(e, gestureState);
      }

      this.gestureType = 'pinch';
      this._handlePinching(e, gestureState);
    } else if (gestureState.numberActiveTouches === 1) {
      if (
        this.longPressTimeout &&
        (Math.abs(gestureState.dx) > 5 || Math.abs(gestureState.dy) > 5)
      ) {
        clearTimeout(this.longPressTimeout);
        this.longPressTimeout = null;
      }

      if (this.gestureType !== 'pinch') {
        this.gestureType = 'shift';
      }
      this._handleMovement(e, gestureState);
    }
  };

  /**
   * Handles the pinch movement and zooming
   *
   * @param e
   * @param gestureState
   *
   * @private
   */
  _handlePinching = (e: any, gestureState: any) => {
    const {
      maxZoom,
      minZoom,
      zoomCenteringLevelDistance,
      pinchToZoomInSensitivity,
      pinchToZoomOutSensitivity,
    }: any = this.props;

    const dx = Math.abs(
      e.nativeEvent.touches[0].pageX - e.nativeEvent.touches[1].pageX,
    );
    const dy = Math.abs(
      e.nativeEvent.touches[0].pageY - e.nativeEvent.touches[1].pageY,
    );
    const distant = Math.sqrt(dx * dx + dy * dy);

    if (this.props.onZoomBefore) {
      if (
        this.props.onZoomBefore(
          e,
          gestureState,
          this._getZoomableViewEventObject(),
        )
      ) {
        return false;
      }
    }

    // define the new zoom level and take zoom level sensitivity into consideration
    const zoomChangeFromStartOfPinch = distant / this.distance;
    const pinchToZoomSensitivity =
      zoomChangeFromStartOfPinch < 1
        ? pinchToZoomOutSensitivity
        : pinchToZoomInSensitivity;
    let zoomLevel =
      (zoomChangeFromStartOfPinch * this.state.lastZoomLevel +
        this.state.lastZoomLevel * pinchToZoomSensitivity) /
      (pinchToZoomSensitivity + 1);

    // make sure max and min zoom levels are respected
    if (maxZoom !== null && zoomLevel > maxZoom) {
      zoomLevel = maxZoom;
    }

    if (zoomLevel < minZoom) {
      zoomLevel = minZoom;
    }

    // only use the first position we get by pinching, or the screen will "wobble" during zoom action
    if (this.pinchZoomPosition === null) {
      const pinchToZoomCenterX =
        Math.min(
          e.nativeEvent.touches[0].pageX,
          e.nativeEvent.touches[1].pageX,
        ) +
        dx / 2;
      const pinchToZoomCenterY =
        Math.min(
          e.nativeEvent.touches[0].pageY,
          e.nativeEvent.touches[1].pageY,
        ) +
        dy / 2;

      this.pinchZoomPosition = this._getOffsetAdjustedPosition(
        pinchToZoomCenterX,
        pinchToZoomCenterY,
      );
    }

    // make sure we shift the layer slowly during our zoom movement
    const zoomStage =
      Math.abs(zoomLevel - this.state.lastZoomLevel) /
      zoomCenteringLevelDistance;

    const ratioOffsetX =
      this.state.lastX + zoomStage * this.pinchZoomPosition.x;
    const ratioOffsetY =
      this.state.lastY + zoomStage * this.pinchZoomPosition.y;

    // define the changeObject and make sure the offset values are bound to view
    const changeStateObj = this._bindOffsetValuesToBorders(
      {
        zoomLevel,
        lastMovePinch: true,
        offsetX: ratioOffsetX,
        offsetY: ratioOffsetY,
      },
      null,
    );

    this.setState(changeStateObj, () => {
      if (this.props.onZoomAfter) {
        this.props.onZoomAfter(
          e,
          gestureState,
          this._getZoomableViewEventObject(),
        );
      }
    });
  };

  /**
   * Handles movement by tap and move
   *
   * @param e
   * @param gestureState
   *
   * @private
   */
  _handleMovement = (e: any, gestureState: any) => {
    const {movementSensibility}: any = this.props;

    // make sure not to accidentally move after pinch to zoom
    if (this.pinchZoomPosition) {
      return;
    }

    const offsetX =
      this.state.lastX +
      gestureState.dx / this.state.zoomLevel / movementSensibility;
    const offsetY =
      this.state.lastY +
      gestureState.dy / this.state.zoomLevel / movementSensibility;

    this._setNewOffsetPosition(offsetX, offsetY);
  };

  /**
   * Set the state to offset moved
   *
   * @param {number} newOffsetX
   * @param {number} newOffsetY
   * @param {bool} bindToBorders
   * @param {bool} updateLastCoords should the last coordinates be updated as well?
   * @param {() => void)} callbk
   * @returns
   */
  _setNewOffsetPosition = (
    newOffsetX: number,
    newOffsetY: number,
    bindToBorders = true,
    updateLastCoords = false,
    callbk: () => void = () => null,
  ) => {
    const {onShiftingBefore, onShiftingAfter} = this.props;

    if (onShiftingBefore) {
      if (onShiftingBefore(null, null, this._getZoomableViewEventObject())) {
        return false;
      }
    }

    const changeStateObj = this._bindOffsetValuesToBorders(
      {
        lastMovePinch: false,
        zoomLevel: this.state.zoomLevel,
        offsetX: newOffsetX,
        offsetY: newOffsetY,
      },
      bindToBorders,
    );

    // if we want to update last coords as well -> do that
    if (updateLastCoords) {
      changeStateObj.lastX = changeStateObj.offsetX;
      changeStateObj.lastY = changeStateObj.offsetY;
    }

    this.setState(changeStateObj, () => {
      if (callbk) {
        callbk();
      }

      if (onShiftingAfter) {
        if (onShiftingAfter(null, null, this._getZoomableViewEventObject())) {
          return false;
        }
      }
    });
  };

  /**
   * Wraps the check for double tap
   *
   * @param e
   * @param gestureState
   *
   * @private
   */
  _doubleTapCheck = (e: any, gestureState: any) => {
    const now = new Date().getTime();

    if (
      this.lastPressHolder &&
      now - this.lastPressHolder < (this.props.doubleTapDelay ?? 0)
    ) {
      delete this.lastPressHolder;
      this._handleDoubleTap(e, gestureState);
    } else {
      this.lastPressHolder = now;
    }
  };

  /**
   * Handles the double tap event
   *
   * @param event
   * @param gestureState
   *
   * @private
   */
  _handleDoubleTap(e: any, gestureState: any) {
    const {onDoubleTapBefore, onDoubleTapAfter, doubleTapZoomToCenter} =
      this.props;

    // ignore more than 2 touches
    if (gestureState.numberActiveTouches > 1 || !this.props.zoomEnabled) {
      return;
    }

    if (onDoubleTapBefore) {
      onDoubleTapBefore(e, gestureState, this._getZoomableViewEventObject());
    }

    const nextZoomStep: any = this._getNextZoomStep();

    // define new zoom position coordinates
    const zoomPositionCoordinates = {
      x: e.nativeEvent.locationX,
      y: e.nativeEvent.locationY,
    };

    // if doubleTapZoomToCenter enabled -> always zoom to center instead
    if (doubleTapZoomToCenter) {
      zoomPositionCoordinates.x = 0;
      zoomPositionCoordinates.y = 0;
    }

    this._zoomToLocation(
      zoomPositionCoordinates.x,
      zoomPositionCoordinates.y,
      nextZoomStep,
      true,
      () => {
        if (onDoubleTapAfter) {
          onDoubleTapAfter(
            e,
            gestureState,
            this._getZoomableViewEventObject({
              zoomLevel: nextZoomStep,
            }),
          );
        }
      },
    );
  }

  /**
   * Returns the next zoom step based on current step and zoomStep property.
   * If we are zoomed all the way in -> return to initialzoom
   *
   * @returns {*}
   */
  _getNextZoomStep() {
    const {zoomStep, maxZoom, initialZoom}: any = this.props;
    const {zoomLevel} = this.state;

    if (zoomLevel === maxZoom) {
      return initialZoom;
    }

    const nextZoomStep = zoomLevel + zoomLevel * zoomStep;
    if (maxZoom !== null && nextZoomStep > maxZoom) {
      return maxZoom;
    }

    return nextZoomStep;
  }

  /**
   * Converts touch events x and y coordinates into the context of our element center
   *
   * @param x
   * @param y
   * @returns {{x: number, y: number}}
   *
   * @private
   */
  _getOffsetAdjustedPosition(x: number, y: number) {
    const {originalWidth, originalHeight}: any = this.state;

    if (x === 0 && y === 0) {
      return {
        x: 0,
        y: 0,
      };
    }

    const returnObj = {
      x: -x + originalWidth / 2,
      y: -y + originalHeight / 2,
    };

    return returnObj;
  }

  /**
   * Zooms to a specific location in our view
   *
   * @param x
   * @param y
   * @param newZoomLevel
   * @param bindToBorders
   * @param callbk
   *
   * @private
   */
  _zoomToLocation(
    x: number,
    y: number,
    newZoomLevel: number,
    bindToBorders = true,
    callbk: (() => void) | null = null,
  ) {
    const offsetAdjustedPosition = this._getOffsetAdjustedPosition(x, y);

    if (this.props.onZoomBefore) {
      this.props.onZoomBefore(null, null, this._getZoomableViewEventObject());
    }

    // define the changeObject and make sure the offset values are bound to view
    const changeStateObj = this._bindOffsetValuesToBorders(
      {
        zoomLevel: newZoomLevel,
        offsetX: offsetAdjustedPosition.x,
        offsetY: offsetAdjustedPosition.y,
        lastZoomLevel: newZoomLevel,
        lastX: offsetAdjustedPosition.x,
        lastY: offsetAdjustedPosition.y,
      },
      bindToBorders,
    );

    this.setState(changeStateObj, () => {
      if (callbk) {
        callbk();
      }

      if (this.props.onZoomAfter) {
        this.props.onZoomAfter(null, null, this._getZoomableViewEventObject());
      }
    });
  }

  /**
   * Zooms to a specificied zoom level.
   * Returns a promise if everything was updated and a boolean, whether it could be updated or if it exceeded the min/max zoom limits.
   *
   * @param {number} newZoomLevel
   * @param {bool} bindToBorders
   *
   * @return {Promise<bool>}
   */
  zoomTo(newZoomLevel: number, bindToBorders = true): Promise<boolean> {
    return new Promise(resolve => {
      // if we would go out of our min/max limits -> abort
      if (
        newZoomLevel >= (this.props.maxZoom ?? 0) ||
        newZoomLevel <= (this.props.minZoom ?? 0)
      ) {
        resolve(false);
        return;
      }

      this._zoomToLocation(0, 0, newZoomLevel, bindToBorders, () => {
        resolve(true);
      });
    });
  }

  /**
   * Zooms in or out by a specificied change level
   * Use a positive number for `zoomLevelChange` to zoom in
   * Use a negative number for `zoomLevelChange` to zoom out
   *
   * Returns a promise if everything was updated and a boolean, whether it could be updated or if it exceeded the min/max zoom limits.
   *
   * @param {number} newZoomLevel
   * @param {bool} bindToBorders
   *
   * @return {Promise<bool>}
   */
  zoomBy(
    zoomLevelChange: number | null | undefined = null,
    bindToBorders = true,
  ): Promise<boolean> {
    // if no zoom level Change given -> just use zoom step
    if (!zoomLevelChange) {
      zoomLevelChange = this.props.zoomStep;
    }

    return this.zoomTo(
      this.state.zoomLevel + (zoomLevelChange ?? 0),
      bindToBorders,
    );
  }

  /**
   * Moves the zoomed view to a specified position
   * Returns a promise when finished
   *
   * @param {number} newOffsetX the new position we want to move it to (x-axis)
   * @param {number} newOffsetY the new position we want to move it to (y-axis)
   * @param {bool} bindToBorders
   *
   * @return {Promise<bool>}
   */
  moveTo(
    newOffsetX: number,
    newOffsetY: number,
    bindToBorders = true,
  ): Promise<void> {
    const {zoomLevel, originalWidth, originalHeight}: any = this.state;

    const offsetX = (newOffsetX - originalWidth / 2) / zoomLevel;
    const offsetY = (newOffsetY - originalHeight / 2) / zoomLevel;

    return new Promise(resolve => {
      this._setNewOffsetPosition(
        -offsetX,
        -offsetY,
        bindToBorders,
        true,
        () => {
          resolve();
        },
      );
    });
  }

  /**
   * Moves the zoomed view by a certain amount.
   *
   * Returns a promise when finished
   *
   * @param {number} offsetChangeX the amount we want to move the offset by (x-axis)
   * @param {number} offsetChangeXY the amount we want to move the offset by (y-axis)
   * @param {bool} bindToBorders
   *
   * @return {Promise<bool>}
   */
  moveBy(
    offsetChangeX: number,
    offsetChangeY: number,
    bindToBorders = true,
  ): Promise<void> {
    const {zoomLevel, lastX, lastY} = this.state;

    const offsetX = lastX - offsetChangeX / zoomLevel;
    const offsetY = lastY - offsetChangeY / zoomLevel;

    return new Promise(resolve => {
      this._setNewOffsetPosition(offsetX, offsetY, bindToBorders, true, () => {
        resolve();
      });
    });
  }

  render() {
    const styles = appZoomableViewStyles;
    return (
      <View
        style={styles.container}
        {...this.gestureHandlers.panHandlers}
        onLayout={this._getBoxDimensions}>
        <View
          style={[
            styles.wrapper,
            this.props.style,
            {
              transform: [
                {scale: this.state.zoomLevel},
                {scale: this.state.zoomLevel},
                {translateX: this.state.offsetX},
                {translateY: this.state.offsetY},
              ],
            },
          ]}>
          {this.props.children}
        </View>
      </View>
    );
  }
}

export default AppZoomableView;
