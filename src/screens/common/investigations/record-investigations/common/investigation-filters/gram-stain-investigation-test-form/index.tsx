import {AppText} from '@/components/common';
import {fs} from '@/resources/config';
import React, {useState} from 'react';
import InvestigationCellCountSelectionView from '../../form/investigation-cell-count-selection-view';
import {cellCountType} from '../../form/investigation-cell-count-selection-view/type';
import RangeInput from '../../form/range-input';
import InvestigationFormInputGroup from '../../form/form-input-group';
import {gramStainCellCountOptions} from '@/constants/recordInvestigationsTests';

const GramStainInvestigationTestForm = () => {
  const [form, setForm] = useState<{
    nugetScore: number;
    cellCount: cellCountType;
  }>({
    cellCount: 'Scanty',
    nugetScore: 0,
  });
  return (
    <>
      <RangeInput
        title="Nugent score"
        defaultValue={form.nugetScore}
        onPressAdd={() => setForm({...form, nugetScore: form.nugetScore + 1})}
        onPressMinus={() => setForm({...form, nugetScore: form.nugetScore - 1})}
      />
      <InvestigationFormInputGroup>
        <AppText
          type="title_semibold"
          style={[{fontSize: fs(12)}]}
          color="text50"
          text={'Cell count'}
        />
        <InvestigationCellCountSelectionView
          data={gramStainCellCountOptions}
          getSelectedTab={cell => setForm({...form, cellCount: cell})}
          selected={form.cellCount}
        />
      </InvestigationFormInputGroup>
    </>
  );
};

export default GramStainInvestigationTestForm;
