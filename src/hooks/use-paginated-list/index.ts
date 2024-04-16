import {PaginationState} from '@/utils/enums';
import {useState, useEffect} from 'react';

/**
 * This hook is used to handle pagination in a list view, it is used in conjuction with
 * PaginatedListView component.
 * @returns
 */
const usePaginatedList = <T>({
  data,
  isFetching,
  isError,
  skipCount = 0,
  maxResultCount = 10,
}: {
  data: T[];
  isFetching: boolean;
  isError: boolean;
  skipCount: number;
  maxResultCount: number;
}) => {
  const [proxyData, setProxyData] = useState<Array<T>>([...data]);

  const [paginationState, setPaginationState] = useState(PaginationState.None);

  const canLoadMore =
    paginationState === PaginationState.Success &&
    proxyData.length >= maxResultCount;

  const onSetData = () => {
    if (
      data.length === 0 &&
      skipCount === 0 &&
      proxyData.length === 0 &&
      paginationState === PaginationState.FirstPageProgress
    ) {
      setPaginationState(PaginationState.NoItems);
    } else if (
      data.length === 0 &&
      proxyData.length > 0 &&
      skipCount > 0 &&
      paginationState === PaginationState.NewPageProgress
    ) {
      setPaginationState(PaginationState.NoMoreItems);
    } else if (
      skipCount === 0 &&
      proxyData.length === 0 &&
      (paginationState === PaginationState.FirstPageProgress ||
        paginationState === PaginationState.BackgroundRefresh)
    ) {
      setProxyData([...(data ?? [])]);
      setPaginationState(PaginationState.Success);
    } else if (
      paginationState === PaginationState.NewPageProgress &&
      skipCount > 0 &&
      proxyData.length >= maxResultCount
    ) {
      setProxyData(prevProxyData => {
        return [...prevProxyData, ...(data ?? [])];
      });
      setPaginationState(PaginationState.Success);
    }
  };

  useEffect(() => {
    if (!isFetching && !isError) {
      onSetData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isFetching]);

  useEffect(() => {
    if (isFetching && skipCount === 0) {
      setProxyData([]);
      setPaginationState(PaginationState.FirstPageProgress);
    } else if (
      isFetching &&
      skipCount > 0 &&
      proxyData.length === maxResultCount
    ) {
      setPaginationState(PaginationState.NewPageProgress);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching]);

  useEffect(() => {
    if (isError && skipCount === 0) {
      setProxyData([]);
      setPaginationState(PaginationState.FirstPageError);
    } else if (
      isError &&
      skipCount > 0 &&
      proxyData.length === maxResultCount
    ) {
      setPaginationState(PaginationState.NewPageError);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError]);

  return {
    paginationState,
    setPaginationState,
    proxyData,
    setProxyData,
    canLoadMore,
  };
};

export default usePaginatedList;
