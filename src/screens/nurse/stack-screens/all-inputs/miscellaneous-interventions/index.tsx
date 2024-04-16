import {ArrowRightIcon} from '@/assets/svg';
import AllInputsHistoryTile from '@/components/all-inputs-history-tile';
import {AppSeperator, AppText} from '@/components/common';
import {AppMenuSheet} from '@/components/sheets';
import {useColors} from '@/hooks/useColors';
import {useSheet} from '@/hooks/useSheet';
import {GeneralScreenProps} from '@/navigation/types';
import {
  useApiServicesAppWardemergenciesGetallGetQuery,
  useApiServicesAppWardemergenciesGetnursinginterventionsGetQuery,
  useApiServicesAppWardemergenciesGetpatientinterventionsGetQuery,
} from '@/state/services/WardEmergenciesApi';
import {CreatePatientInterventionRequest} from '@/state/services/patientApi';
import {SnowstormSimpleResponseDto} from '@/state/services/snowstorm';
import {MenuOptionsProp} from '@/types/menusheet';
import {checkDay, convertToReadableTime} from '@/utils/helpers/convertDateTime';
import {extractUniqueFieldForSnowMeds} from '@/utils/helpers/unique';
import React, {FunctionComponent, useEffect, useState} from 'react';
import {View} from 'react-native';
import CollapsibleSiteCard from '../common/collapsible-site-card';
import {miscellaneousInterventionsStyles} from './styles';
import {useSaveMiscellaneousInterventions} from './use-save-miscellaneous-interventions';
import ScaffoldWithAnimatedHeader from '@/components/scaffolds/scaffold-with-animated-header';
import {AppButton} from '@/components/buttons';
import AllInputsHistoryListView from '@/components/all-inputs-history-list-view';
import CollapsibleAllInputsPanelWithTitleCard from '../common/collapsible-all-inputs-panel';
import {useNewAllInputsSuggestionForm} from '@/components/forms';
import {NewCustomSnowstormSimpleResponseDto} from '@/components/forms/all-inputs-suggestion-form/types';

const MiscellaneousInterventions: FunctionComponent<
  GeneralScreenProps<'NURSE_MISCELLANEOUS_INTERVENTIONS'>
> = ({route}) => {
  const {colors} = useColors();
  const styles = miscellaneousInterventionsStyles({colors});

  const {patientId, encounterId} = route?.params ?? {};

  const {
    handleSaveMiscellaneousInterventions,
    isSavingMiscellaneousInterventions,
  } = useSaveMiscellaneousInterventions();

  const [openInterventions, setOpenInterventions] = useState(false);

  const interventionsProps = useNewAllInputsSuggestionForm();
  const actionsTakenProps = useNewAllInputsSuggestionForm();

  const {
    selectedItems: selectedInterventions,
    handleRemoveItem: handleRemoveSelectedInterventions,
    setSelectedItems: setSelectedInterventions,
  } = interventionsProps;

  const {
    selectedItems: selectedActionsTaken,
    setSelectedItems: setSelectedActionsTaken,
  } = actionsTakenProps;

  const {data: interventionsSuggestions} =
    useApiServicesAppWardemergenciesGetallGetQuery(undefined, {
      selectFromResult: response => ({
        ...response,
        data: response.data?.map(value => ({
          id: `${value.id}`,
          name: value.event,
        })) as SnowstormSimpleResponseDto[],
      }),
    });

  const {currentData: actionTakenSuggestions = []} =
    useApiServicesAppWardemergenciesGetnursinginterventionsGetQuery(
      {
        wardEmergencyId: selectedInterventions[0]?.id as number | undefined,
      },
      {
        refetchOnMountOrArgChange: true,
        selectFromResult: response => ({
          ...response,
          currentData: response.data?.map(value => ({
            id: `${value.id}`,
            name: value.name,
          })) as NewCustomSnowstormSimpleResponseDto[],
        }),
      },
    );

  const handleSaveSelectedActionsTaken = () => {
    const payload: CreatePatientInterventionRequest = {
      patientId,
      encounterId,
      eventId: Number(selectedInterventions[0]?.id) || 0,
      eventText: selectedInterventions[0]?.name as string,
      // TODO(Zucci): Kindly fix this by taking out the use of any
      interventionIds: selectedInterventions[0]?.id
        ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (extractUniqueFieldForSnowMeds(selectedActionsTaken, 'id') as any)
        : [],
      // TODO(Zucci): Kindly fix this by taking out the use of any
      interventionTexts: extractUniqueFieldForSnowMeds(
        selectedActionsTaken,
        'name',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ) as any,
    };
    handleSaveMiscellaneousInterventions(payload, () => {
      setSelectedInterventions([]);
      setSelectedActionsTaken([]);
    });
  };

  const handleOpenInterventions = () => {
    if (selectedInterventions.length) {
      setOpenInterventions(!openInterventions);
    }
  };

  useEffect(() => {
    actionsTakenProps.setSelectedItems([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedInterventions]);

  return (
    <ScaffoldWithAnimatedHeader
      screenTitle={'Miscellaneous interventions'}
      contentContainerStyle={styles.screen}>
      <CollapsibleSiteCard
        onToggle={() => handleOpenInterventions()}
        formProps={interventionsProps}
        title="Intervention"
        leadingLabel={`${
          !openInterventions ? 'Enter events' : 'Events selected'
        }`}
        shouldOpen
        suggestions={interventionsSuggestions}
        selectedData={selectedInterventions}
        isPreviewing={openInterventions && selectedInterventions.length > 0}
        handleRemoveItem={item => {
          handleRemoveSelectedInterventions(item);
          if (selectedInterventions.length === 1) {
            setOpenInterventions(false);
          }
        }}
        hideSaveButton
      />
      <CollapsibleAllInputsPanelWithTitleCard
        title={'Actions taken'}
        formProps={actionsTakenProps}
        suggestions={actionTakenSuggestions}
        isPrecedingFormEmpty={selectedInterventions.length === 0}
        disableHeaderToggle
        SummaryView={<MiscellaneousInterventionHistory patientId={patientId} />}
        SaveButton={
          <AppButton
            text={'Save'}
            onPress={handleSaveSelectedActionsTaken}
            isLoading={isSavingMiscellaneousInterventions}
            isDisabled={selectedInterventions.length === 0}
            containerStyle={styles.saveButton}
          />
        }
      />
    </ScaffoldWithAnimatedHeader>
  );
};

export default MiscellaneousInterventions;

const MiscellaneousInterventionHistory: FunctionComponent<{
  patientId: number;
}> = ({patientId}) => {
  const {colors} = useColors();
  const styles = miscellaneousInterventionsStyles({colors});

  const {currentData: patientInterventionSummaries} =
    useApiServicesAppWardemergenciesGetpatientinterventionsGetQuery({
      patientId,
    });

  if (!patientInterventionSummaries?.length) {
    return <></>;
  }

  return (
    <>
      <AppSeperator style={styles.seperator} />
      <AllInputsHistoryListView
        data={patientInterventionSummaries}
        itemSeparatorComponent={HistorySeparator}
        renderItem={({item}) => (
          <MiscellaneousInterventionHistoryCard key={item.id} item={item} />
        )}
      />
    </>
  );
};

const HistorySeparator = () => {
  // eslint-disable-next-line react-native/no-inline-styles
  return <View style={{height: 16}} />;
};

//TODO(Zucci): When the delete API for misc int is avalable, implement it
const MiscellaneousInterventionHistoryCard: FunctionComponent<{
  // TODO(Zucci): Kindly fix this by taking out the use of any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  item: any;
}> = ({item}) => {
  const {sheetRef, openSheet, closeSheet} = useSheet();

  const menuOptions: MenuOptionsProp = [
    {value: 'Link to care plan', onPress: () => null},
    {value: 'Link to examination', onPress: () => null},
    {value: 'Highlight for attention', onPress: () => null},
    {value: 'Ignore', onPress: () => {}},
  ];

  return (
    <>
      <AllInputsHistoryTile
        key={item.id}
        date={checkDay(item.creationTime)}
        time={convertToReadableTime(item.creationTime)}
        onPress={openSheet}
        textComponent={
          <AppText
            text={item.description}
            type="body_2_semibold"
            color="text400"
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
