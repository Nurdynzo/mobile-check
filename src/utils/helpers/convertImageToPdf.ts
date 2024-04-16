import {CreatePdfOptions, createPdf} from 'react-native-images-to-pdf/src';

export const convertImageToPdf = async (props: CreatePdfOptions) => {
  const pdfPath = await createPdf(props);
  return pdfPath;
};
