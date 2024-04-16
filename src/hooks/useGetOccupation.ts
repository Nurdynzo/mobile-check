import {useApiServicesAppOccupationGetoccupationsGetQuery} from '@/state/services/occupationApi';

export const useGetOccupation = () => {
  const {data: occupations, ...otherProps} =
    useApiServicesAppOccupationGetoccupationsGetQuery();

  return {
    data: occupations,
    getOccupation: (occupationId: number | undefined) =>
      occupations?.find(el => el.id === occupationId),
    ...otherProps,
  };
};
