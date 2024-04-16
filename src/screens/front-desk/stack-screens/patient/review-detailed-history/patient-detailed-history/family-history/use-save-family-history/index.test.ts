import {act} from 'react-test-renderer';
import {renderHookWithProviders} from 'test-utils';
import {useSaveFamilyHistory} from '.';

describe('useSaveFamilyHistory', () => {
  it('should save patient family history', async () => {
    const {result} = renderHookWithProviders(() =>
      useSaveFamilyHistory({patientId: 1, historyId: 12}),
    );

    await act(async () => {
      await result.current.handleCreateorEditHistory({
        values: {
          isFamilyHistoryNotKnown: false,
          noOfFemaleChildren: '2',
          noOfFemaleSiblings: '23',
          noOfMaleChildren: '39',
          noOfMaleSiblings: '56',
          members: [
            {
              relationship: 'Father',
              isAlive: false,
              ageOfDeath: '75',
              causeOfDeath: [{id: '3', name: 'Heart Attack'}],
              seriousIllnesses: [{id: '3', name: 'Hypertension'}],
              ageAtDiagnosis: '50',
              memberId: 1,
            },
            {
              relationship: 'Mother',
              isAlive: true,
              ageOfDeath: '60',
              causeOfDeath: [{id: '3', name: 'Heart Attack'}],
              seriousIllnesses: [{id: '3', name: 'Diabetes'}],
              ageAtDiagnosis: '50',
              memberId: 2,
            },
          ],
        },
        reset: () => null,
      });
    });

    expect(result.current.isSuccess).toBe(true);
  });
  it('should save patient family member', async () => {
    const {result} = renderHookWithProviders(() =>
      useSaveFamilyHistory({patientId: 123, historyId: 12}),
    );

    await act(async () => {
      await result.current.handleCreateOrEditFamilyMember({
        values: {
          relationship: 'Father',
          isAlive: false,
          ageOfDeath: '75',
          causeOfDeath: [{id: '3', name: 'Heart Attack'}],
          seriousIllnesses: [{id: '3', name: 'Hypertension'}],
          ageAtDiagnosis: '50',
          memberId: 1,
        },
        reset: () => null,
      });
    });

    expect(result.current.isSuccess).toBe(true);
  });
});
