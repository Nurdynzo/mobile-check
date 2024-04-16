import {CloseIcon, PlusCircleIcon} from '@/assets/svg';
import AllInputsHistoryListView from '@/components/all-inputs-history-list-view';
import AllInputsHistoryTile from '@/components/all-inputs-history-tile';
import {AllInputsPillButton} from '@/components/buttons';
import AppButton from '@/components/buttons/app-button';
import {AllInputsPanelWithTitleCard} from '@/components/cards';
import AllInputPresaveItemView from '@/components/cards/all-input-pre-save-item-view';
import {AppText} from '@/components/common';
import AppTextInput from '@/components/inputs/app-text-input';
import ScaffoldWithAnimatedHeader from '@/components/scaffolds/scaffold-with-animated-header';
import {AppTabButtonSwitcher} from '@/components/tabs';
import * as Constants from '@/constants/index';
import {useColors} from '@/hooks/useColors';
import {GeneralScreenProps} from '@/navigation/types';
import {useAppSelector} from '@/state/hooks';
import {useApiServicesAppDiagnosisGetpatientdiagnosisGetQuery} from '@/state/services/patientApi';
import {selectPatient} from '@/state/slices/patient/selectedPatient';
import {DiagnosisState} from '@/types/doctor/diagnosis';
import {EMPTY_STRING} from '@/utils/constants';
import {checkDay, convertToReadableTime} from '@/utils/helpers/convertDateTime';
import React, {FunctionComponent, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import SearchDiagnosisByTermDropDownInput from './search-diagnosis-by-term-drop-down-input';
import {diagonisStyles} from './styles';
import {useSaveDiagnosis} from './use-save-diagnosis';
import {combineDiagnosisPreSaveStateToDraftString} from './combine-diagnosis-pre-save-state-draft';

const defaultDiagnosisState = {
  mainSearchResult: EMPTY_STRING,
  note: EMPTY_STRING,
  activePills: [],
  diagnosisBodyPart: EMPTY_STRING,
};

const Diagnosis: FunctionComponent<GeneralScreenProps<'DOCTOR_DIAGNOSIS'>> = ({
  route,
}) => {
  const {encounterId} = route.params;
  const {id: patientId} = useAppSelector(selectPatient);
  const {colors} = useColors();
  const styles = diagonisStyles({colors});

  const [activeTab, setActiveTab] = useState<
    'Diagnosis' | 'Differential' | string
  >('Diagnosis');

  const [diagnosisState, setDiagnosisState] = useState<DiagnosisState>(
    defaultDiagnosisState,
  );
  const [diagnosisDifferentialStates, setDiagnosisDifferentialStates] =
    useState<DiagnosisState[]>([]);

  const {isSubmitting, handleSave} = useSaveDiagnosis({patientId, encounterId});

  const isAddingDiagnosisAllowed =
    diagnosisState.activePills && diagnosisState.activePills?.length > 0;

  const handleAddDiagnosis = () => {
    if (isAddingDiagnosisAllowed) {
      const newStates = [...diagnosisDifferentialStates];
      newStates.push({
        ...diagnosisState,
        mainSearchResult:
          activeTab === 'Diagnosis'
            ? 'Clinical diagnosis'
            : 'Differential diagnosis',
      });
      setDiagnosisDifferentialStates(newStates);
      setDiagnosisState(defaultDiagnosisState);
    }
  };

  const handleRemovePresave = (index: number) => {
    const newStates = diagnosisDifferentialStates.filter((_, i) => i !== index);
    setDiagnosisDifferentialStates(newStates);
  };
  const handleEditPresave = (index: number) => {
    setDiagnosisState(diagnosisDifferentialStates[index]);
    const newStates = diagnosisDifferentialStates.filter((_, i) => i !== index);
    setDiagnosisDifferentialStates(newStates);
  };

  return (
    <ScaffoldWithAnimatedHeader screenTitle={'Diagnoisis'}>
      <AllInputsPanelWithTitleCard title="Diagnoisis">
        <AppTabButtonSwitcher
          selectedTab={activeTab}
          onChangeTab={setActiveTab}
          tabs={Constants.diagnosisTabViewsList.map(el => ({name: el}))}
          tabProps={{
            activeBgColor: 'neutral100',
            inActiveBgColor: 'transparent',
            activeTextColor: 'text400',
            inActiveTextColor: 'text300',
            textType: 'body_1_semibold',
            otherStyles: styles.tabButton,
          }}
          containerStyles={styles.tabSwitcherContainer}
        />

        <View style={styles.fieldsContainer}>
          {diagnosisState.activePills?.length === 0 ? (
            <SearchDiagnosisByTermDropDownInput
              onSelect={item => {
                setDiagnosisState({
                  ...diagnosisState,
                  diagnosisBodyPart: item?.name || EMPTY_STRING,
                  activePills: [
                    {
                      type: activeTab,
                      value: item?.name || EMPTY_STRING,
                    },
                  ],
                });
              }}
            />
          ) : (
            <View style={styles.selectedPillContainer}>
              <AllInputsPillButton
                text={diagnosisState?.diagnosisBodyPart ?? EMPTY_STRING}
                isSelected
                borderWidth={0}
                onPress={() => setDiagnosisState(defaultDiagnosisState)}
              />
            </View>
          )}

          <AppTextInput
            multiline
            height={120}
            placeholder="Enter diagnosis note"
            value={diagnosisState.note}
            onChangeText={value => {
              setDiagnosisState({
                ...diagnosisState,
                note: value,
              });
            }}
          />
        </View>

        <TouchableOpacity
          style={styles.actionClick}
          disabled={!isAddingDiagnosisAllowed}
          onPress={handleAddDiagnosis}>
          <PlusCircleIcon
            fill={isAddingDiagnosisAllowed ? colors.primary400 : colors.text50}
          />

          <AppText
            type="paragraph_2_medium"
            color={isAddingDiagnosisAllowed ? 'primary400' : 'primary50'}
            text={'Add diagnosis'}
            style={styles.actionText}
          />
        </TouchableOpacity>

        {diagnosisDifferentialStates.length ? (
          <>
            <TouchableOpacity
              style={styles.actionClick}
              onPress={() => setDiagnosisDifferentialStates([])}>
              <AppText
                type="paragraph_2_medium"
                color={'primary400'}
                text={'Clear all'}
                style={styles.actionText}
              />
              <CloseIcon width={16} height={16} fill={colors.primary400} />
            </TouchableOpacity>
            <View style={styles.preSavedContainer}>
              {diagnosisDifferentialStates?.map((item, index) => (
                <AllInputPresaveItemView
                  key={index}
                  onRemove={() => handleRemovePresave(index)}
                  onEdit={() => handleEditPresave(index)}
                  TextComponent={
                    <AppText
                      text={[
                        <AppText
                          key={0}
                          text={`${item?.mainSearchResult}`}
                          type={'body_2_bold'}
                          color="text400"
                        />,
                        ` - ${combineDiagnosisPreSaveStateToDraftString(
                          item?.mainSearchResult as
                            | 'Clinical diagnosis'
                            | 'Differential diagnosis',
                          item?.note,
                          item?.diagnosisBodyPart,
                        )}`,
                      ]}
                      type="body_2_semibold"
                      color="text400"
                    />
                  }
                />
              ))}
            </View>
          </>
        ) : (
          <></>
        )}
        <AppButton
          text={'Save'}
          isLoading={isSubmitting}
          containerStyle={styles.btnSave}
          isDisabled={diagnosisDifferentialStates.length === 0}
          onPress={() =>
            handleSave({
              diagnosisDifferentialStates,
              reset: () => setDiagnosisDifferentialStates([]),
            })
          }
        />

        <SavedDiagnosisList patientId={patientId} />
      </AllInputsPanelWithTitleCard>
    </ScaffoldWithAnimatedHeader>
  );
};

export default Diagnosis;

const SavedDiagnosisList: FunctionComponent<{patientId: number}> = ({
  patientId,
}) => {
  const {colors} = useColors();
  const styles = diagonisStyles({colors});

  const {currentData: notesData} =
    useApiServicesAppDiagnosisGetpatientdiagnosisGetQuery({
      patientId,
    });

  if (!notesData?.length) {
    return <></>;
  }

  return (
    <AllInputsHistoryListView
      data={notesData ?? []}
      removeSeparator
      renderItem={({item}) => (
        <AllInputsHistoryTile
          containerStyles={styles.historyTitle}
          date={checkDay(item.creationTime)}
          time={convertToReadableTime(item.creationTime)}
          onPress={() => null}
          isLoading={false}
          textComponent={
            <AppText
              text={`${item.description}, ${item.notes}`}
              type="body_2_semibold"
              color="text400"
            />
          }
        />
      )}
    />
  );
};
