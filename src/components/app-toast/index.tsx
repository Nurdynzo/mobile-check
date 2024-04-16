import React, {FunctionComponent} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Toast, {
  ToastConfig,
  ToastConfigParams,
} from 'react-native-toast-message';
import {useColors} from '../../hooks/useColors';
import {appToastViewStyles} from './styles';
import {
  ToastProps,
  appToastViewProps,
  statusColors,
  toastTypeProps,
} from './types';
import {AppText} from '../common';
import {isIOS} from '../../resources/config';

export const toastTypes: {[key in toastTypeProps]: toastTypeProps} = {
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  WARNING: 'WARNING',
  INFO: 'INFO',
};

const AppToastView: FunctionComponent<appToastViewProps> = ({
  message,
  title = 'Title',
  type = 'INFO',
  onHide,
}) => {
  const {colors} = useColors();

  const toastColors: {
    [key in toastTypeProps]: statusColors;
  } = {
    SUCCESS: {color1: 'success25', color2: 'success50', color3: 'success600'},
    ERROR: {color1: 'danger25', color2: 'danger50', color3: 'danger300'},
    WARNING: {color1: 'alert25', color2: 'alert50', color3: 'alert500'},
    INFO: {
      color1: 'information25',
      color2: 'information50',
      color3: 'information300',
    },
  };

  const styles = appToastViewStyles({colors, statusColors: toastColors[type]});

  return (
    <View style={styles.container}>
      <View style={[styles.toast]}>
        <View style={styles.empty} />
        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <AppText
              text={title}
              type={'subtitle_semibold'}
              color={'text400'}
            />
            <AppText text={message} type={'body_2_medium'} color={'text400'} />
          </View>
          <TouchableOpacity style={styles.dismissBtn} onPress={onHide}>
            <AppText
              text={'Dismiss'}
              type={'button_semibold'}
              color={toastColors[type].color3}
              align="center"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export const showToast = (
  toastType: toastTypeProps,
  {title, message}: {title: string | undefined; message: string | undefined},
) => {
  return Toast.show({
    type: 'appToast',
    text1: title,
    text2: message,
    props: {toastType},
  });
};

const toastConfig: ToastConfig = {
  appToast: (obj: ToastConfigParams<ToastProps>) => {
    const {text2, text1, props, hide} = obj;

    return (
      <AppToastView
        message={text2}
        title={text1}
        type={props.toastType}
        onHide={hide}
      />
    );
  },
};

const AppToast: FunctionComponent = () => {
  return <Toast config={toastConfig} topOffset={isIOS ? 70 : 5} />;
};

export default AppToast;
