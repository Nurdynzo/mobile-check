import {InvestigationRangeDto} from '@/state/services/investigationApi';

function uniqueRanges(
  ranges: InvestigationRangeDto[],
): InvestigationRangeDto[] {
  const uniqueInvestigations = ranges?.filter(
    (investigation, index, self) =>
      index === self?.findIndex(range => range.unit === investigation.unit),
  );
  return uniqueInvestigations;
}

export default uniqueRanges;
