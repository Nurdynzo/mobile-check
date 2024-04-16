import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import {NoteCardProps} from '../wardround-clinic-note-item-card/types';
import {AppButton} from '../../buttons';
import WardroundClinicNoteItemCard from '../wardround-clinic-note-item-card';
import {AppText} from '../../common';
import {wardroundClinicNotesStyles} from './styles';

const WardroundClinicNotesCard: FunctionComponent<{
  items: (NoteCardProps & {id: string})[];
  onPressViewRecords?: () => void;
}> = ({items = [], onPressViewRecords}) => {
  const styles = wardroundClinicNotesStyles;
  return (
    <View style={styles.container}>
      <AppText text="Ward round & Clinic notes" type="title_semibold" />
      {items.map(item => (
        <WardroundClinicNoteItemCard key={item.id} {...item} />
      ))}
      <AppButton text="View paper records" onPress={onPressViewRecords} />
    </View>
  );
};
export default WardroundClinicNotesCard;
