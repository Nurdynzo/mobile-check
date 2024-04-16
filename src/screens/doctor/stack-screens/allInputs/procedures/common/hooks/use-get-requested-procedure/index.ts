import {
  PatientProcedureResponseDto,
  useApiServicesAppProcedureGetpatientproceduresGetQuery,
} from '@/state/services/procedureApi';

const useGetRequestedProcedureHistory = ({
  patientId,
}: {
  patientId: number;
}): {
  apiRequestedProcedureHistory: PatientProcedureResponseDto[] | undefined;
  isSuccess: boolean | false;
} => {
  const {data: apiRequestedProcedureHistory, isSuccess} =
    useApiServicesAppProcedureGetpatientproceduresGetQuery({
      patientId: patientId,
      procedureType: 'RequestProcedure',
    });

  return {
    apiRequestedProcedureHistory,
    isSuccess,
  };
};

export default useGetRequestedProcedureHistory;
