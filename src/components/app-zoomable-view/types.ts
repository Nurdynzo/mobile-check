import {ReactNode} from 'react';
import {PanResponderGestureState, ViewStyle} from 'react-native';

export interface ReactNativeZoomableViewProps {
  zoomEnabled?: boolean;
  initialZoom?: number;
  initialOffsetX?: number;
  initialOffsetY?: number;
  maxZoom?: number;
  minZoom?: number;
  doubleTapDelay?: number;
  doubleTapZoomToCenter?: boolean;
  bindToBorders?: boolean;
  zoomStep?: number;
  pinchToZoomInSensitivity?: number;
  pinchToZoomOutSensitivity?: number;
  zoomCenteringLevelDistance?: number;
  movementSensibility?: number;
  longPressDuration?: number;
  captureEvent?: boolean;
  style?: ViewStyle;
  children?: ReactNode;

  onDoubleTapBefore?: (
    event: Event,
    gestureState: PanResponderGestureState,
    zoomableViewEventObject: ZoomableViewEvent,
  ) => void;
  onDoubleTapAfter?: (
    event: Event,
    gestureState: PanResponderGestureState,
    zoomableViewEventObject: ZoomableViewEvent,
  ) => void;
  onShiftingBefore?: (
    event: Event | null,
    gestureState: PanResponderGestureState | null,
    zoomableViewEventObject: ZoomableViewEvent,
  ) => boolean;
  onShiftingAfter?: (
    event: Event | null,
    gestureState: PanResponderGestureState | null,
    zoomableViewEventObject: ZoomableViewEvent,
  ) => boolean;
  onShiftingEnd?: (
    event: Event,
    gestureState: PanResponderGestureState,
    zoomableViewEventObject: ZoomableViewEvent,
  ) => void;
  onZoomBefore?: (
    event: Event | null,
    gestureState: PanResponderGestureState | null,
    zoomableViewEventObject: ZoomableViewEvent,
  ) => boolean | void;
  onZoomAfter?: (
    event: Event | null,
    gestureState: PanResponderGestureState | null,
    zoomableViewEventObject: ZoomableViewEvent,
  ) => void;
  onZoomEnd?: (
    event: Event,
    gestureState: PanResponderGestureState,
    zoomableViewEventObject: ZoomableViewEvent,
  ) => void;
  onLongPress?: (
    event: Event,
    gestureState: PanResponderGestureState,
    zoomableViewEventObject: ZoomableViewEvent,
  ) => void;
  onStartShouldSetPanResponder?: (
    event: Event,
    gestureState: PanResponderGestureState,
    zoomableViewEventObject: ZoomableViewEvent,
    baseComponentResult: boolean,
  ) => boolean;
  onMoveShouldSetPanResponder?: (
    event: Event,
    gestureState: PanResponderGestureState,
    zoomableViewEventObject: ZoomableViewEvent,
    baseComponentResult: boolean,
  ) => boolean;
  onPanResponderGrant?: (
    event: Event,
    gestureState: PanResponderGestureState,
    zoomableViewEventObject: ZoomableViewEvent,
  ) => void;
  onPanResponderEnd?: (
    event: Event,
    gestureState: PanResponderGestureState,
    zoomableViewEventObject: ZoomableViewEvent,
  ) => void;
  onPanResponderMove?: (
    event: Event,
    gestureState: PanResponderGestureState,
    zoomableViewEventObject: ZoomableViewEvent,
  ) => boolean;
  onPanResponderTerminate?: (
    event: Event,
    gestureState: PanResponderGestureState,
    zoomableViewEventObject: ZoomableViewEvent,
  ) => void;
  onPanResponderTerminationRequest?: (
    event: Event,
    gestureState: PanResponderGestureState,
    zoomableViewEventObject: ZoomableViewEvent,
  ) => boolean;
}

export interface ReactNativeZoomableViewState {
  offsetX: number;
  offsetY: number;
  lastX: number;
  lastY: number;
  lastZoomLevel: number;
  zoomLevel: number;
  originalWidth: number | null;
  originalHeight: number | null;
  lastMovePinch: boolean;
}
export interface ZoomableViewEvent {
  zoomLevel: number;
  offsetX: number;
  offsetY: number;
  lastZoomLevel: number;
  lastX: number;
  lastY: number;
  distanceBottom: number;
  distanceLeft: number;
  distanceRight: number;
  distanceTop: number;
  lastMovePinch: boolean;
  originalHeight: number;
  originalWidth: number;
}
