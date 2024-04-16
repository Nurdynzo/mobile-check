import React, {FunctionComponent} from 'react';
import {Pressable} from 'react-native';
import {AppText} from '../../../../../../components/common';
import DisplayImage from '../../../../../../components/common/display-image';
import {useColors} from '../../../../../../hooks/useColors';
import {invoiceStatusStyles} from './styles';

const InvoiceStatus: FunctionComponent<{
  status: 'Issued' | 'Paid';
  fullname: string;
  imageUri?: string;
  onPress?: () => void;
}> = ({status, fullname, imageUri = '', onPress}) => {
  const {colors} = useColors();
  const styles = invoiceStatusStyles({colors});
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <AppText text={`${status} by:`} />
      <DisplayImage
        uri={imageUri}
        size={32}
        borderRadius={16}
        style={styles.image}
      />
      <AppText text={fullname} />
    </Pressable>
  );
};

export default InvoiceStatus;
