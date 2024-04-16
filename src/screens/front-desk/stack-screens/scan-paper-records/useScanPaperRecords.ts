import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {useSheet} from '@/hooks/useSheet';
import {SelectItemOptionsProp} from '@/types/selectItemsheet';
import ReactNativeBlobUtil from 'react-native-blob-util';
import {Image} from 'react-native-image-crop-picker';
import {createPdf} from 'react-native-images-to-pdf';
import {showToast} from '@/components/app-toast';
import {useApiServicesAppUploadPatientScannedDocumentPostMutation} from '@/state/services/customApi';
import {
  ScannedDocumentReviewerQueryResponse,
  useApiServicesAppPatientdocumentuploadAssignuploadedfilestoreviewerPostMutation,
  useApiServicesAppPatientdocumentuploadGetlistofreviewerforscanneddocumentGetQuery,
} from '@/state/services/patientApi';
import File from '@/types/file';
import {navigationType} from '@/types/screen';
import {
  generateRandomText,
  getErrorMessage,
  uploadImage,
} from '@/utils/helpers';
import {logThis} from '@/utils/helpers/logThis';
import {useAppSelector} from '@/state/hooks';
import {selectPatient} from '@/state/slices/patient/selectedPatient';

//TODO(Zucci): break this file into multiple isolated hooks

export type scanPaperRecordTypes =
  | 'awaiting'
  | 'started'
  | 'snapped'
  | 'previewing';

export const useScanPaperRecords = () => {
  const {code: patientCode, fullName: patientName} =
    useAppSelector(selectPatient);

  const navigation: navigationType = useNavigation();
  const {
    closeSheet: closeMoreSheet,
    openSheet: openMoreSheet,
    sheetRef: moreSheet,
  } = useSheet();

  const {
    closeSheet: closeShareSheet,
    openSheet: openShareSheet,
    sheetRef: shareSheet,
  } = useSheet();

  const {
    closeSheet: closeSuccessSheet,
    openSheet: openSuccessSheet,
    sheetRef: successSheet,
  } = useSheet();

  const [state, setState] = useState<scanPaperRecordTypes>('awaiting');
  const [queryForReviewer, setQueryForReviewer] = useState<string>('');
  const [images, setImages] = useState<Array<Image>>([]);

  const [uploadedPDFID, setUploadedPDFID] = useState<number>(-10);
  const [uploading, setUploading] = useState(false);

  const [createdPDF, setCreatedPDF] = useState('');
  const [createdPDFPath, setCreatedPDFPath] = useState('');
  const [creatingPDF, setCreatingPDF] = useState(false);

  const [pdfProgress, setPdfProgress] = useState(0);
  const [numberOfPdfPages, setNumberOfPdfPages] = useState(0);
  const [currentPdfPage, setCurrentPdfPage] = useState(1);
  const [canSendToReviewerNow, setCanSendToReviewerNow] = useState(false);

  const [selectedReviewer, setSelectedReviewer] = useState<{
    value: string;
    id: string;
    label: string;
  } | null>(null);
  const [sendingToReviewer, setSendingToReviewer] = useState(false);

  const {
    isLoading: isLoadingReviewers,
    data: reviewers,
    isError: isFailedToGetReviewers,
  } = useApiServicesAppPatientdocumentuploadGetlistofreviewerforscanneddocumentGetQuery();

  const [assignReviewer] =
    useApiServicesAppPatientdocumentuploadAssignuploadedfilestoreviewerPostMutation();

  const [uploadScannedDocument] =
    useApiServicesAppUploadPatientScannedDocumentPostMutation();

  const handleAwaiting = () => {
    setState('awaiting');
  };

  const handleSnapped = () => {
    setState('snapped');
  };
  const handlePreview = () => {
    setState('previewing');
  };
  const handleShare = () => {
    openShareSheet();
  };
  const handleSuccess = () => {
    closeShareSheet();
    openSuccessSheet();
  };
  const handleReturnToHome = () => {
    closeSuccessSheet();
    setState('awaiting');
  };

  const formatAllReviewers = (
    data: Array<ScannedDocumentReviewerQueryResponse>,
  ) => {
    if (data) {
      return data?.map(({fullName, id}) => ({
        item: {
          value: fullName,
          id,
          label: fullName,
        },
      })) as SelectItemOptionsProp<
        Pick<ScannedDocumentReviewerQueryResponse, 'fullName'>
      >;
    } else {
      return [];
    }
  };

  const handleAllReviewers = () => {
    if (queryForReviewer) {
      return formatAllReviewers(reviewers || []).filter(option =>
        `${option.item.value}`
          .toLowerCase()
          .includes(`${queryForReviewer}`.toLowerCase()),
      );
    } else {
      return formatAllReviewers(reviewers || []);
    }
  };
  const handlePhoto = async () => {
    try {
      const response = await uploadImage({
        from: 'openCamera',
      });
      if (!response) {
        return;
      }
      setImages(prev => [...prev, response]);
      handleSnapped();
    } catch (error) {
      logThis(getErrorMessage(error));
    }
  };

  const prepareConverstion = () => {
    setCreatingPDF(true);
  };

  const handleConvertToPdf = async () => {
    try {
      setCanSendToReviewerNow(false);
      setCreatingPDF(true);
      setState('previewing');
      const pages = images.map(image => ({imagePath: `file://${image?.path}`}));
      const outputPath = `file://${
        ReactNativeBlobUtil.fs.dirs.DocumentDir
      }/${generateRandomText(10)}`;
      const pdfPath = await createPdf({pages, outputPath});
      setCreatedPDF(pdfPath);
      setCreatedPDFPath(outputPath);
    } catch (error) {
      logThis(`Failed to create PDF: ${error}`);
      showToast('ERROR', {
        message: 'Failed to create your pdf, try again',
        title: 'Pdf creation failed!',
      });
      throw error;
    } finally {
      setCreatingPDF(false);
    }
  };

  const handleCreatePDFCompleted = (numberOfPages: number) => {
    setNumberOfPdfPages(numberOfPages);
  };
  const handlePdfPageChanged = (currentPage: number) => {
    setCurrentPdfPage(currentPage);
  };
  const handleCreatePDFError = (error: object) => {
    logThis('ERROR CREATING PDF! => ', error);
  };

  const handleCreatingPDFProgress = (percent: number) => {
    setPdfProgress(percent);
  };

  const handleRemove = () => {
    closeMoreSheet();
    setState('awaiting');
    setCurrentPdfPage(1);
    setNumberOfPdfPages(0);
    setPdfProgress(0);
    setCreatedPDF('');
    setImages([]);
  };

  const handleUploadPDF = async () => {
    setUploading(true);
    try {
      const file: File = {
        uri: createdPDFPath,
        type: 'application/pdf',
        name: `${patientCode}#${patientName.split(' ')[0]}#${
          patientName.split(' ')[1]
        }.pdf`,
      };
      const {id} = await uploadScannedDocument({
        body: {
          File: file,
          IsUpdate: false,
        },
      }).unwrap();
      showToast('INFO', {
        message: 'Document is ready to be sent to a reviewer',
        title: 'Pdf Ready!',
      });
      setUploadedPDFID(Number(id));
      setCanSendToReviewerNow(true);
    } catch (error) {
      showToast('ERROR', {
        message: 'failed to upload your documents, try again later',
        title: 'Pdf upload failed',
      });
    } finally {
      setUploading(false);
    }
  };

  const handleSendToReviewer = async () => {
    try {
      setSendingToReviewer(true);
      closeShareSheet();
      if (!selectedReviewer) {
        return;
      }
      await assignReviewer({
        body: [Number(uploadedPDFID)],
        reviewerId: Number(selectedReviewer.id),
      });
      setState('awaiting');
      showToast('SUCCESS', {
        message: `Successfully sent document to ${selectedReviewer.value}`,
        title: 'Pdf sent!',
      });
      setCanSendToReviewerNow(false);
      navigation.goBack();
    } catch (error) {
      showToast('ERROR', {
        message: 'Failed to send to reviewer',
        title: "Couldn't send to reviewer, try again!",
      });
    } finally {
      setSendingToReviewer(true);
    }
  };

  useEffect(() => {
    if (creatingPDF) {
      handleConvertToPdf();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [creatingPDF]);

  return {
    handleSnapped,
    handlePreview,
    handleShare,
    handleAwaiting,
    state,
    setState,
    closeMoreSheet,
    openMoreSheet,
    moreSheet,
    closeShareSheet,
    openShareSheet,
    shareSheet,
    handleAllPreviewer: handleAllReviewers,
    handleSuccess,
    successSheet,
    prepareConverstion,
    handleReturnToHome,
    handlePhoto,
    images,
    handleConvertToPdf,
    createdPDF,
    setCreatedPDF,
    creatingPDF,
    setCreatingPDF,
    handleCreatePDFCompleted,
    handleCreatePDFError,
    handleCreatingPDFProgress,
    pdfProgress,
    numberOfPdfPages,
    handlePdfPageChanged,
    currentPdfPage,
    setCurrentPdfPage,
    handleRemove,
    isLoadingReviewers,
    reviewers,
    isFailedToGetReviewers,
    selectedReviewer,
    setSelectedReviewer,
    setQueryForReviewer,
    handleSendToReviewer,
    queryForReviewer,
    handleUploadPDF,
    canSendToReviewerNow,
    uploading,
    sendingToReviewer,
  };
};
