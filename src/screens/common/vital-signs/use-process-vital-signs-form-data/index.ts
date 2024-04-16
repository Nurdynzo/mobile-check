import {
  GetAllVitalSignsResponse,
  useApiServicesAppVitalsignsGetallGetQuery,
} from '@/state/services/vitalSignsApi';
import convertVitalSignsArrayToObject from '../common/convertVitalSignsArrayToObject';
import processVitalSignsData from '../common/processVitalSignsData';

// Test not needed
const useProcessVitalSignsFormData = ({
  filter,
}: {
  filter?: (
    value: GetAllVitalSignsResponse,
    index: number,
    array: GetAllVitalSignsResponse[],
  ) => boolean | undefined;
}) => {
  const {currentData: vitalSignsData} =
    useApiServicesAppVitalsignsGetallGetQuery();

  const vitalSignsRangesSites = convertVitalSignsArrayToObject(
    vitalSignsData ?? [],
  );

  const vitalSignsFormData = processVitalSignsData({
    vitalSignsData,
    filter,
  });

  return {vitalSignsRangesSites, vitalSignsFormData};
};

export default useProcessVitalSignsFormData;
