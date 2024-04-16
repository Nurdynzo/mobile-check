import React from 'react';
import {View} from 'react-native';

const AppSpacer = ({
  size = 16,
  direction,
  marginOrPadding = 'margin',
}: {
  size?: number;
  direction: 'vertical' | 'horizontal' | 'left' | 'right' | 'top' | 'bottom';
  marginOrPadding?: 'margin' | 'padding';
}) => {
  let style = {};

  switch (direction) {
    case 'vertical':
      if (marginOrPadding === 'margin') {
        style = {
          marginTop: size,
          marginBottom: size,
        };
      } else {
        style = {
          paddingTop: size,
          paddingBottom: size,
        };
      }
      break;

    case 'horizontal':
      if (marginOrPadding === 'margin') {
        style = {
          marginLeft: size,
          marginRight: size,
        };
      } else {
        style = {
          paddingLeft: size,
          paddingRight: size,
        };
      }
      break;

    case 'left':
      if (marginOrPadding === 'margin') {
        style = {
          marginLeft: size,
        };
      } else {
        style = {
          paddingLeft: size,
        };
      }
      break;

    case 'right':
      if (marginOrPadding === 'margin') {
        style = {
          marginRight: size,
        };
      } else {
        style = {
          paddingRight: size,
        };
      }
      break;

    case 'top':
      if (marginOrPadding === 'margin') {
        style = {
          marginTop: size,
        };
      } else {
        style = {
          paddingTop: size,
        };
      }
      break;

    case 'bottom':
      if (marginOrPadding === 'margin') {
        style = {
          marginBottom: size,
        };
      } else {
        style = {
          paddingBottom: size,
        };
      }
      break;

    default:
      break;
  }

  return <View style={style} />;
};

export default AppSpacer;
