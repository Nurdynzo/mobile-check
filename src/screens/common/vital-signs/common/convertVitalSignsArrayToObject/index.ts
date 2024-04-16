import {GetAllVitalSignsResponse} from '@/state/services/vitalSignsApi';

const convertVitalSignsArrayToObject = (
  array: GetAllVitalSignsResponse[],
): {[key: number]: Pick<GetAllVitalSignsResponse, 'ranges' | 'sites'>} => {
  return array.reduce((obj, item) => {
    if (item.id !== undefined) {
      const {ranges, sites} = item;
      // Ensure the item has an id
      obj[item.id] = {ranges, sites};
    }
    return obj;
  }, {} as {[key: number]: Pick<GetAllVitalSignsResponse, 'ranges' | 'sites'>});
};

export default convertVitalSignsArrayToObject;
