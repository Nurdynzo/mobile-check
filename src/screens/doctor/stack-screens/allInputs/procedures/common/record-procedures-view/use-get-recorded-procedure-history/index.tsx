import {
  PatientProcedureResponseDto,
  useApiServicesAppProcedureGetpatientproceduresGetQuery,
} from '@/state/services/procedureApi';

/// Cannot mock test because API takes in query params
const useGetRecordedProcedureHistory = ({
  patientId,
}: {
  patientId: number | undefined;
}): {
  history: PatientProcedureResponseDto[] | undefined;
  isSuccess: boolean | false;
} => {
  const procedureType = 'RecordProcedure';
  const {data: history, isSuccess} =
    useApiServicesAppProcedureGetpatientproceduresGetQuery({
      patientId,
      procedureType,
    });

  return {
    history,
    isSuccess,
  };
};

export default useGetRecordedProcedureHistory;
