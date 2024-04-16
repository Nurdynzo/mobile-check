import {showToast} from '@/components/app-toast';
import {InvestigationCategoriesKey} from '@/constants/requestInvestigations';
import {
  RequestInvestigationRequest,
  useApiServicesAppInvestigationGetallGetQuery,
  useApiServicesAppInvestigationRequestinvestigationPostMutation,
} from '@/state/services/investigationApi';
import {RootState} from '@/state/store';
import VoidFunction from '@/types/voidfunction';
import {useSelector} from 'react-redux';
import {InvestigationType} from '../../type';

const useRequestInvestigations = ({
  activeCategory,
  searchText,
}: {
  searchText: string;
  activeCategory: InvestigationCategoriesKey;
}) => {
  const {id: patientId} = useSelector(
    (state: RootState) => state.selectedPatient,
  );
  const [addRequestInvestigations, {isLoading, isSuccess}] =
    useApiServicesAppInvestigationRequestinvestigationPostMutation();

  const {currentData: investigationSuggestions} =
    useApiServicesAppInvestigationGetallGetQuery({
      type: activeCategory,
      filter: searchText,
    });

  const handleRequestInvestigation = async ({
    investigationNotes,
    localSelectedInvestigations,
    encounterId,
    successCallback,
  }: {
    localSelectedInvestigations: InvestigationType[];
    investigationNotes: string;
    encounterId?: number;
    successCallback?: VoidFunction;
  }) => {
    try {
      const requestedInvestigations: RequestInvestigationRequest[] =
        localSelectedInvestigations.map(item => ({
          patientId,
          investigationId: Number(item.id),
          notes: investigationNotes,
          urgent: item.urgent || false,
          withContrast: item.withContrast || false,
          encounterId,
        }));

      await addRequestInvestigations({
        body: requestedInvestigations,
      }).unwrap();

      showToast('SUCCESS', {
        title: 'Success!',
        message: 'Investigations has been requested',
      });

      successCallback && successCallback();
    } catch (error) {
      showToast('ERROR', {
        title: 'Request Failed!',
        message: 'Investigation Request Failed',
      });
    }
  };

  return {
    addRequestInvestigations,
    isLoading,
    investigationSuggestions,
    handleRequestInvestigation,
    isSuccess,
  };
};

export default useRequestInvestigations;
