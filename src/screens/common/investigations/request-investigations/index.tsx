import {ArrowRightIcon, BinIcon} from '@/assets/svg';
import AllInputsHistoryListView from '@/components/all-inputs-history-list-view';
import AllInputsHistoryTile from '@/components/all-inputs-history-tile';
import {showToast} from '@/components/app-toast';
import {AllInputsAddNotesButton, AppButton} from '@/components/buttons';
import {AllInputsPanelWithTitleCard} from '@/components/cards';
import {AppSeperator, AppText} from '@/components/common';
import {NewAllInputsSuggestionForm} from '@/components/forms/all-inputs-suggestion-form';
import {AppMenuSheet} from '@/components/sheets';
import {AppTabComponent} from '@/components/tabs/tab-switch';
import AppTabSwitcher from '@/components/tabs/tabs-switcher';
import {
  InvestigationCategoriesKey,
  InvestigationsCatergoryFilterOption,
  contrastAndPlainPriorities,
  priorities,
  requestInvestigationCategories,
} from '@/constants/requestInvestigations';
import {useColors} from '@/hooks/useColors';
import {useSheet} from '@/hooks/useSheet';
import {wp} from '@/resources/config';
import {
  GetInvestigationRequestsResponse,
  useApiServicesAppInvestigationDeleteinvestigationrequestDeleteMutation,
  useApiServicesAppInvestigationGetinvestigationsrequestsGetQuery,
} from '@/state/services/investigationApi';
import {RootState} from '@/state/store';
import {MenuOptionsProp} from '@/types/menusheet';
import {EMPTY_STRING} from '@/utils/constants';
import {checkDay, convertToReadableTime} from '@/utils/helpers/convertDateTime';
import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {investigationStyles} from '../styles';
import useInvestigationCategory from './hooks/use-investigation-category';
import useInvestigationForm from './hooks/use-investigation-form';
import useRequestInvestigations from './hooks/use-request-investigations';
import useInvestigationSelectionFlags from './hooks/use-investigation-selection-flags';
import {InvestigationType} from './type';

const RequestInvestigations = ({encounterId}: {encounterId?: number}) => {
  const {colors} = useColors();
  const styles = investigationStyles({colors});

  const {
    activeCategory,
    activeCategoryFilter,
    handleChangeActiveCategory,
    handleChangeCategoryFilter,
    getInvestionCategoryTabs,
  } = useInvestigationCategory();

  const {
    isSingleSelect,
    addNotesButtonState,
    localSelectedInvestigations,
    requestInvestigationFormProps,
    selectedItems,
    text,
    investigationNotes,
    handleRemoveItemFromLocalInvestigationArray,
    handleAddItemToLocalInvestigationArray,
    setLocalSelectedInvestigations,
    setSelectedItems,
    setInvestigationNotes,
  } = useInvestigationForm({activeCategory, activeCategoryFilter});

  const {investigationSuggestions, isLoading, handleRequestInvestigation} =
    useRequestInvestigations({
      searchText: text,
      activeCategory,
    });

  const {
    activePriority,
    setActivePriority,
    activeContrastAndPlainPriority,
    setActiveContrastAndPlainPriority,
  } = useInvestigationSelectionFlags();

  return (
    <View style={{gap: wp(10)}}>
      <AppTabComponent
        tabs={requestInvestigationCategories}
        activeTab={activeCategory}
        setActiveTab={activeInvestigationCategory =>
          handleChangeActiveCategory(
            activeInvestigationCategory as InvestigationCategoriesKey,
          )
        }
      />
      <AllInputsPanelWithTitleCard title={'Request investigations'}>
        <>
          <View style={styles.wrapper}>
            <AppTabComponent
              tabs={getInvestionCategoryTabs()}
              activeTab={activeCategoryFilter}
              setActiveTab={tabKey =>
                handleChangeCategoryFilter(
                  tabKey as InvestigationsCatergoryFilterOption,
                )
              }
            />
            <AppTabSwitcher
              tabs={priorities}
              selectedTab={activePriority}
              onChangeTab={tab => setActivePriority(tab)}
            />
          </View>

          <NewAllInputsSuggestionForm
            isSingleSelect={isSingleSelect}
            inActiveSelectedPillBackground={'danger100'}
            expandSheetHeaderTitle={EMPTY_STRING}
            showTextInput={selectedItems.length === 0}
            disablePlusBtnCondition={
              investigationSuggestions?.length === 0 || !text.trim()
            }
            formProps={{
              ...requestInvestigationFormProps,
              handleAddItem: props => {
                requestInvestigationFormProps.handleAddItem(props);
                handleAddItemToLocalInvestigationArray([props]);
              },
              handleRemoveItem: props => {
                requestInvestigationFormProps.handleRemoveItem(props);
                handleRemoveItemFromLocalInvestigationArray(props);
              },
              setSelectedItems(value) {
                requestInvestigationFormProps.setSelectedItems(value);
                handleAddItemToLocalInvestigationArray(value);
              },
            }}
            suggestions={
              investigationSuggestions?.map(item => {
                return {
                  ...item,
                  type: activeCategory,
                  urgent: activePriority.data === 'Urgent',
                  isInActive: activePriority.data === 'Urgent',
                } as InvestigationType;
              }) ?? []
            }
          />
        </>
        {activeCategory === 'Radiology + Pulm' && (
          <>
            <View style={{marginVertical: wp(10)}}>
              <AppTabSwitcher
                tabs={contrastAndPlainPriorities}
                selectedTab={activeContrastAndPlainPriority}
                onChangeTab={tab => setActiveContrastAndPlainPriority(tab)}
              />
            </View>
          </>
        )}
        <View style={{marginVertical: wp(10)}}>
          <AllInputsAddNotesButton
            addButtonLabel={'Add investigation notes'}
            buttonState={addNotesButtonState}
            buttonStyle={styles.addNotesButton}
            onChangeNoteValue={setInvestigationNotes}
            noteValue={investigationNotes}
          />
        </View>
        <AppButton
          text="Save"
          isLoading={isLoading}
          isDisabled={localSelectedInvestigations.length === 0}
          onPress={() =>
            handleRequestInvestigation({
              investigationNotes,
              localSelectedInvestigations,
              encounterId,
              successCallback: () => {
                setLocalSelectedInvestigations([]);
                setSelectedItems([]);
                setInvestigationNotes(EMPTY_STRING);
              },
            })
          }
          containerStyle={styles.miniSaveBtn}
        />
        <AppSeperator style={styles.seperator} />
        <PatientInvestigationRequestsHistory category={activeCategory} />
      </AllInputsPanelWithTitleCard>
    </View>
  );
};

export default RequestInvestigations;

const PatientInvestigationRequestsHistory = ({
  category,
}: {
  category: InvestigationCategoriesKey;
}) => {
  const {id: patientId, fullName} = useSelector(
    (state: RootState) => state.selectedPatient,
  );

  const {data: patientInvestigationRequest} =
    useApiServicesAppInvestigationGetinvestigationsrequestsGetQuery({
      patientId: patientId,
      type: category,
    });

  if (!patientInvestigationRequest) {
    return <></>;
  }

  return (
    <AllInputsHistoryListView
      data={patientInvestigationRequest}
      renderItem={({item}) => (
        <PatientInvestigationRequestsHistoryCard
          key={item.id}
          patientFullName={fullName}
          item={item}
        />
      )}
    />
  );
};

const PatientInvestigationRequestsHistoryCard: FunctionComponent<{
  item: GetInvestigationRequestsResponse;
  patientFullName: string;
}> = ({item}) => {
  const [deleteInvestigationRequest, {isLoading}] =
    useApiServicesAppInvestigationDeleteinvestigationrequestDeleteMutation();
  const {sheetRef, openSheet, closeSheet} = useSheet();

  const handleDeleteInvestigationRequest = async ({
    requestId,
  }: {
    requestId: number;
  }) => {
    try {
      await deleteInvestigationRequest({requestId});
      showToast('SUCCESS', {
        message: 'Request Deleted!',
        title: 'Deleted!',
      });
    } catch (error) {
      showToast('ERROR', {
        message: 'Failed to delete selected investigation request',
        title: 'Failed!',
      });
    }
  };

  const menuOptions: MenuOptionsProp = [
    {
      value: 'Delete',
      onPress: () =>
        handleDeleteInvestigationRequest({requestId: Number(item.id)}),
      renderRightIcon: () => <BinIcon />,
      color: 'danger300',
    },
  ];

  return (
    <>
      <AllInputsHistoryTile
        key={item.id}
        date={checkDay(item.creationTime)}
        time={convertToReadableTime(item.creationTime)}
        onPress={openSheet}
        isLoading={isLoading}
        textComponent={
          <AppText
            type={'body_2_semibold'}
            text={[
              <AppText
                key={0}
                color="danger100"
                text={`${item.urgent ? 'Urgent ' : EMPTY_STRING}`}
                type={'body_2_bold'}
              />,
              item.name,
            ]}
          />
        }
      />
      <AppMenuSheet
        sheetRef={sheetRef}
        closeSheet={closeSheet}
        removeHeader
        renderRightIcon={() => <ArrowRightIcon />}
        menuOptions={menuOptions}
      />
    </>
  );
};
