import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {BinIcon} from '../../../assets/svg';
import {AppText} from '../../common';
import {useColors} from '../../../hooks/useColors';
import {itemCardStyles} from './styles';
import {ItemCardProps} from './type';

const BillItemCard: FunctionComponent<ItemCardProps> = ({
  price,
  quality,
  name,
  onDelete,
  discountName,
  style,
  removeDeleteBtn,
}) => {
  const {colors} = useColors();
  const styles = itemCardStyles({colors});
  return (
    <View style={[styles.container, style]}>
      <View style={styles.detailsContainer}>
        <AppText text={name} />
        <View style={styles.quantityContainer}>
          <AppText text={`Qty: ${quality}`} />

          <View style={styles.divider} />

          <AppText text={price} />
          <View style={styles.divider} />
          <AppText text={discountName} color="text300" />
        </View>
      </View>
      {!removeDeleteBtn && (
        <TouchableOpacity onPress={onDelete}>
          <BinIcon />
        </TouchableOpacity>
      )}
    </View>
  );
};
export default BillItemCard;
