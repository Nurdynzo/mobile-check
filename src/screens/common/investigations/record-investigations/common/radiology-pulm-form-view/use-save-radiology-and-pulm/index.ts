import {showToast} from '@/components/app-toast';
import {
  ApiServicesRecordinvestigationresultforelectroradandpulmPostApiArg,
  useApiServicesAppRecordinvestigationresultforelectroradandpulmPostMutation,
} from '@/state/services/customApi';
import File from '@/types/file';
import {EMPTY_STRING} from '@/utils/constants';
import {generateRandomText, getErrorMessage} from '@/utils/helpers';
import {convertToDateOrTimeString} from '@/utils/helpers/convert-to-date-or-time-string';
import {RawRadiologyAndPulmTestDetailsTypes} from '../type';

const useSaveRadiologyAndPulm = () => {
  const [
    handleRecordInvestigationsForRadiologyAndPulm,
    {isLoading, isSuccess},
  ] =
    useApiServicesAppRecordinvestigationresultforelectroradandpulmPostMutation();

  const handleRecordInvestigationForRadiologyAndPulm = async (
    data: RawRadiologyAndPulmTestDetailsTypes,
    successCallback: () => void,
  ) => {
    try {
      const radiologyAndPulmRequest = prepareData(data);
      await handleRecordInvestigationsForRadiologyAndPulm({
        body: radiologyAndPulmRequest.body,
      }).unwrap();

      showToast('SUCCESS', {
        message: 'Investigation recorded',
        title: 'Success!',
      });
      successCallback();
    } catch (error) {
      showToast('ERROR', {
        message: getErrorMessage(error),
        title: 'Failed!',
      });
    }
  };

  return {
    handleRecordInvestigationForRadiologyAndPulm,
    isLoading,
    isSuccess,
  };
};

export default useSaveRadiologyAndPulm;

const prepareData = (data: RawRadiologyAndPulmTestDetailsTypes) => {
  const body = {
    Conclusion: data?.testRegularDetails?.conclusions?.name || EMPTY_STRING,
    EncounterId: data?.encounterId,
    InvestigationId: data?.selectedTest?.investigationId,
    InvestigationRequestId: Number(data?.selectedTest?.id),
    PatientId: data?.patientId,
    ResultDate: convertToDateOrTimeString({
      date: data?.testRegularDetails?.dateOfResult as Date,
      format: 'YYYY-MM-DD',
    }),
    ResultTime: convertToDateOrTimeString({
      date: data?.testRegularDetails?.timeOfResult as Date,
      format: 'HH:mm:ss',
    }),
    ImageFiles: data.testRegularDetails.images.map(
      item =>
        ({
          uri: item,
          type: 'image/png',
          name: generateRandomText(10),
        } as File),
    ),
  };

  const recordInvestigationRequest: ApiServicesRecordinvestigationresultforelectroradandpulmPostApiArg =
    {body};

  return recordInvestigationRequest;
};
