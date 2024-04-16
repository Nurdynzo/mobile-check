import DocumentPicker, {
  DocumentPickerResponse,
} from 'react-native-document-picker';
import {logThis} from './logThis';

export const uploadPDF = async () => {
  try {
    const res: DocumentPickerResponse = await DocumentPicker.pickSingle({
      type: [DocumentPicker.types.pdf],
    });
    return res;
  } catch (error) {
    logThis('Document picker error:', error);
  }
};
