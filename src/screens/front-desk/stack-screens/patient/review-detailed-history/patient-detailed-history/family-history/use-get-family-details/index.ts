import {useApiServicesAppPatientprofileGetpatientfamilyhistoryGetQuery} from '@/state/services/patientApi';

export const useGetFamilyDetails = ({patientId}: {patientId: number}) => {
  const {currentData: familyHistoryData, isSuccess} =
    useApiServicesAppPatientprofileGetpatientfamilyhistoryGetQuery({
      patientId,
    });

  return {
    familyHistoryData,
    isSuccess,
  };
};
