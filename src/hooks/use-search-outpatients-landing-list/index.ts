import {useApiServicesAppPatientsGetoutpatientlandinglistGetQuery} from '@/state/services/patientApi';

const useSearchOutpatientsLandingList = ({
  searchText,
}: {
  searchText?: string;
}) => {
  const {
    isError,
    isFetching: searchingForPatient,
    isSuccess,
    currentData: searchResult,
    refetch: searchForPatient,
  } = useApiServicesAppPatientsGetoutpatientlandinglistGetQuery(
    {
      filter: searchText,
    },
    {
      skip: searchText === '' || (searchText?.length ?? 0) <= 1,
    },
  );

  return {
    searchResult,
    isError,
    searchingForPatient,
    isSuccess,
    searchForPatient,
  };
};

export default useSearchOutpatientsLandingList;
