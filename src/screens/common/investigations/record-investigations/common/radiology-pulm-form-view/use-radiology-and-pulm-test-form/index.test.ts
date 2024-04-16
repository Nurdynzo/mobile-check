import {renderHook} from '@testing-library/react-native';
import {act} from 'react-test-renderer';
import useRadiologyAndPulmTestForm from './index';

describe('useRadiologyAndPulmTestForm', () => {
  it('should update form state correctly when handleUpdateForm is called', () => {
    const testDate = new Date();
    const {result} = renderHook(() => useRadiologyAndPulmTestForm());
    expect(result.current.regularTestForm.images).toEqual([]);
    expect(result.current.regularTestForm.dateOfResult).toBeNull();
    expect(result.current.regularTestForm.timeOfResult).toBeNull();

    act(() => {
      result.current.handleUpdateForm('images', 'image1.jpg');
    });
    act(() => {
      result.current.handleUpdateForm('dateOfResult', testDate);
    });
    act(() => {
      result.current.handleUpdateForm('timeOfResult', '14:00');
    });
    expect(result.current.regularTestForm.images).toEqual(['image1.jpg']);
    expect(result.current.regularTestForm.dateOfResult).toEqual(testDate);
    expect(result.current.regularTestForm.timeOfResult).toEqual('14:00');
  });

  it('should reset form state to default values when resetRegularTestForm is called', () => {
    const {result} = renderHook(() => useRadiologyAndPulmTestForm());
    act(() => {
      result.current.handleUpdateForm('images', 'image1.jpg');
    });
    act(() => {
      result.current.resetRegularTestForm();
    });
    const expectedDefaultState = {
      dateOfResult: null,
      timeOfResult: null,
      conclusions: {},
      images: [],
    };
    expect(result.current.regularTestForm).toEqual(expectedDefaultState);
  });
});
