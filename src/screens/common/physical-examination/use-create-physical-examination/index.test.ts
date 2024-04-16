import {act} from 'react-test-renderer';
import {renderHookWithProviders} from 'test-utils';
import useCreatePhysicalExamination from '.';

describe('useCreatePhysicalExamination', () => {
  it('should create patient physical examination suggestion', async () => {
    const {result} = renderHookWithProviders(() =>
      useCreatePhysicalExamination({encounterId: 12, patientId: 123}),
    );

    await act(async () => {
      await result.current.handleSaveSuggestions({
        allTabSelectedItems: {
          Mouth: [
            {
              id: '41102',
              name: 'Cleft lip: Lower lip, Left, Right',
              isInActive: false,
              data: {
                id: 41102,
                type: 'General',
                header: 'Mouth',
                presentTerms: 'Cleft lip',
                snomedId: '80281008',
                absentTerms: 'Cleft lip absent',
                absentTermsSnomedId: '80281008:272519000=2667000',
                hasQualifiers: true,
              },
              site: [{id: '245777007', name: 'Lower lip'}],
              plane: [
                {id: null, name: 'Left'},
                {id: null, name: 'Right'},
              ],
            },
          ],
        },
        otherNote: 'badooo',
        physicalExaminationTypeId: 2,
        images: [],
        reset: () => null,
      });
    });

    expect(result.current.isSuccess).toBe(true);
  });
});
