import {showToast} from '@/components/app-toast';
import {isAndroid} from '@/resources/config';
import {logThis} from '@/utils/helpers/logThis';
import Voice, {SpeechResultsEvent} from '@react-native-voice/voice';
import {useEffect, useState} from 'react';
import {PermissionsAndroid} from 'react-native';
import {EMPTY_STRING} from '../utils';

export const useVoiceText = ({
  onChangeText,
}: {
  onChangeText: (text: string) => void;
}) => {
  const [islistening, setIsListening] = useState(false);
  const [speechVolume, setSpeechVolume] = useState<number | undefined>();
  const [startTime, setStartTime] = useState(0);
  const [recordTime, setRecordTime] = useState(0);
  const [speechText, setSpeechText] = useState(EMPTY_STRING);
  const [pausedSpeech, setPausedSpeech] = useState(EMPTY_STRING);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (islistening) {
      interval = setInterval(() => {
        setRecordTime(Date.now() - startTime);
      }, 1000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [islistening, startTime]);

  useEffect(() => {
    onChangeText(`${pausedSpeech + ' ' + speechText}`.trimStart());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [speechText]);

  useEffect(() => {
    if (!islistening && speechText) {
      setPausedSpeech(prev => prev + speechText);
    }
  }, [islistening, speechText]);

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechError = error =>
      showToast('ERROR', {
        title: 'Speech Error Encountered!',
        message: error?.error?.message,
      });
    Voice.onSpeechVolumeChanged = e => setSpeechVolume(e.value);

    const androidPermissionChecking = async () => {
      if (isAndroid) {
        const hasPermit = await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        );
        logThis('hasPermit', hasPermit);

        const getService = await Voice.getSpeechRecognitionServices();
        logThis('getService', getService);
      }
    };
    androidPermissionChecking();

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechStart = () => {
    showToast('INFO', {
      title: 'Speech started!',
      message: 'Speech text record has started!',
    });
  };
  const onSpeechEnd = () => {
    showToast('INFO', {
      title: 'Speech Stoped!',
      message: 'Speech text record has stopped',
    });
  };

  const onSpeechResults = (event: SpeechResultsEvent) => {
    const text = (event?.value ?? [])[0] ?? EMPTY_STRING;
    setSpeechText(text);
  };

  const startListening = async () => {
    setIsListening(true);
    if (!startTime) {
      setStartTime(Date.now());
    } else {
      setStartTime(Date.now() - recordTime);
    }
    try {
      await Voice.start('en-US');
    } catch (error) {
      setIsListening(false);
      setStartTime(0);
      logThis('startListening Error!', error);
    }
  };

  const stopListening = async () => {
    try {
      await Voice.stop();
      Voice.removeAllListeners();
      setPausedSpeech(EMPTY_STRING);
      setSpeechText(EMPTY_STRING);
      setIsListening(false);
      setRecordTime(0);
      setStartTime(0);
      logThis('Speech has stopped!');
    } catch (error) {
      logThis('stopListening Error!', error);
    }
  };

  const pauseListening = async () => {
    try {
      await Voice.stop();
      setIsListening(false);
    } catch (error) {
      logThis('pauseListening Error!', error);
    }
  };

  return {
    startListening,
    pauseListening,
    stopListening,
    islistening,
    speechVolume,
    startTime,
    recordTime,
  };
};
