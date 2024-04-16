import Tenant from '@/types/tenant';
import {localStorage} from '@/utils/localStorage';
import useSelectPreSavedUniqueBusinessCode from '.';
import {renderHookWithProviders} from 'test-utils';
import {EMPTY_STRING} from '@/utils/constants';
import {act} from '@testing-library/react-native';

const mockTenants: Tenant[] = [
  {name: 'New Hospitals', uniqueBusinessCode: 'new'},
  {name: 'St Raphael Specialist Hospital', uniqueBusinessCode: 'st.r'},
];

const localStorageMock = jest
  .spyOn(localStorage, 'get')
  .mockReturnValue(mockTenants);

describe('useSelectPreSavedUniqueBusinessCode', () => {
  beforeAll(() => {
    localStorageMock;
  });

  it('should return pre saved tenants given search term is empty', () => {
    const {result} = renderHookWithProviders(() =>
      useSelectPreSavedUniqueBusinessCode(),
    );

    act(() => {
      result.current.setSearchTerm(EMPTY_STRING);
    });

    expect(result.current.filteredTenants?.length).toBe(2);
    act(() => {
      result.current.filteredTenants?.forEach(({item: {data}}, index) => {
        expect(data?.name).toBe(mockTenants[index].name);
        expect(data?.uniqueBusinessCode).toBe(
          mockTenants[index].uniqueBusinessCode,
        );
      });
    });
  });

  it('should return tenant with name "New Hospitals" given there is a match with the searchTerm', () => {
    const {result} = renderHookWithProviders(() =>
      useSelectPreSavedUniqueBusinessCode(),
    );

    act(() => {
      result.current.setSearchTerm('new');
    });

    expect(result.current.filteredTenants?.length).toBe(1);
  });

  it('should return no tenant given searchTerm has no match with any tenant name', () => {
    const {result} = renderHookWithProviders(() =>
      useSelectPreSavedUniqueBusinessCode(),
    );

    act(() => {
      result.current.setSearchTerm('xy');
    });

    expect(result.current.filteredTenants?.length).toBe(0);
  });

  it('should not modify presaved tenants list given filtered tenants list is modified', () => {
    const {result} = renderHookWithProviders(() =>
      useSelectPreSavedUniqueBusinessCode(),
    );

    act(() => {
      result.current.setSearchTerm('xy');
    });

    expect(result.current.filteredTenants?.length).toBe(0);
    expect(result.current.preSavedTenants?.length).toBe(2);
  });
});
