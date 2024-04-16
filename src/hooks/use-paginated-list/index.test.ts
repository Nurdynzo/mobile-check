import {act} from '@testing-library/react-native';
import {renderHookWithProviders} from 'test-utils';
import usePaginatedList from '.';
import {PaginationState} from '@/utils/enums';

describe('usePaginatedList', () => {
  it('given no state change paginationState should be None', async () => {
    const {result} = renderHookWithProviders(() =>
      usePaginatedList({
        data: [] as string[],
        isFetching: false,
        isError: false,
        skipCount: 0,
        maxResultCount: 10,
      }),
    );

    expect(result.current.paginationState).toBe(PaginationState.None);
  });

  it('given no state change canLoadMore should be false', async () => {
    const {result} = renderHookWithProviders(() =>
      usePaginatedList({
        data: [] as string[],
        isFetching: false,
        isError: false,
        skipCount: 0,
        maxResultCount: 10,
      }),
    );

    expect(result.current.canLoadMore).toBe(false);
  });

  it('given no state change and data is empty, proxyData should be empty', async () => {
    const {result} = renderHookWithProviders(() =>
      usePaginatedList({
        data: [] as string[],
        isFetching: false,
        isError: false,
        skipCount: 0,
        maxResultCount: 10,
      }),
    );

    expect(result.current.proxyData.length).toBe(0);
  });

  it('should update proxyData state correctly', async () => {
    const {result} = renderHookWithProviders(() =>
      usePaginatedList({
        data: ['1', '2'],
        isFetching: false,
        isError: false,
        skipCount: 0,
        maxResultCount: 10,
      }),
    );

    await act(() => {
      result.current.setProxyData([]);
    });

    expect(result.current.proxyData.length).toBe(0);
  });

  it('given skipCount is 0 and api is fetching, pagaintion state should be FirstPageProgress', async () => {
    const {result} = renderHookWithProviders(() =>
      usePaginatedList({
        data: [],
        isFetching: true,
        isError: false,
        skipCount: 0,
        maxResultCount: 10,
      }),
    );

    expect(result.current.paginationState).toBe(
      PaginationState.FirstPageProgress,
    );
  });

  it('given skipCount is 0 and api is fetching, proxyData should be empty', async () => {
    const {result} = renderHookWithProviders(() =>
      usePaginatedList({
        data: [],
        isFetching: true,
        isError: false,
        skipCount: 0,
        maxResultCount: 10,
      }),
    );

    expect(result.current.proxyData.length).toBe(0);
  });

  it('given skipCount is 0 and api is fetching, canLoadMore should be false', async () => {
    const {result} = renderHookWithProviders(() =>
      usePaginatedList({
        data: [],
        isFetching: true,
        isError: false,
        skipCount: 0,
        maxResultCount: 10,
      }),
    );

    expect(result.current.canLoadMore).toBe(false);
  });

  it('given skipCount is greater than 0 and api is fetching, pagaintion state should be NewPageProgress', async () => {
    const {result} = renderHookWithProviders(() =>
      usePaginatedList({
        data: ['1', '2'],
        isFetching: true,
        isError: false,
        skipCount: 2,
        maxResultCount: 2,
      }),
    );

    expect(result.current.paginationState).toBe(
      PaginationState.NewPageProgress,
    );
  });

  it('given skipCount is greater than 0 and api is fetching, proxyData should not be empty', async () => {
    const {result} = renderHookWithProviders(() =>
      usePaginatedList({
        data: ['1', '2'],
        isFetching: true,
        isError: false,
        skipCount: 2,
        maxResultCount: 2,
      }),
    );

    expect(result.current.proxyData.length).toBe(2);
  });

  it('given skipCount greater than 0 and api is fetching, canLoadMore should be false', async () => {
    const {result} = renderHookWithProviders(() =>
      usePaginatedList({
        data: [],
        isFetching: true,
        isError: false,
        skipCount: 2,
        maxResultCount: 2,
      }),
    );

    expect(result.current.canLoadMore).toBe(false);
  });

  it('given proxyData is greater or equal to maxResultCount and pagination state is success, canLoadMore should be true', async () => {
    const {result} = renderHookWithProviders(() =>
      usePaginatedList({
        data: ['1', '2'],
        isFetching: false,
        isError: false,
        skipCount: 2,
        maxResultCount: 2,
      }),
    );

    await act(() => {
      result.current.setPaginationState(PaginationState.Success);
    });

    expect(result.current.canLoadMore).toBe(true);
  });

  it('given api data is empty, proxyData is empty, skip count equals 0 and FirstPageProgress, pagination state should be NoItems', async () => {
    const {result} = renderHookWithProviders(() =>
      usePaginatedList({
        data: [] as string[],
        isFetching: false,
        isError: false,
        skipCount: 0,
        maxResultCount: 2,
      }),
    );

    await act(() => {
      result.current.setPaginationState(PaginationState.FirstPageProgress);
    });

    expect(result.current.paginationState).toBe(PaginationState.NoItems);
  });

  it('given api data is empty, proxyData is not empty, skip count is greater than 0 and NewPageProgress, pagination state should be NoMoreItems', async () => {
    const {result} = renderHookWithProviders(() =>
      usePaginatedList({
        data: [] as string[],
        isFetching: false,
        isError: false,
        skipCount: 2,
        maxResultCount: 2,
      }),
    );

    await act(() => {
      result.current.setProxyData(['1', '2']);
      result.current.setPaginationState(PaginationState.NewPageProgress);
    });

    expect(result.current.paginationState).toBe(PaginationState.NoMoreItems);
  });

  it('given api data is not empty, proxyData is empty, skip count equals 0 and FirstPageProgress, pagination state should be Success', async () => {
    const {result} = renderHookWithProviders(() =>
      usePaginatedList({
        data: ['1', '2'],
        isFetching: false,
        isError: false,
        skipCount: 0,
        maxResultCount: 2,
      }),
    );

    await act(() => {
      result.current.setProxyData([]);
      result.current.setPaginationState(PaginationState.FirstPageProgress);
    });

    expect(result.current.paginationState).toBe(PaginationState.Success);
  });

  it('given api data is not empty, proxyData is empty, skip count equals 0 and Refresh, pagination state should be Success', async () => {
    const {result} = renderHookWithProviders(() =>
      usePaginatedList({
        data: ['1', '2'],
        isFetching: false,
        isError: false,
        skipCount: 0,
        maxResultCount: 2,
      }),
    );

    await act(() => {
      result.current.setProxyData([]);
      result.current.setPaginationState(PaginationState.BackgroundRefresh);
    });

    expect(result.current.paginationState).toBe(PaginationState.Success);
  });

  it('given skipCount is greater than 0, proxyData is not Empty and NewPageProgress, pagination state should equal success', async () => {
    const {result} = renderHookWithProviders(() =>
      usePaginatedList({
        data: ['1', '2'],
        isFetching: false,
        isError: false,
        skipCount: 2,
        maxResultCount: 2,
      }),
    );

    await act(() => {
      result.current.setPaginationState(PaginationState.NewPageProgress);
    });

    expect(result.current.paginationState).toBe(PaginationState.Success);
  });
});
