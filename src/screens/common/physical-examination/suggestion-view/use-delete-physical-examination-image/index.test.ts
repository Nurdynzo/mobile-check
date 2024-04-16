import {act} from '@testing-library/react-native';
import {renderHookWithProviders} from 'test-utils';
import useDeletePhysicalExaminationImage from '.';

describe('useDeletePhysicalExaminationImage', () => {
  it('should delete selected patient physical examination', async () => {
    const {result} = renderHookWithProviders(() =>
      useDeletePhysicalExaminationImage(),
    );

    await act(async () => {
      await result.current.handleDeleteImage(1, () => null);
    });

    expect(result.current.isSuccess).toBe(true);
  });
});
