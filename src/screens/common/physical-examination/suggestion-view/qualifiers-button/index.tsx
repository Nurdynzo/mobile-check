import {MoreVerticalIcon} from '@/assets/svg';
import {AppButton} from '@/components/buttons';
import {AppRow, AppText} from '@/components/common';
import {NewAllInputsSuggestionForm} from '@/components/forms';
import {NewCustomSnowstormSimpleResponseDto} from '@/components/forms/all-inputs-suggestion-form/types';
import {AppContentSheet} from '@/components/sheets';
import {ScrollableTab} from '@/components/tabs';
import {useColors} from '@/hooks/useColors';
import {useSheet} from '@/hooks/useSheet';
import {detectTouch, wp} from '@/resources/config';
import {useApiServicesAppPhysicalexaminationsGetGetQuery} from '@/state/services/physicalExaminationsApi';
import {
  SnowstormSimpleResponseDto,
  useApiServicesAppSnowstormGetsymptomsuggestionGetQuery,
} from '@/state/services/snowstorm';
import VoidFunction from '@/types/voidfunction';
import {EMPTY_STRING} from '@/utils/constants';
import React, {FunctionComponent, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {PhysicalExaminationSuggestionType} from '../types';
import {physicalExaminationQualifiersButtonStyles} from './styles';
import {useAllInputsTabSuggestionForm} from '@/components/forms/all-inputs-suggestion-form/use-all-inputs-tab-suggestion-form';

const PhysicalExaminationQualifiersButton: FunctionComponent<{
  terms: 'Absent' | 'Present';
  item: PhysicalExaminationSuggestionType;
  onSubmit: (item: PhysicalExaminationSuggestionType) => void;
}> = ({terms, item, onSubmit}) => {
  const {colors} = useColors();
  const {sheetRef, openSheet, closeSheet} = useSheet();
  const [isSheetActive, setIsSheetActive] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const {data: qualifiersData} =
    useApiServicesAppPhysicalexaminationsGetGetQuery(
      {
        id: Number(item.id),
      },
      {skip: !isSheetActive},
    );

  const searchTerm =
    terms === 'Present'
      ? (qualifiersData?.presentTerms as string)
      : (qualifiersData?.absentTerms as string);

  const {data: symptomSuggestionData} =
    useApiServicesAppSnowstormGetsymptomsuggestionGetQuery(
      {
        searchTerm,
        inputType: 'Site',
      },
      {
        skip: isSheetActive && !searchTerm,
      },
    );

  const {site, plane, qualifiers, planeTypes} = qualifiersData ?? {};
  const tabs = [
    ...(site ? ['site'] : []),
    ...(plane ? ['plane'] : []),
    ...(qualifiers ? ['qualifier'] : []),
  ];

  const suggestions: {
    [key: string]: SnowstormSimpleResponseDto[];
  } = {
    site: (symptomSuggestionData ?? [])?.map(el => ({
      id: el.id as string,
      name: el.name as string,
    })),
    plane: (planeTypes ?? [])?.map(el => ({id: null, name: el})),
    qualifier: (qualifiers ?? [])?.map(el => ({
      id: el.snomedId as string,
      name: el.qualifier as string,
    })),
  };

  const qulifierTitle =
    qualifiersData?.[terms === 'Present' ? 'presentTerms' : 'absentTerms'];

  return (
    <>
      <TouchableOpacity hitSlop={detectTouch} onPress={openSheet}>
        <MoreVerticalIcon
          stroke={colors.text300}
          height={wp(16)}
          width={wp(16)}
        />
      </TouchableOpacity>
      <AppContentSheet
        sheetRef={sheetRef}
        onOpen={() => setIsSheetActive(true)}
        onClose={() => {
          setActiveTab(0);
          setIsSheetActive(false);
        }}
        AdditionalHeaderContent={
          <ScrollableTab
            onPress={setActiveTab}
            tabs={tabs.length ? tabs : [EMPTY_STRING]}
            currentIndex={activeTab}
            // eslint-disable-next-line react-native/no-inline-styles
            tabButtonScrollViewStyle={{
              paddingHorizontal: 0,
              display: tabs.length ? 'flex' : 'none',
            }}
            tabLabelTextTransform="capitalize"
          />
        }
        headerTitle={`Select qualifier for: ${qulifierTitle}`}>
        <SheetContent
          tabName={tabs[activeTab]}
          suggestions={suggestions[tabs[activeTab]]}
          qulifierTitle={`${qulifierTitle}`}
          closeSheet={closeSheet}
          onSubmit={({description, ...rest}) =>
            onSubmit({...item, name: description, ...rest})
          }
        />
      </AppContentSheet>
    </>
  );
};

const SheetContent: FunctionComponent<{
  suggestions: NewCustomSnowstormSimpleResponseDto[];
  tabName: string;
  qulifierTitle: string;
  closeSheet: VoidFunction;
  onSubmit: (item: {
    description: string;
    sites?: SnowstormSimpleResponseDto[];
    planes?: SnowstormSimpleResponseDto[];
    qualifiers?: SnowstormSimpleResponseDto[];
  }) => void;
}> = ({
  suggestions,
  tabName = EMPTY_STRING,
  qulifierTitle,
  closeSheet = () => null,
  onSubmit,
}) => {
  const {allTabSelectedItems, ...handlers} = useAllInputsTabSuggestionForm({
    isSingleSelect: false,
    tabName,
  });

  const styles = physicalExaminationQualifiersButtonStyles;
  const description = `${qulifierTitle}: ${Object.values(allTabSelectedItems)
    .flat()
    .map(el => el.name)
    .join(', ')}`;

  return (
    <View style={styles.sheetContainer}>
      <NewAllInputsSuggestionForm
        expandSheetHeaderTitle=""
        formProps={handlers}
        suggestions={suggestions}
        removeExpandButton
      />
      <AppRow
        alignItems="flex-start"
        columnGap={16}
        extraStyles={styles.footerContainer}>
        <View style={styles.footerSummaryContainer}>
          <AppText type="subtitle_semibold" color="text50" text={'Result:'} />
          <AppText
            type="body_1_semibold"
            color="text400"
            text={description}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{flex: 1}}
          />
        </View>

        <AppButton
          onPress={() => {
            closeSheet();
            onSubmit({description, ...allTabSelectedItems});
          }}
          text="Done"
          isDisabled={!Object.values(allTabSelectedItems).flat().length}
        />
      </AppRow>
    </View>
  );
};

export default PhysicalExaminationQualifiersButton;
