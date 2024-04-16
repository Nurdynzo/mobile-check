import {showToast} from '@/components/app-toast';
import {useApiServicesAppVitalsignsRecheckpatientvitalPostMutation} from '@/state/services/vitalSignsApi';
import {VitalSignFormSchema} from '../schema';

const useRecheckVitalSign = ({
  encounterId,
  patientId,
}: {
  patientId: number;
  encounterId: number;
}) => {
  const [
    recheckVitalSignsRequest,
    {isLoading: isRecheckVitalSignLoading, isError, isSuccess},
  ] = useApiServicesAppVitalsignsRecheckpatientvitalPostMutation();

  const handleRecheck = async ({
    values,
    reset,
    deleteMostRecentRecord,
    id,
  }: {
    values: VitalSignFormSchema;
    deleteMostRecentRecord: boolean;
    id: number;
    reset: () => void;
  }) => {
    try {
      // TODO(Franklyn): i will handle this when its updated
      await recheckVitalSignsRequest({
        recheckPatientVitalDto: {
          patientId,
          // procedureId: props.procedureId,
          encounterId,
          // patientVitals: vitalsDto,
          id,
          measurementRangeId: values.measurementRange?.id as number,
          measurementSiteId: values.measurementSite?.id as number,
          position: values.position,
          vitalReading: Number(values.vitalReading),
          vitalSignId: values.vitalSignId,
          deleteMostRecentRecord,
        },
      }).unwrap();
      reset();
      showToast('SUCCESS', {
        title: 'Patient Vital signs rechecked successfully',
        message: 'Patient Vital signs have been added to our records',
      });
    } catch (error) {
      showToast('ERROR', {
        title: 'Error Encountered!',
        message: 'Patient Vital signs failed to be rechecked',
      });
    }
  };

  return {
    isRecheckVitalSignLoading,
    handleRecheck,
    isError,
    isSuccess,
  };
};

export default useRecheckVitalSign;
