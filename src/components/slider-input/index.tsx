import React from 'react';
import {useColors} from '@/hooks/useColors';
import {sliderStyles} from './styles';
import {View} from 'react-native';
import {AppText} from '../common';
import {Slider} from '@miblanchard/react-native-slider';
import {Rectangle71Icon} from '@/assets/svg';

const SliderInput = ({
  title,
  scaleSuffix = 'Pain',
  number = 0,
  getValue = value => value,
}: {
  title: string;
  scaleSuffix?: string;
  number: number;
  getValue?: (value: number) => void;
}) => {
  const {colors} = useColors();
  const styles = sliderStyles({number, colors});
  return (
    <View style={styles.container}>
      <AppText type="subtitle_semibold" color="text50" text={title} />
      <View>
        <View style={styles.numbersContainer}>
          {[0, 2, 4, 6, 8, 10].map(num => (
            <AppText
              text={num}
              key={num}
              type="caption_medium"
              color="text100"
            />
          ))}
        </View>
        <Slider
          value={number}
          onValueChange={(value: number[]) => getValue(value[0])}
          minimumValue={0}
          maximumValue={10}
          minimumTrackTintColor={number > 0 ? colors.orange : 'transparent'}
          thumbTintColor={colors.orange}
          maximumTrackTintColor={colors.quatreFade}
          trackStyle={styles.track}
          thumbStyle={{...styles.track, ...styles.round}}
          renderThumbComponent={() => (
            <View style={number > 0 ? styles.thumb : styles.zeroThumb}>
              <Rectangle71Icon />
            </View>
          )}
        />
        <AppText
          style={{marginTop: 11}}
          type="title_semibold"
          color="text400"
          text={`${scaleSuffix} scale: ${Math.ceil(number)}/${10}`}
        />
      </View>
    </View>
  );
};

export default SliderInput;
