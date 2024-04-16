import {InvestigationRangeDto} from '@/state/services/investigationApi';
import {EMPTY_STRING} from '@/utils/constants';
import {useEffect, useState} from 'react';
import {RangeInputFormResponseValues} from '../../ranges-input-form/type';
import {UnitChangeType} from '../type';

const useMultipleRangeUnitSelector = ({
  ranges = [],
  getData = data => data,
}: {
  ranges: InvestigationRangeDto[];
  getData: (data: RangeInputFormResponseValues) => void;
}) => {
  const [selectedUnit, setSelectedUnit] = useState<string>(
    ranges[0]?.unit || EMPTY_STRING,
  );
  const [currentRange, setCurrentRange] = useState<InvestigationRangeDto>(
    ranges[0],
  );
  const [values, setValues] = useState<RangeInputFormResponseValues>({
    maxRangeValue: 0,
    minRangeValue: 0,
  });

  const handleUnitChange = (selectedItem: UnitChangeType) => {
    if (selectedItem?.value !== selectedUnit) {
      setSelectedUnit(selectedItem?.value);
      const range = ranges.find(range => range.unit === selectedItem?.value);
      setCurrentRange(range as InvestigationRangeDto);
    }
  };

  const handleGetValues = (values: RangeInputFormResponseValues) => {
    setValues(values);
  };

  useEffect(() => {
    if (values.leadingRangeValue) {
      getData({...values, unit: selectedUnit});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  return {
    selectedUnit,
    setSelectedUnit,
    currentRange,
    setCurrentRange,
    values,
    setValues,
    handleUnitChange,
    handleGetValues,
  };
};

export default useMultipleRangeUnitSelector;
