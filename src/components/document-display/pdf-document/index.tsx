import {DocumentView} from '@/components/common';
import LoadingCircleProgressBar from '@/components/loading-circle-progress-bar';
import {SCREEN_HEIGHT, isAndroid} from '@/resources/config';
import {localStorage, localStorageKeys} from '@/utils/localStorage';
import React, {FunctionComponent} from 'react';
import Pdf from 'react-native-pdf';
import {DocumentViewProps} from '../type';
import AuthPayload from '@/types/authPayload';

const PdfDocumentDisplay: FunctionComponent<DocumentViewProps> = ({
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
        <Pdf
          trustAllCerts={isAndroid ? false : true}
          enableAntialiasing
          enableAnnotationRendering
          source={{
            uri: `${process.env.API_BASE_URL}/api/services/app/PatientDocumentUpload/GetDocumentById?fileId=${docId}`,
            method: 'get',
            headers: {Authorization: `Bearer ${authPayload?.accessToken}`},
            cache: true,
          }}
          renderActivityIndicator={progress => (
            <LoadingCircleProgressBar
              strokeWidth={4}
              size={50}
              progress={(progress / 1) * 100}
            />
          )}
          style={{flex: 1}}
          horizontal
          enablePaging
        />
      }
      docNum={docNum}
      isHorizontalScroll={isHorizontalScroll}
    />
  );
};

export default PdfDocumentDisplay;
