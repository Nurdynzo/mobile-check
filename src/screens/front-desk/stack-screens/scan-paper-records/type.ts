import {ColorDefinitions} from '@/resources/colors';
import {GenderType} from '@/state/services/patientApi';
import {NOT_AVAILABLE} from '@/utils/constants';
import {mediaType} from '@/utils/helpers/camera';
import {TextStyle, ViewStyle} from 'react-native';

export type contentTypes = {
  styles: ScanPaperRecordsStyles;
  patientName?: string;
  patientCode?: string;
  patientPic?: string;
  age?: string;
  gender?: GenderType | typeof NOT_AVAILABLE;
  colors: ColorDefinitions;
  handlePhoto?: () => void;
  handleAwaiting?: () => void;
  creatingPDF?: boolean;
  images?: Array<mediaType>;
  prepareConverstion?: () => void;
  handleSnapped?: () => void;
  currentPdfPage?: number;
  numberOfPdfPages?: number;
  openMoreSheet?: () => void;
  createdPDF?: string;
  handleCreatePDFCompleted?: (number: number) => void;
  handleCreatePDFError?: (error: object) => void;
  handlePdfPageChanged?: (number: number) => void;
  handleCreatingPDFProgress?: (progress: number) => void;
  canSendToReviewerNow?: boolean;
  handleShare?: () => void;
  handleUploadPDF?: () => void;
};

export type ScanPaperRecordsStyles = {
  container: ViewStyle;
  loading: ViewStyle;
  image: ViewStyle;
  content: ViewStyle;
  cameraWrapper: ViewStyle;
  header: ViewStyle;
  headerRightContent: ViewStyle;
  headerLeftContent: ViewStyle;
  cameraContainer: ViewStyle;
  imageWrapper: ViewStyle;
  badge: TextStyle;
  undo: ViewStyle;
  sendToReviewerBtn: ViewStyle;
};
