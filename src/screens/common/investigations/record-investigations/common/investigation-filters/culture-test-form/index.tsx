import {AppRow, AppText} from '@/components/common';
import {
  AllInputsSuggestionForm,
  useNewAllInputsSuggestionForm,
} from '@/components/forms';
import {AppTextInput} from '@/components/inputs';
import {fs} from '@/resources/config';
import React from 'react';
import {View} from 'react-native';
import InvestigationFormInputGroup from '../../form/form-input-group';

const CultureTestForm = () => {
  const microOrganismFormHandler = useNewAllInputsSuggestionForm();

  return (
    <>
      <InvestigationFormInputGroup>
        <AppText
          type="title_semibold"
          color="text50"
          text={'Numeric cell count'}
          style={{fontSize: fs(14)}}
        />
        <AppRow>
          <AppTextInput placeholder="0" baseContainerStyle={{flex: 1}} />
          <View style={{flex: 1}}>
            <AppText text="CFU" />
          </View>
        </AppRow>
      </InvestigationFormInputGroup>
      <InvestigationFormInputGroup>
        <AllInputsSuggestionForm
          suggestionBoxHeight={140}
          removeExpandButton
          formProps={microOrganismFormHandler}
          suggestions={[]}
          expandSheetHeaderTitle="Search for micro-organisms"
          placeholder="Search for micro-organisms"
        />
      </InvestigationFormInputGroup>
    </>
  );
};

export default CultureTestForm;
