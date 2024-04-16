import {showToast} from '@/components/app-toast';
import {
  useApiServicesAppPatientappointmentsReassignepatientappointmentPostMutation,
  ApiServicesAppPatientappointmentsReassignepatientappointmentPostApiArg,
} from '@/state/services/patientApi';
import {useApiServicesAppStaffmembersGetstaffmembersbyroleGetQuery} from '@/state/services/staffApi';
import {SelectItem, ItemOptionProp} from '@/types/selectItemsheet';
import VoidFunction from '@/types/voidfunction';
import {EMPTY_STRING} from '@/utils/constants';
import {useState} from 'react';

const useReassignPatient = ({encounterId}: {encounterId?: number}) => {
  const [physician, setPhysician] = useState<SelectItem<number> | undefined>();
  const [searchText, setSearchText] = useState(EMPTY_STRING);

  const {
    refetch: refetchPhysicians,
    currentData: searchResults = [],
    isFetching: isFetchingPhysicians,
    isError: isErrorFetchingPhysicians,
  } = useApiServicesAppStaffmembersGetstaffmembersbyroleGetQuery(
    {roleName: 'Doctor'},
    {
      selectFromResult: result => ({
        ...result,
        currentData: result.currentData
          ?.map(item => {
            return {
              item: {
                id: item.staffMemberId,
                value: item.name,
                data: item.staffMemberId,
              },
            } as ItemOptionProp<number>;
          })
          ?.filter(({item}) =>
            item.value?.toLowerCase().includes(searchText.toLowerCase()),
          ),
      }),
    },
  );

  const [reassignPatient, {isLoading: isReassigning, isSuccess: isReassigned}] =
    useApiServicesAppPatientappointmentsReassignepatientappointmentPostMutation();

  const handleReassignment = async ({reset}: {reset: VoidFunction}) => {
    const payload: ApiServicesAppPatientappointmentsReassignepatientappointmentPostApiArg =
      {
        reassignPatientAppointmentDto: {
          encounterId,
          newAttendingPhysicianId: physician?.data,
        },
      };

    try {
      await reassignPatient(payload).unwrap();
      reset();
      resetState();
      showToast('SUCCESS', {
        title: 'Success',
        message: 'Successfully reassigned patient',
      });
    } catch (error) {
      showToast('ERROR', {
        title: 'Error Encountered!',
        message: 'Failed to reassign patient',
      });
    }
  };

  const resetState = () => {
    setSearchText(EMPTY_STRING);
    setPhysician(undefined);
  };

  return {
    handleReassignment,
    isReassigning,
    isReassigned,
    physician,
    setPhysician,
    searchResults,
    setSearchText,
    refetchPhysicians,
    isFetchingPhysicians,
    isErrorFetchingPhysicians,
  };
};

export default useReassignPatient;
