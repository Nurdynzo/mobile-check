import {showToast} from '@/components/app-toast';
import {
  CreatePatientVitalDto,
  useApiServicesAppVitalsignsCreatepatientvitalPostMutation,
} from '@/state/services/vitalSignsApi';
import {AllVitalSignsSchema} from '../schema';

const useCreateVitalSigns = ({
  encounterId,
  patientId,
}: {
  patientId: number;
  encounterId: number;
}) => {
  const [
    createVitalSignsRequest,
    {isLoading: isCreateVitalSignLoading, isError, isSuccess},
  ] = useApiServicesAppVitalsignsCreatepatientvitalPostMutation();

  const handleSave = async ({
    values,
    reset,
  }: {
    values: AllVitalSignsSchema;
    reset: () => void;
  }) => {
    try {
      const vitalsDto = values.vitalSigns
        .filter(el => el.vitalReading)
        .map(
          p =>
            ({
              vitalSignId: p.vitalSignId,
              ...(p.measurementSite?.id && {
                measurementSiteId: p.measurementSite?.id,
              }),
              ...(p.measurementRange?.id && {
                measurementRangeId: p.measurementRange?.id,
              }),
              ...(p.vitalReading && {vitalReading: p.vitalReading}),
              ...(p.position && {position: p.position}),
            } as CreatePatientVitalDto),
        );

      await createVitalSignsRequest({
        createMultiplePatientVitalDto: {
          patientId,
          // TODO(Franklyn): i will check out for the use
          // procedureId: props.procedureId,
          encounterId,
          patientVitals: vitalsDto,
          procedureEntryType: getValueEnt(),
        },
      }).unwrap();
      reset();
      showToast('SUCCESS', {
        title: 'Patient Vital signs saved successfully',
        message: 'Patient Vital signs have been added to our records',
      });
    } catch (error) {
      showToast('ERROR', {
        title: 'Error Encountered!',
        message: 'Patient Vital signs failed to be added to our records',
      });
    }
  };

  return {
    isCreateVitalSignLoading,
    handleSave,
    isError,
    isSuccess,
  };
};

export default useCreateVitalSigns;

const getValueEnt = () => {
  // TODO(Frankelyn) i will work on this
  // if (props.procedureId && recordProcedureState.leftSide === 'Preop') {
  //   return 0;
  // }
  // if (props.procedureId && recordProcedureState.leftSide === 'Intraop') {
  //   return 1;
  // }
  // if (props.procedureId && recordProcedureState.leftSide === 'Postop') {
  //   return 2;
  // }
  return undefined;
};
