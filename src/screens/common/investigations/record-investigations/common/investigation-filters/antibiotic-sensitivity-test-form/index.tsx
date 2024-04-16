import {EMPTY_STRING} from '@/utils/constants';
import React, {useState} from 'react';
import RangeInput from '../../form/range-input';
import RecordInvestigationToggleButton from '../../form/record-investigation-toggle-button';

type ampicillinType = 'Sensitive' | 'Intermediate' | 'Resistant';
type formType = {
  Ampicillin: ampicillinType;
  'Zone diameter': number;
};
const AntibioticSensitivityTestForm = () => {
  const [form, setForm] = useState<formType>({
    Ampicillin: 'Sensitive',
    'Zone diameter': 0,
  });

  const updateForm = (field: keyof formType, value: string | number) => {
    setForm({...form, [field]: value});
  };

  return (
    <>
      <RecordInvestigationToggleButton
        title={'Ampicillin'}
        tabs={[
          {id: 1, name: 'Sensitive'},
          {id: 2, name: 'Intermediate'},
          {id: 3, name: 'Resistant'},
        ]}
        getSelectedTab={item => updateForm('Ampicillin', item)}
        defaultTab={form.Ampicillin || EMPTY_STRING}
      />
      <RangeInput
        name="mm"
        title="Zone diameter"
        defaultValue={form['Zone diameter']}
        onPressAdd={() =>
          updateForm('Zone diameter', form['Zone diameter'] + 1)
        }
        onPressMinus={() =>
          updateForm('Zone diameter', form['Zone diameter'] - 1)
        }
      />
    </>
  );
};

export default AntibioticSensitivityTestForm;
