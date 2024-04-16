import {GetAllVitalSignsResponse} from '@/state/services/vitalSignsApi';
import {EMPTY_STRING} from '@/utils/constants';

const processVitalSignsData = ({
  vitalSignsData,
  filter,
}: {
  vitalSignsData: GetAllVitalSignsResponse[] | undefined;
  filter?: (
    value: GetAllVitalSignsResponse,
    index: number,
    array: GetAllVitalSignsResponse[],
  ) => boolean | undefined;
}) => {
  let processedData = vitalSignsData;

  if (filter) {
    processedData = (processedData ?? []).filter(filter);
  }

  return (processedData ?? [])?.map(signItem => {
    const defaultSite = signItem.sites?.find(siteItem => siteItem.default);
    const defaultRange = signItem.ranges?.[0];

    return {
      vitalSignName: signItem?.sign ?? undefined,
      vitalSignId: signItem.id,
      ...(defaultRange?.unit && {
        measurementRange: {
          id: defaultRange?.id ?? 0,
          value: defaultRange?.unit ?? EMPTY_STRING,
          data: defaultRange,
        },
      }),
      ...(defaultSite?.site && {
        measurementSite: {
          id: defaultSite?.id ?? 0,
          value: defaultSite?.site ?? EMPTY_STRING,
          data: defaultSite?.default,
        },
      }),
      ...(signItem.leftRight && {position: 'LEFT'}),
      vitalReading: undefined,
      maxLength: signItem?.maxLength,
      decimalPlaces: signItem?.decimalPlaces,
    };
  });
};

export default processVitalSignsData;
