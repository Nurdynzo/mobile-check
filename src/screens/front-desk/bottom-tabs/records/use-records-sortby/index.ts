import {EMPTY_STRING} from '@/utils/constants';
import {useState} from 'react';
import {RecordsSortType} from '../type';

const useRecordsSortBy = () => {
  const defaultSortSelection: RecordsSortType = {
    label: 'Sort by',
    value: EMPTY_STRING,
  };

  const [selectedSort, setSelectedSort] =
    useState<RecordsSortType>(defaultSortSelection);

  const handleSelectedSort = (item: RecordsSortType) => {
    setSelectedSort(item);
  };

  const resetSort = () => {
    setSelectedSort(defaultSortSelection);
  };

  return {
    selectedSort,
    handleSelectedSort,
    resetSort,
  };
};

export default useRecordsSortBy;
