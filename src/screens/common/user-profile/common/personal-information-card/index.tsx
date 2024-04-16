import {AppText} from '@/components/common';
import {useColors} from '@/hooks/useColors';
import {EMPTY_STRING} from '@/utils/constants';
import React from 'react';
import {View} from 'react-native';
import CardTitle from '../card-title';
import {personalInformationCardStyles} from './styles';

const PersonalInformationCard = ({
  data = [{title: 'title', value: 'value'}],
  cardTitle = EMPTY_STRING,
}: {
  data: Array<{title: string; value: string}>;
  cardTitle?: string;
}) => {
  const {colors} = useColors();
  const styles = personalInformationCardStyles({colors});
  return (
    <View style={styles.personalInfoCard}>
      <CardTitle title={cardTitle} />
      {data.map((item, index: number) => (
        <Detail key={index} title={item.title} value={item.value} />
      ))}
    </View>
  );
};

export default PersonalInformationCard;

const Detail = ({title = 'title', value}: {title?: string; value: string}) => {
  return (
    <View>
      <AppText text={title} type="label_semibold" color="text300" />
      <AppText text={value} type="body_2_semibold" color="text400" />
    </View>
  );
};
