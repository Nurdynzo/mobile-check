import processVitalSignsData from './index';

describe('processVitalSignsData', () => {
  it('should filter out non-preset vital signs when filterBy is preset', () => {
    const vitalSignsData = [
      {id: 1, isPreset: true, sign: 'Temperature', sites: [], ranges: []},
      {id: 2, isPreset: false, sign: 'Blood Pressure', sites: [], ranges: []},
    ];

    const processedData = processVitalSignsData({
      vitalSignsData,
      filter: el => el.isPreset,
    });
    expect(processedData.length).toBe(1);
    expect(processedData[0].vitalSignId).toBe(1);
  });
  it('should filter out preset vital signs when filterBy is non-preset', () => {
    const vitalSignsData = [
      {id: 1, isPreset: true, sign: 'Temperature', sites: [], ranges: []},
      {id: 2, isPreset: false, sign: 'Blood Pressure', sites: [], ranges: []},
    ];

    const processedData = processVitalSignsData({
      vitalSignsData,
      filter: el => !el.isPreset,
    });
    expect(processedData.length).toBe(1);
    expect(processedData[0].vitalSignId).toBe(2);
  });

  it('should include all vital signs when filterBy is none', () => {
    const vitalSignsData = [
      {id: 1, isPreset: true, sign: 'Temperature', sites: [], ranges: []},
      {id: 2, isPreset: false, sign: 'Blood Pressure', sites: [], ranges: []},
    ];

    const processedData = processVitalSignsData({
      vitalSignsData,
    });
    expect(processedData.length).toBe(2);
  });

  it('should handle undefined vitalSignsData', () => {
    const processedData = processVitalSignsData({
      vitalSignsData: undefined,
    });
    expect(processedData).toEqual([]);
  });

  it('should correctly process default site and range', () => {
    const vitalSignsData = [
      {
        id: 3,
        sign: 'Heart Rate',
        sites: [{id: 1, site: 'Wrist', default: true}],
        ranges: [{id: 1, unit: 'bpm'}],
        leftRight: true,
        maxLength: 3,
        decimalPlaces: 2,
      },
    ];

    const processedData = processVitalSignsData({
      vitalSignsData,
    });
    const expected = [
      {
        vitalSignName: 'Heart Rate',
        vitalSignId: 3,
        measurementRange: {
          id: 1,
          value: 'bpm',
          data: {id: 1, unit: 'bpm'},
        },
        measurementSite: {
          id: 1,
          value: 'Wrist',
          data: true,
        },
        position: 'LEFT',
        vitalReading: undefined,
        maxLength: 3,
        decimalPlaces: 2,
      },
    ];

    expect(processedData).toEqual(expected);
  });
});
