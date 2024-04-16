import AllInputsSuggestionsContainer from '@/components/all-inputs-suggestions-container';
import {AllInputsPillButton} from '@/components/buttons';
import SuggestionSelectionLeadingView from '@/components/suggestion-selection-leading-view';
import {AppTabComponent} from '@/components/tabs/tab-switch';
import {investigationsRecentResultsTabs} from '@/constants/requestInvestigations';
import {useColors} from '@/hooks/useColors';
import {wp} from '@/resources/config';
import React, {useState} from 'react';
import {View} from 'react-native';
import InvestigationRecentResults from '../investigations-recent-results';
import {investigationStyles} from '../styles';
import {InvestigationTabNamesTypes} from '../types';

const RecentResultForInvestigations = () => {
  const [activeTab, setActiveTab] = useState<InvestigationTabNamesTypes>(
    investigationsRecentResultsTabs[0].title as InvestigationTabNamesTypes,
  );
  const {colors} = useColors();
  const styles = investigationStyles({colors});
  return (
    <>
      <AllInputsSuggestionsContainer
        leadingComponent={
          <SuggestionSelectionLeadingView onTapExpand={() => {}} />
        }>
        {[
          {id: '', name: 'Left flank'},
          {id: '', name: 'Left flank'},
          {id: '', name: 'Left flank'},
          {id: '', name: 'Left flank'},
          {id: '', name: 'Left flank'},
          {id: '', name: 'Left flank'},
          {id: '', name: 'Left flank'},
        ].map((item, index) => (
          <AllInputsPillButton
            key={index}
            text={item.name}
            isSelected
            onPress={() => {}}
          />
        ))}
      </AllInputsSuggestionsContainer>
      <View style={{gap: wp(20)}}>
        <AppTabComponent
          tabs={investigationsRecentResultsTabs}
          activeTab={activeTab}
          setActiveTab={tabKey =>
            setActiveTab(tabKey as InvestigationTabNamesTypes)
          }
        />
        <View style={styles.recentResultContainer}>
          <InvestigationRecentResults />
        </View>
      </View>
    </>
  );
};

export default RecentResultForInvestigations;
