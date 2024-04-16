import {ListLayoutIcon, TypeIcon} from '@/assets/svg';
import {AppIconButton} from '@/components/buttons';
import ScaffoldWithAnimatedHeader from '@/components/scaffolds/scaffold-with-animated-header';
import {ScrollableTab} from '@/components/tabs';
import {useColors} from '@/hooks/useColors';
import {GeneralScreenProps} from '@/navigation/types';
import {useApiServicesAppPhysicalexaminationsGetheadersGetQuery} from '@/state/services/physicalExaminationsApi';
import {SelectItem} from '@/types/selectItemsheet';
import {EMPTY_STRING} from '@/utils/constants';
import React, {FunctionComponent, useRef, useState} from 'react';
import PhysicalExaminationSearchInput from './seach-input';
import {physicalExaminationStyles} from './styles';
import PhysicalExaminationSuggestionView from './suggestion-view';
import PhysicalExaminationTypeNoteView from './type-note-view';
import {PhysicalExaminationSuggestionViewRef} from './suggestion-view/types';
import {PhysicalExaminationTypeNoteViewRef} from './type-note-view/types';

const PhysicalExamination: FunctionComponent<
  GeneralScreenProps<'PHYSICAL_EXAMINATION'>
> = ({route}) => {
  const [isSuggestionsView, setView] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const [selectedType, setSelectedType] = useState<SelectItem<string> | null>(
    null,
  );
  const {colors} = useColors();

  const {patientId, encounterId} = route.params;
  const styles = physicalExaminationStyles;

  const {data: tabData} =
    useApiServicesAppPhysicalexaminationsGetheadersGetQuery(
      {
        physicalExaminationTypeId: selectedType?.id as number,
      },
      {
        skip: !selectedType?.id,
      },
    );

  const suggestionViewRef = useRef<PhysicalExaminationSuggestionViewRef>(null);
  const suggestionNoteRef = useRef<PhysicalExaminationTypeNoteViewRef>(null);

  return (
    <ScaffoldWithAnimatedHeader
      screenTitle={'Physical examinations'}
      AppHeaderRightContent={
        <AppIconButton
          icon={
            isSuggestionsView ? (
              <TypeIcon />
            ) : (
              <ListLayoutIcon fill={colors.primary400} />
            )
          }
          onPress={() => {
            setView(value => !value);
          }}
        />
      }
      AdditionalHeaderContent={
        <>
          <PhysicalExaminationSearchInput
            value={selectedType?.value}
            onChangeValue={value => {
              if (value.id !== selectedType?.id) {
                setActiveTab(0);
                setSelectedType(value);
                suggestionViewRef.current?.resetAllInputSugesstionForm();
                suggestionNoteRef.current?.resetAllInputNoteForm();
              }
            }}
            style={styles.subHeader}
          />

          <ScrollableTab
            onPress={setActiveTab}
            tabs={tabData?.headers?.length ? tabData?.headers : [EMPTY_STRING]}
            currentIndex={activeTab}
            tabButtonScrollViewStyle={styles.subHeader}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              display:
                isSuggestionsView && tabData?.headers?.length ? 'flex' : 'none',
            }}
          />
        </>
      }>
      {isSuggestionsView ? (
        <PhysicalExaminationSuggestionView
          ref={suggestionViewRef}
          encounterId={encounterId}
          patientId={patientId}
          headerValue={tabData?.headers?.[activeTab]}
          examinationType={selectedType}
        />
      ) : (
        <PhysicalExaminationTypeNoteView
          encounterId={encounterId}
          patientId={patientId}
          noteTabs={tabData?.headers ?? []}
          ref={suggestionNoteRef}
          examinationType={selectedType}
        />
      )}
    </ScaffoldWithAnimatedHeader>
  );
};

export default PhysicalExamination;
