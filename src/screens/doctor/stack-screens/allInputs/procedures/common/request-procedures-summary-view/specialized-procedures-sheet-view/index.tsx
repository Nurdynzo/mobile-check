import {AppRow, AppText} from '@/components/common';
import {AppTextInput, AppToggleSwitch} from '@/components/inputs';
import {PatientProcedureResponseDto} from '@/state/services/procedureApi';
import {ModalizeSheetRef} from '@/types/sheet';
import React, {useRef, useState} from 'react';
import {TextInput} from 'react-native';
import useSaveSpecializedProcedures from './use-save-specialized-procedures';
import {SearchResultCard} from '@/components/cards';
import DropdownList from '@/components/dropdown-list';
import {showToast} from '@/components/app-toast';
import ProceduresSessionBottomSheetView from '../common/procedures-session-bottom-sheet-view';
import useProceduresSessionForm from '../common/use-procedures-session-form';
import useSearchAnaesthetist from './use-search-anaesthetist';
import {specializedProcedureViewStyles} from './styles';

const SpecializedProceduresSheetView = ({
  item,
  sheetRef,
  closeSheet,
}: {
  item: PatientProcedureResponseDto;
  sheetRef: ModalizeSheetRef | undefined;
  closeSheet: () => void;
}) => {
  const [anaesthetistUserId, setAnaesthetistUserId] = useState<number>();
  const [isAnaesthetistRequired, setIsAnaesthetistRequired] =
    useState<boolean>(false);

  const {selectedProcedures, setSelectedProcedures, handleSave, isLoading} =
    useSaveSpecializedProcedures({
      procedureList: item,
    });

  const formProps = useProceduresSessionForm({
    item,
    selectedProcedures,
    setSelectedProcedures,
  });

  const {isSameSession} = formProps;

  const onSave = () => {
    if (isAnaesthetistRequired && !anaesthetistUserId) {
      showToast('ERROR', {
        title: 'Missing field',
        message: 'Kindly select an anaesthetist to proceed',
      });
      return;
    }
    handleSave({
      isSameSession: isSameSession,
      reset: closeSheet,
      anaesthetistUserId: anaesthetistUserId,
      requireAnaesthetist: isAnaesthetistRequired,
    });
  };

  return (
    <ProceduresSessionBottomSheetView
      sheetRef={sheetRef}
      formProps={formProps}
      headerTitle={'Mark a specialized procedure'}
      isSaving={isLoading}
      onSave={onSave}
      AnaesthetistView={
        <>
          <AppRow>
            <AppText
              type={'body_1_medium'}
              color={'text300'}
              text={'Requires an Anaesthetist?'}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{flex: 1}}
            />
            <AppToggleSwitch
              isOn={isAnaesthetistRequired}
              onToggle={setIsAnaesthetistRequired}
            />
          </AppRow>
          {isAnaesthetistRequired && (
            <SearchBar onSelectAnaesthetist={setAnaesthetistUserId} />
          )}
        </>
      }
    />
  );
};

export default SpecializedProceduresSheetView;

const SearchBar = ({
  onSelectAnaesthetist,
}: {
  onSelectAnaesthetist: (id: number) => void;
}) => {
  const styles = specializedProcedureViewStyles;
  const inputRef = useRef<TextInput>(null);

  const {
    onSearchTextChange,
    filterAnaesthetists,
    anaesthetistSearchTerm,
    showAnaesthetistDropDown,
    isAnaesthetistDataLoading,
    setAnaesthetistSearchTerm,
    setShowAnaesthetistDropDown,
  } = useSearchAnaesthetist();

  return (
    <>
      <AppTextInput
        inputRef={inputRef}
        value={anaesthetistSearchTerm}
        label={'Anaesthetist'}
        placeholder={'Dr Oyetunde'}
        onChangeText={onSearchTextChange}
      />
      <DropdownList
        viewRef={inputRef}
        data={filterAnaesthetists()}
        isLoading={isAnaesthetistDataLoading}
        visible={showAnaesthetistDropDown}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({item: {id, surname, name}}) => {
          const anaesthetistName = `${surname} ${name}`;
          return (
            <SearchResultCard
              containerStyle={styles.result}
              name={anaesthetistName}
              showId={false}
              onPress={() => {
                setShowAnaesthetistDropDown(false);
                setAnaesthetistSearchTerm(anaesthetistName);
                if (id) {
                  onSelectAnaesthetist(id);
                }
              }}
            />
          );
        }}
      />
    </>
  );
};
