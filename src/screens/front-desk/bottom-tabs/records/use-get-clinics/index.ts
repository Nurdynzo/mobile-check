import {useState} from 'react';
import {
  ClinicListDto,
  useApiServicesAppOrganizationunitGetclinicsGetQuery,
} from '@/state/services/organizationUnit';
import {SelectItemOptionsProp} from '@/types/selectItemsheet';
import {ALL_CLINICS, EMPTY_STRING} from '@/utils/constants';

const useGetClinics = () => {
  const [queryForClinic, setQueryForClinics] = useState(EMPTY_STRING);

  const [selectedClinic, setSelectedClinic] = useState<string>(ALL_CLINICS);

  const formatAllClinics = (data?: Array<ClinicListDto>) => {
    if (data) {
      const clinics = data?.map(({displayName, id}) => ({
        item: {
          value: displayName,
          id,
          data: displayName,
        },
      })) as SelectItemOptionsProp<string>;
      return [
        {
          item: {
            value: ALL_CLINICS,
            id: 0,
            data: ALL_CLINICS,
          },
        },
        ...clinics,
      ];
    } else {
      return [];
    }
  };

  const {isLoading: isLoadingAllClinics, currentData: allClinics} =
    useApiServicesAppOrganizationunitGetclinicsGetQuery(undefined, {
      selectFromResult: result => {
        return {
          ...result,
          currentData: formatAllClinics(result.currentData),
        };
      },
    });

  const getClinics = () => {
    return allClinics.filter(option =>
      `${option.item.value}`
        .toLowerCase()
        .includes(`${queryForClinic}`.toLowerCase()),
    );
  };

  return {
    isLoadingAllClinics,
    setQueryForClinics,
    getClinics,
    selectedClinic,
    setSelectedClinic,
  };
};

export default useGetClinics;
