import {useColors} from '@/hooks/useColors';
import React, {ReactNode} from 'react';
import {View, ViewStyle} from 'react-native';
import {PaymentConfirmationStyles} from '../../styles';

export const PaymentConfirmationCard = ({
  children,
  style,
}: {
  children?: ReactNode;
  style?: ViewStyle;
}) => {
  const {colors} = useColors();

  const styles = PaymentConfirmationStyles({colors});

  return (
    <>
      <View style={[styles.generalRowWrapper]}>
        <View style={[styles.generalRowContainer, style]}>{children}</View>
      </View>
    </>
  );
};

export default PaymentConfirmationCard;
