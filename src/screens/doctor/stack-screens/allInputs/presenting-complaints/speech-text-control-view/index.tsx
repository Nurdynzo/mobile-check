import {BinIcon, MicrophoneIcon, PauseIcon} from '@/assets/svg';
import {AppIconButton} from '@/components/buttons';
import {AppText} from '@/components/common';
import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import SoundWaveProgress from './sound-wave-progress';
import {speachTextControlViewStyles} from './styles';
import {useColors} from '@/hooks/useColors';
import {formatTime} from '@/utils/helpers/format-time';

const SpeachTextControlView: FunctionComponent<{
  stopListing?: () => void;
  pauseListing?: () => void;
  startListing?: () => void;
  recordTime: number;
  speechVolume: number | undefined;
  islistening: boolean;
}> = ({
  recordTime,
  stopListing,
  pauseListing,
  speechVolume,
  islistening,
  startListing,
}) => {
  const {colors} = useColors();
  const styles = speachTextControlViewStyles({colors});
  return (
    <>
      <View style={[styles.container]}>
        <AppIconButton
          borderColor="danger300"
          height={32}
          width={32}
          icon={<BinIcon />}
          onPress={stopListing}
        />
        <AppText type="body_1_semibold" text={formatTime(recordTime)} />
        <View style={styles.soundWave}>
          <SoundWaveProgress
            progress={((speechVolume ?? 0) / 4) * 1}
            width={154}
            height={20}
          />
        </View>
        <AppIconButton
          borderColor={islistening ? 'neutral100' : 'primary400'}
          height={32}
          width={32}
          icon={islistening ? <PauseIcon /> : <MicrophoneIcon />}
          onPress={islistening ? pauseListing : startListing}
        />
      </View>
    </>
  );
};

export default SpeachTextControlView;
