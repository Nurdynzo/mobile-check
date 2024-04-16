import {
  GetInvestigationResponse,
  InvestigationRangeDto,
} from '@/state/services/investigationApi';
import {AnalysisResponse, UnitRange} from './type';

const analyzeInvestigationTestDetails = (details: GetInvestigationResponse) => {
  const response: AnalysisResponse = {
    typeOfDetail: 'this has a unique extra form',
    specimen: details?.components?.[0]?.components?.[0]?.specimen ?? null,
    unitRanges: [],
    components: [],
    suggestions: [],
    ranges: [],
    dipstick: [],
    results: [],
  };

  if (details?.components && details.components.length > 0) {
    let anyComponentHasRanges = false;

    for (const component of details.components) {
      if (component.ranges && component.ranges.length > 0) {
        anyComponentHasRanges = true;
        break;
      }
    }

    if (anyComponentHasRanges) {
      response.typeOfDetail = 'details has components that has ranges too';
    } else {
      response.typeOfDetail = 'details has components';
    }
    response.components = details.components;
  } else if (details?.ranges && details.ranges.length > 0) {
    response.typeOfDetail = 'details has ranges';
    response.ranges = details.ranges;
    response.unitRanges = groupRangesByUnit(details.ranges);
  }

  if (details?.suggestions && details.suggestions.length > 0) {
    response.typeOfDetail += response.typeOfDetail
      ? ', and has suggestions'
      : 'details has suggestions';
    response.suggestions = details.suggestions;
  }
  if (details?.dipstick && details.dipstick.length > 0) {
    response.typeOfDetail += response.typeOfDetail
      ? ', and has dipstick'
      : 'details has dipstick';
    response.dipstick = details.dipstick;
  }
  if (details?.results && details.results.length > 0) {
    response.typeOfDetail += response.typeOfDetail
      ? ', and has results'
      : 'details has results';
    response.results = details.results;
  }

  return response;
};

export default analyzeInvestigationTestDetails;

function groupRangesByUnit(ranges: InvestigationRangeDto[]): UnitRange[] {
  const unitMap = new Map<string, InvestigationRangeDto>();
  ranges.forEach(range => {
    if (
      range.unit &&
      (!unitMap.has(range.unit) ||
        (unitMap.get(range.unit)?.minRange ?? Infinity) >
          (range.minRange ?? Infinity))
    ) {
      unitMap.set(range.unit, range);
    }
  });
  return Array.from(unitMap, ([unit, range]) => ({
    unit,
    ranges: [range],
  }));
}
