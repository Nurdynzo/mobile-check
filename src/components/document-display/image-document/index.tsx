import {DocumentView} from '@/components/common';
import LoadingCircleProgressBar from '@/components/loading-circle-progress-bar';
import {SCREEN_HEIGHT} from '@/resources/config';
import {localStorage, localStorageKeys} from '@/utils/localStorage';
import React, {FunctionComponent, useState} from 'react';
import {Image, ImageSourcePropType, View} from 'react-native';
import {DocumentViewProps} from '../type';
import {imageViewStyles} from './styles';
import AuthPayload from '@/types/authPayload';

const ImageDocumentDisplay: FunctionComponent<DocumentViewProps> = ({
  docId,
  docNum,
  isHorizontalScroll,
  verticalHeight = SCREEN_HEIGHT * 0.6,
}) => {
  const authPayload = localStorage.get<AuthPayload>(
    localStorageKeys.ACCESS_TOKEN,
  );

  return (
    <DocumentView
      verticalHeight={verticalHeight}
      DocView={
        <ImageView
          source={{
            uri: `${process.env.API_BASE_URL}/api/services/app/PatientDocumentUpload/GetDocumentById?fileId=${docId}`,
            headers: {Authorization: `Bearer ${authPayload?.accessToken}`},
            method: 'get',
            cache: 'force-cache',
          }}
        />
      }
      docNum={docNum}
      isHorizontalScroll={isHorizontalScroll}
    />
  );
};

export default ImageDocumentDisplay;

const ImageView: FunctionComponent<{source: ImageSourcePropType}> = ({
  source,
}) => {
  const styles = imageViewStyles;
  const [progress, setProgress] = useState(0);
  const [isLoading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        source={source}
        progressiveRenderingEnabled
        style={styles.container}
        onProgress={({nativeEvent}) => {
          const newProgress = nativeEvent.loaded / nativeEvent.total;
          setProgress(newProgress);
        }}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
      />
      {isLoading && (
        <View style={styles.indicatorContainer}>
          <LoadingCircleProgressBar
            strokeWidth={4}
            size={50}
            progress={(progress / 1) * 100}
          />
        </View>
      )}
    </View>
  );
};
