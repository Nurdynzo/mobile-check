import {act} from 'react-test-renderer';
import {renderHookWithProviders} from 'test-utils';
import useSaveRadiologyAndPulm from '.';
import {RawRadiologyAndPulmTestDetailsTypes} from '../type';

// TODO(Philip): Fix memory leak issue caused by this tests
// eslint-disable-next-line jest/no-disabled-tests
describe.skip('useSaveRadiologyAndPulm', () => {
  it('should save radiology and pulm investigations', async () => {
    const {result} = renderHookWithProviders(() => useSaveRadiologyAndPulm());

    await act(async () => {
      await result.current.handleRecordInvestigationForRadiologyAndPulm(
        example,
        () => null,
      );
    });
    expect(result.current.isSuccess).toBe(true);
  });
});

const example: RawRadiologyAndPulmTestDetailsTypes = {
  testRegularDetails: {
    dateOfResult: new Date(),
    timeOfResult: new Date('2024-03-10T15:29:37.000Z'),
    conclusions: {},
    images: [
      '/Users/mac/Library/Developer/CoreSimulator/Devices/6A902B5E-346F-4D14-AAF4-4F0C7EE92390/data/Containers/Data/Application/B34D0C83-48A0-47AF-8416-06D0FA445F40/tmp/react-native-image-crop-picker/B3128999-3C02-4EF4-B5C4-2E6301BE5598.jpg',
    ],
  },
  selectedTest: {
    id: '594',
    investigationId: 3858,
    name: 'X Ray',
    type: 'Radiology + Pulm',
    specimen: null,
    specificOrganism: null,
    urgent: false,
    withContrast: false,
    creationTime: '2024-03-01T17:19:26.731569',
    procedureId: null,
  },
  patientId: 2712,
  encounterId: 137,
};
