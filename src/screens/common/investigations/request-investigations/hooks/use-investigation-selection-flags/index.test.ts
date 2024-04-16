import {
  contrastAndPlainPriorities,
  priorities,
} from '@/constants/requestInvestigations';
import {act} from '@testing-library/react-native';
import useInvestigationSelectionFlags from '.';
import {renderHookWithProviders} from 'test-utils';

describe('useInvestigationSelectionFlags', () => {
  it('should set initial state correctly', () => {
    const {result} = renderHookWithProviders(() =>
      useInvestigationSelectionFlags(),
    );

    expect(result.current.activePriority).toEqual(priorities[0]);
    expect(result.current.activeContrastAndPlainPriority).toEqual(
      contrastAndPlainPriorities[0],
    );
  });

  it('should correctly set "Urgent" priority', () => {
    const {result} = renderHookWithProviders(() =>
      useInvestigationSelectionFlags(),
    );

    act(() => {
      result.current.setActivePriority(priorities[1]);
    });
    expect(result.current.activePriority).toEqual(priorities[1]);
  });
});
