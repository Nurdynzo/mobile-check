import {AppSelectInput} from '@/components/inputs';
import {useApiServicesAppPhysicalexaminationsGetphysicalexaminationtypesGetQuery} from '@/state/services/physicalExaminationsApi';
import {SelectItem} from '@/types/selectItemsheet';
import React, {FunctionComponent, useEffect} from 'react';
import {ViewStyle} from 'react-native';

const PhysicalExaminationSearchInput: FunctionComponent<{
  style?: ViewStyle;
  value: string | undefined;
  onChangeValue: (value: SelectItem<string>) => void;
}> = ({style, onChangeValue, value}) => {
  const {currentData: typeData, isLoading} =
    useApiServicesAppPhysicalexaminationsGetphysicalexaminationtypesGetQuery();

  useEffect(() => {
    if (typeData?.length) {
      const selectedType = typeData[0];
      onChangeValue({
        id: selectedType.id as number,
        value: selectedType.name as string,
        data: selectedType.type as string,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeData?.[0]]);

  return (
    <AppSelectInput
      value={value}
      placeholder="Examination type"
      isOptionsLoading={isLoading}
      style={style}
      selectOptions={typeData?.map(el => ({
        item: {
          id: el.id as number,
          value: el.name as string,
          data: el.type as string,
        },
      }))}
      onChange={onChangeValue}
      showSearchInput
    />
  );
};

export default PhysicalExaminationSearchInput;
