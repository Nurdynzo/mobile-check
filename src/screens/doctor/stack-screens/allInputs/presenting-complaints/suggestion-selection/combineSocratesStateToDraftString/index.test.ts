import {SocratesState} from '@/state/slices/all-inputs/presenting-complaints/presentingComplaints';
import {combineSocratesStateToDraftString} from '.';

describe('combineSocratesStateToDraftString', () => {
  it('should handle a SocratesState with all fields populated', () => {
    const socratesState: SocratesState = {
      associations: {activePills: [{value: 'nausea'}], bodyPartSearch: ''},
      character: {activePills: [{value: 'sharp'}], characteristicSearch: ''},
      exacerbating: {activePills: [{value: 'movement'}], symptomSearch: ''},
      note: 'Patient feels unwell',
      onSet: {interval: 2, intervalUnit: 'days', cyclicality: 'intermittent'},
      radiation: {activePills: [{value: 'back'}], bodyPartSearch: ''},
      severity: 7,
      site: {activePills: [{value: 'abdomen'}], bodyPartSearch: ''},
      timeCourse: {
        interval: 30,
        intervalUnit: 'minutes',
        symptomsFelt: 'after eating',
      },
      mainSearchResult: {id: '123', name: 'Headache'},
    };

    const result = combineSocratesStateToDraftString({socrates: socratesState});
    expect(result).toBe(
      'abdomen; began 2 days ago, intermittent; lasts for 30 minutes after eating; described as 7 on a 0 - 10 scale; Patient feels unwell',
    );
  });
  it('should correctly combine a basic SocratesState into a draft string', () => {
    const socratesState: SocratesState = {
      associations: {activePills: [], bodyPartSearch: ''},
      character: {activePills: [], characteristicSearch: ''},
      exacerbating: {activePills: [], symptomSearch: ''},
      note: '',
      onSet: {interval: 2, intervalUnit: 'hours', cyclicality: ''},
      radiation: {activePills: [], bodyPartSearch: ''},
      severity: 5,
      site: {activePills: [{value: 'Headache'}], bodyPartSearch: ''},
      timeCourse: {interval: 0, intervalUnit: '', symptomsFelt: ''},
      mainSearchResult: {id: '123', name: 'Headache'},
    };
    const expected =
      'Headache; began 2 hours ago; described as 5 on a 0 - 10 scale';
    expect(
      combineSocratesStateToDraftString({socrates: socratesState}),
    ).toEqual(expected);
  });
});
