import {renderHook} from '@testing-library/react-native';
import useInvestigationUniqueFormState from './index';
import {act} from 'react-test-renderer';
import {EMPTY_STRING} from '@/utils/constants';

describe('useInvestigationUniqueFormState', () => {
  it('should correctly update form state when updateForm is called', () => {
    const initialFormState = {name: EMPTY_STRING, age: EMPTY_STRING};
    const onSubmitMock = jest.fn();

    const {result} = renderHook(() =>
      useInvestigationUniqueFormState(initialFormState, onSubmitMock),
    );

    expect(result.current.form).toEqual({
      name: EMPTY_STRING,
      age: EMPTY_STRING,
    });

    act(() => {
      result.current.updateForm('name', 'Sickling Test');
    });

    act(() => {
      result.current.updateForm('age', '30');
    });

    expect(result.current.form).toEqual({name: 'Sickling Test', age: '30'});
  });

  it('should call onSubmit with the correct form state when submitForm is called', () => {
    const initialFormState = {name: EMPTY_STRING, age: EMPTY_STRING};
    const onSubmitMock = jest.fn();

    const {result} = renderHook(() =>
      useInvestigationUniqueFormState(initialFormState, onSubmitMock),
    );

    act(() => {
      result.current.updateForm('name', 'Blood film');
      result.current.updateForm('age', '28');
    });

    act(() => {
      result.current.submitForm();
    });

    expect(onSubmitMock).toHaveBeenCalledWith({name: 'Blood film', age: '28'});
  });
});
