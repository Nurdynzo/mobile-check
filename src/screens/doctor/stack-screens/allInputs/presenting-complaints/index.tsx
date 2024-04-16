/* eslint-disable react-native/no-inline-styles */
import {ListLayoutIcon, MicrophoneIcon, TypeIcon} from '@/assets/svg';
import AppButton from '@/components/buttons/app-button';
import AppIconButton from '@/components/buttons/app-icon-button';
import {AppTextInput} from '@/components/inputs';
import {SearchDiagnosesByTermInput} from '@/components/inputs/search';
import ScaffoldWithAnimatedHeader from '@/components/scaffolds/scaffold-with-animated-header';
import {ScrollableTab} from '@/components/tabs';
import * as Constants from '@/constants/index';
import {useColors} from '@/hooks/useColors';
import {useVoiceText} from '@/hooks/useVoiceText';
import {GeneralScreenProps} from '@/navigation/types';
import {useAppDispatch, useAppSelector} from '@/state/hooks';
import {
  selectTempState,
  setTempStateMainSearchResult,
} from '@/state/slices/all-inputs/presenting-complaints/presentingComplaints';
import {EMPTY_STRING} from '@/utils/constants';
import React, {FunctionComponent, useState} from 'react';
import {View} from 'react-native';
import SpeachTextControlView from './speech-text-control-view';
import {presentingComplaintsSuggestionSelectionStyles} from './styles';
import PresentingComplaintsSuggestionView from './suggestion-selection';
import PresentingComplaintsTypeNoteView from './type-note';
import {useCreateSymptomSummary} from './use-create-symptom-summary';

const PresentingComplaintsScreen: FunctionComponent<
  GeneralScreenProps<'DOCTOR_PRESENTING_COMPLAINTS'>
> = ({route}) => {
  const [isSuggestionsView, setView] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const {colors} = useColors();
  const styles = presentingComplaintsSuggestionSelectionStyles();
  const {patientId, encounterId} = route.params;

  return (
    <ScaffoldWithAnimatedHeader
      screenTitle={'Presenting complaints'}
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
          {isSuggestionsView && (
            <SearchBarAndAudioButtonView
              encounterId={encounterId}
              patientId={patientId}
            />
          )}

          <ScrollableTab
            style={{
              ...styles.tabButtonScrollViewContainer,
              display: isSuggestionsView ? 'flex' : 'none',
            }}
            onPress={setActiveTab}
            tabs={Constants.socratesTabLabels}
            currentIndex={activeTab}
            tabButtonStyle={styles.tabButtons}
            tabButtonScrollViewStyle={styles.tabButtonScrollView}
          />
        </>
      }>
      {isSuggestionsView ? (
        <PresentingComplaintsSuggestionView
          encounterId={encounterId}
          patientId={patientId}
          activeTab={activeTab}
        />
      ) : (
        <PresentingComplaintsTypeNoteView
          encounterId={encounterId}
          patientId={patientId}
        />
      )}
    </ScaffoldWithAnimatedHeader>
  );
};

export default PresentingComplaintsScreen;

const SearchBarAndAudioButtonView: FunctionComponent<{
  patientId: number;
  encounterId: number;
}> = ({patientId, encounterId}) => {
  const styles = presentingComplaintsSuggestionSelectionStyles();
  const dispatch = useAppDispatch();
  const [speachText, setSpeechText] = useState(EMPTY_STRING);

  const {mainSearchResult} = useAppSelector(selectTempState);

  const {handleGeneralNotesSubmit, isLoading} = useCreateSymptomSummary({
    encounterId,
    patientId,
  });

  const {
    islistening,
    startListening,
    stopListening,
    pauseListening,
    recordTime,
    speechVolume,
    startTime,
  } = useVoiceText({
    onChangeText: setSpeechText,
  });

  return (
    <View style={styles.searchBarContainer}>
      <View style={styles.searchBarAndAudioButtonContainer}>
        <SearchDiagnosesByTermInput
          height={40}
          baseInputFlex={1}
          placeholder="Search complaints"
          onSelectedItem={item => {
            dispatch(setTempStateMainSearchResult(item));
          }}
          value={mainSearchResult?.name as string}
        />

        {!startTime ? (
          <AppIconButton
            height={40}
            width={40}
            icon={<MicrophoneIcon />}
            onPress={startListening}
          />
        ) : (
          <></>
        )}
      </View>
      {startTime ? (
        <>
          <SpeachTextControlView
            islistening={islistening}
            recordTime={recordTime}
            speechVolume={speechVolume}
            pauseListing={pauseListening}
            startListing={startListening}
            stopListing={stopListening}
          />
          <AppTextInput
            inputContainerStyle={{height: undefined}}
            inputStyle={styles.speechTextInput}
            placeholder="Type your notes here"
            value={speachText}
            onChangeText={setSpeechText}
            multiline
          />
          <AppButton
            height={40}
            width={undefined}
            isLoading={isLoading}
            isDisabled={islistening || !speachText || isLoading}
            text={'Save'}
            onPress={() => {
              handleGeneralNotesSubmit({
                note: speachText,
                reset: stopListening,
              });
            }}
          />
        </>
      ) : (
        <></>
      )}
    </View>
  );
};
