import {ArrowRightIcon, BinIcon} from '@/assets/svg';
import AllInputsHistoryListView from '@/components/all-inputs-history-list-view';
import AllInputsHistoryTile from '@/components/all-inputs-history-tile';
import {AllInputsAddNotesButton, AppButton} from '@/components/buttons';
import {AllInputsPanelWithTitleCard} from '@/components/cards';
import {AppRow, AppSeperator, AppText} from '@/components/common';
import {NewAllInputsSuggestionForm} from '@/components/forms';
import {useAllInputsTabSuggestionForm} from '@/components/forms/all-inputs-suggestion-form/use-all-inputs-tab-suggestion-form';
import {AllInputImageUploadInput} from '@/components/inputs';
import {AllInputImageListViewSheet, AppMenuSheet} from '@/components/sheets';
import * as Constants from '@/constants/index';
import useAddNoteButton from '@/hooks/useAddNoteButton';
import {useSheet} from '@/hooks/useSheet';
import {wp} from '@/resources/config';
import {SocratesSuggestionToggleButton} from '@/screens/doctor/stack-screens/allInputs/presenting-complaints/suggestion-selection/socrates/common';
import {
  PatientPhysicalExaminationResponseDto,
  useApiServicesAppPhysicalexaminationsGetlistGetQuery,
  useApiServicesAppPhysicalexaminationsGetpatientphysicalexaminationsummaryGetQuery,
  useApiServicesAppPhysicalexaminationsGetpatientphysicalexaminationuploadedimagesGetQuery,
} from '@/state/services/physicalExaminationsApi';
import {MenuOptionsProp} from '@/types/menusheet';
import {EMPTY_STRING} from '@/utils/constants';
import {checkDay, convertToReadableTime} from '@/utils/helpers/convertDateTime';
import {imageFileSchema} from '@/utils/schema';
import React, {
  FunctionComponent,
  forwardRef,
  useImperativeHandle,
  useState,
} from 'react';
import {View} from 'react-native';
import useCreatePhysicalExamination from '../use-create-physical-examination';
import PhysicalExaminationAddVitalSignsButton from './add-vital-signs-button';
import PhysicalExaminationQualifiersButton from './qualifiers-button';
import {physicalExaminationSuggestionStyles} from './styles';
import {
  PhysicalExaminationSuggestionType,
  PhysicalExaminationSuggestionViewProps,
  PhysicalExaminationSuggestionViewRef,
} from './types';
import useDeletePhysicalExaminationImage from './use-delete-physical-examination-image';
import useDeletePhysicalExaminationSuggestion from './use-delete-physical-examination-suggestion';
import ViewImagesOnLocalButton from '@/components/view-images-on-local-button';

const PhysicalExaminationSuggestionView = forwardRef<
  PhysicalExaminationSuggestionViewRef,
  PhysicalExaminationSuggestionViewProps
>(({encounterId, patientId, headerValue, examinationType}, ref) => {
  const [type, setType] = useState<
    (typeof Constants.presentAbsentSuggestionToggleOptions)[number]
  >(Constants.presentAbsentSuggestionToggleOptions[0]);
  const [images, setImages] = useState<imageFileSchema[]>([]);
  const [note, setNote] = useState(EMPTY_STRING);
  const [isLoading, setIsLoading] = useState(false);

  const {currentData: searchedData} =
    useApiServicesAppPhysicalexaminationsGetlistGetQuery(
      {
        header: headerValue as string,
        patientId: patientId,
      },
      {
        skip: !headerValue,
      },
    );

  const {allTabSelectedItems, ...handlers} =
    useAllInputsTabSuggestionForm<PhysicalExaminationSuggestionType>({
      tabName: headerValue ?? EMPTY_STRING,
    });

  useImperativeHandle(ref, () => ({
    resetAllInputSugesstionForm: handlers.reset,
  }));

  const {handleSaveSuggestions} = useCreatePhysicalExamination({
    patientId,
    encounterId,
  });

  const handleSave = async () => {
    setIsLoading(true);
    await handleSaveSuggestions({
      allTabSelectedItems,
      otherNote: note,
      physicalExaminationTypeId: examinationType?.id as number,
      images,
      reset: () => {
        handlers.reset();
        setImages([]);
        setNote(EMPTY_STRING);
      },
    });

    setIsLoading(false);
  };

  return (
    <AllInputsPanelWithTitleCard title={examinationType?.value ?? EMPTY_STRING}>
      <AllInputImageUploadInput
        onChangeImage={img => setImages(preImgs => [...preImgs, img])}
      />
      <NewAllInputsSuggestionForm
        expandSheetHeaderTitle="Select qualifier for: Boils/carbuncles on torso"
        toggleButton={
          <SocratesSuggestionToggleButton
            items={Constants.presentAbsentSuggestionToggleOptions}
            activeItem={type}
            setActiveItem={item => setType(item)}
          />
        }
        formProps={handlers}
        suggestions={(searchedData ?? []).map(el => ({
          id: `${el.id}`,
          name: el?.[type.value === 'Absent' ? 'absentTerms' : 'presentTerms'],
          isInActive: type.value === 'Absent',
          data: el,
        }))}
        renderSuggestionsPillLeftContent={item =>
          item.data?.hasQualifiers && (
            <PhysicalExaminationQualifiersButton
              terms={type.value}
              item={item}
              onSubmit={handlers.handleAddItem}
            />
          )
        }
      />
      <ViewImagesOnLocalButton
        images={images}
        onDelete={(index, closeSheet = () => null) => {
          setImages(preImgs => preImgs.filter((_, i) => i !== index));
          closeSheet();
        }}
      />
      <AddNotesAndAddSymptomView noteValue={note} onChangeNoteValue={setNote} />
      <AppRow extraStyles={{marginTop: wp(32)}}>
        <PhysicalExaminationAddVitalSignsButton
          encounterId={encounterId}
          patientId={patientId}
        />
        <AppButton
          text={'Save'}
          isDisabled={
            !Object.values(allTabSelectedItems).flat()?.length || isLoading
          }
          isLoading={isLoading}
          onPress={handleSave}
        />
      </AppRow>
      <PhysicalExaminationHistory
        encounterId={encounterId}
        patientId={patientId}
      />
    </AllInputsPanelWithTitleCard>
  );
});

export default PhysicalExaminationSuggestionView;

const AddNotesAndAddSymptomView: FunctionComponent<{
  onChangeNoteValue?: (text: string) => void;
  noteValue?: string;
}> = props => {
  const styles = physicalExaminationSuggestionStyles;
  const addNotesButtonState = useAddNoteButton();

  return (
    <AllInputsAddNotesButton
      addButtonLabel={'Add symptom notes'}
      buttonState={addNotesButtonState}
      buttonStyle={styles.addNotesButton}
      {...props}
    />
  );
};

const PhysicalExaminationHistory: FunctionComponent<{
  patientId: number;
  encounterId: number;
}> = ({encounterId, patientId}) => {
  const styles = physicalExaminationSuggestionStyles;

  const {data: summaryData} =
    useApiServicesAppPhysicalexaminationsGetpatientphysicalexaminationsummaryGetQuery(
      {patientId},
    );

  if (!summaryData?.length) {
    return <></>;
  }

  return (
    <>
      <AppSeperator style={styles.seperator} />

      <AllInputsHistoryListView
        data={summaryData}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({item}) => (
          <PhysicalExaminationHistoryCard
            patientId={patientId}
            encounterId={encounterId}
            data={item}
          />
        )}
      />
    </>
  );
};

const PhysicalExaminationHistoryCard: FunctionComponent<{
  data: PatientPhysicalExaminationResponseDto;
  patientId: number;
  encounterId: number;
}> = ({data}) => {
  const {
    sheetRef: menuSheetRef,
    openSheet: openMenuSheet,
    closeSheet: closeMenuSheet,
  } = useSheet();

  const {handleDeleteSuggestion, isLoading} =
    useDeletePhysicalExaminationSuggestion();

  const menuOptions: MenuOptionsProp = [
    {value: 'Highlight for attention', onPress: () => null},
    {
      value: 'Delete',
      onPress: () => handleDeleteSuggestion(data.id as number),
      renderRightIcon: () => <BinIcon />,
      color: 'danger300',
    },
  ];

  return (
    <>
      <AllInputsHistoryTile
        date={checkDay(data.creationTime)}
        time={convertToReadableTime(data.creationTime)}
        onPress={openMenuSheet}
        isLoading={isLoading}
        textComponent={
          <View style={{gap: wp(12)}}>
            <AppText
              text={data.physicalExaminationType?.name}
              type="subtitle_semibold"
              color={'text400'}
              textDecorationLine={'none'}
            />
            {data.physicalExaminationEntryTypeName === 'Suggestion' ? (
              <>
                {data.suggestions?.map(el => (
                  <AppText
                    key={el.headerName}
                    text={[
                      <AppText
                        key={0}
                        text={el.headerName}
                        type="body_2_semibold"
                        color={'text300'}
                        textDecorationLine={'none'}
                      />,
                      ` - ${el.patientPhysicalExamSuggestionAnswers
                        ?.map(elP => elP.description)
                        .join(', ')}`,
                    ]}
                    type="body_2_semibold"
                    color={'text400'}
                  />
                ))}
              </>
            ) : data.physicalExaminationEntryTypeName === 'TypeNote' ? (
              <>
                {data.typeNotes?.map(el => (
                  <AppText
                    key={el.type}
                    text={[
                      <AppText
                        key={0}
                        text={el.type}
                        type="body_2_semibold"
                        color={'text300'}
                        textDecorationLine={'none'}
                      />,
                      ` - ${el.note}`,
                    ]}
                    type="body_2_semibold"
                    color={'text400'}
                  />
                ))}
              </>
            ) : null}
            {data.imageUploaded && (
              <ViewUploadedImagesOnSummary
                patientPhysicalExaminationId={data.id as number}
              />
            )}
          </View>
        }
      />
      <AppMenuSheet
        sheetRef={menuSheetRef}
        closeSheet={closeMenuSheet}
        removeHeader
        renderRightIcon={() => <ArrowRightIcon />}
        menuOptions={menuOptions}
      />
    </>
  );
};

const ViewUploadedImagesOnSummary: FunctionComponent<{
  patientPhysicalExaminationId: number;
}> = ({patientPhysicalExaminationId}) => {
  const {data: dataimages} =
    useApiServicesAppPhysicalexaminationsGetpatientphysicalexaminationuploadedimagesGetQuery(
      {patientPhysicalExaminationId},
    );

  const {handleDeleteImage, isLoading} = useDeletePhysicalExaminationImage();

  const {closeSheet, openSheet, sheetRef} = useSheet();
  return (
    <>
      <AppButton
        text="View images"
        height={32}
        onPress={openSheet}
        // eslint-disable-next-line react-native/no-inline-styles
        containerStyle={{alignSelf: 'flex-start'}}
      />
      <AllInputImageListViewSheet
        sheetRef={sheetRef}
        closeSheet={closeSheet}
        images={(dataimages ?? [])?.map(el => ({
          path: el.fileUrl as string,
          name: el.fileName as string,
          type: 'image/png',
          id: el.id,
        }))}
        isImageDeleting={isLoading}
        onDelete={handleDeleteImage}
        shouldCache
      />
    </>
  );
};
