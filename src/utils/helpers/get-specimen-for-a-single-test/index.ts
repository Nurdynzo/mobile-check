import {GetInvestigationResponse} from '@/state/services/investigationApi';
import lodash from 'lodash';

const getSpecimenForASingleTest = ({
  testDetails,
}: {
  testDetails: GetInvestigationResponse | undefined;
}) => {
  const {
    specimen: value,
    suggestions,
    components,
    snomedId,
  } = testDetails || {};

  let specimens = [];

  if (value && snomedId) {
    specimens.push({snomedId, result: value, normal: false, category: null});
  }

  if (suggestions?.length) {
    specimens = [...specimens, ...suggestions];
  }

  if (components?.length) {
    const componentSpecimens = components
      .map(item => ({
        snomedId: item.snomedId || snomedId,
        result: item.specimen,
        normal: false,
        category: null,
      }))
      .filter(item => item.result);

    specimens = [...specimens, ...componentSpecimens];
  }

  return lodash
    .uniqBy(specimens, 'result')
    .filter(item => item.result && item.snomedId);
};

export default getSpecimenForASingleTest;
