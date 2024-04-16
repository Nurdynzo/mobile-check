import {EMPTY_STRING} from '@/utils/constants';
import {VitalSignFormSchema} from '../../schema';

const convertVitalSignsFormDataToSelectOptions = ({
  vitalSignsFormData = [],
  query = EMPTY_STRING,
}: {
  vitalSignsFormData: VitalSignFormSchema[];
  query?: string;
}) => {
  return vitalSignsFormData
    .filter(el =>
      el.vitalSignName
        ?.toLowerCase()
        .trim()
        .includes(query.toLowerCase().trim()),
    )
    .map(el => ({
      item: {
        id: el.vitalSignId as number,
        value: el.vitalSignName as string,
        data: el,
      },
    }));
};

export default convertVitalSignsFormDataToSelectOptions;
