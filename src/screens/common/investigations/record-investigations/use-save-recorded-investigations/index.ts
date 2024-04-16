import {showToast} from '@/components/app-toast';
import {
  RecordInvestigationRequest,
  useApiServicesAppInvestigationRecordinvestigationPostMutation,
} from '@/state/services/investigationApi';
import {EMPTY_STRING} from '@/utils/constants';
import {getErrorMessage} from '@/utils/helpers';
import {convertToDateOrTimeString} from '@/utils/helpers/convert-to-date-or-time-string';
import {RawTestDetailsTypes} from '../type';

const useSaveRecordedInvestigations = () => {
  const [addRecordInvestigations, {isLoading}] =
    useApiServicesAppInvestigationRecordinvestigationPostMutation();

  const handleRecordInvestigation = async (
    data: RawTestDetailsTypes,
    successCallback: () => void,
  ) => {
    const recordInvestigationRequest = prepareData(data);
    try {
      await addRecordInvestigations({
        recordInvestigationRequest,
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
    handleRecordInvestigation,
    isLoading,
  };
};

export default useSaveRecordedInvestigations;

const prepareData = (data: RawTestDetailsTypes) => {
  const recordInvestigationRequest: RecordInvestigationRequest = {
    conclusion: data?.testRegularDetails?.conclusions?.name || EMPTY_STRING,
    encounterId: data?.encounterId,
    investigationId: data?.selectedTest?.investigationId,
    investigationRequestId: Number(data?.selectedTest?.id),
    name: data?.selectedTest?.name,
    notes: EMPTY_STRING,
    patientId: data?.patientId,
    procedureId: data?.selectedTest?.procedureId,
    reference: EMPTY_STRING,
    resultDate: convertToDateOrTimeString({
      date: data?.testRegularDetails?.dateOfResult as Date,
      format: 'YYYY-MM-DD',
    }),
    sampleTime: convertToDateOrTimeString({
      date: data?.testRegularDetails?.timeOfResult as Date,
      format: 'HH:mm:ss',
    }),
    sampleCollectionDate: convertToDateOrTimeString({
      date: data?.testRegularDetails?.dateOfSampleCollection as Date,
      format: 'YYYY-MM-DD',
    }),
    resultTime: convertToDateOrTimeString({
      date: data?.testRegularDetails?.timeOfSampleCollection as Date,
      format: 'HH:mm:ss',
    }),
    ...(data.reviewerId && {reviewerId: data.reviewerId}),
    specificOrganism: data?.selectedTest?.specificOrganism,
    specimen: data?.testRegularDetails?.specimens?.name,
    view: EMPTY_STRING,
    investigationComponentResults: data?.testDynamicRangeDetails.map(item => ({
      category: item.category || EMPTY_STRING,
      name: item?.name || EMPTY_STRING,
      numericResult: item?.leadingRangeValue,
      rangeMax: item?.maxRangeValue,
      rangeMin: item?.minRangeValue,
      reference: item.reference || EMPTY_STRING,
      result: item.result || EMPTY_STRING,
      unit: item?.unit,
    })),
  };

  return recordInvestigationRequest;
};
