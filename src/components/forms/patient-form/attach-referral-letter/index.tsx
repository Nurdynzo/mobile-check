import React, {FunctionComponent} from 'react';
import {addNewPatientFormSchema} from '../schema';
import {Control} from 'react-hook-form';
import {View} from 'react-native';
import {FormFieldController} from '../../form-field-controller';
import {
  ImageFieldControls,
  InputFieldControls,
} from '@/types/formFieldsControls';
import {attachReferralLetterStyles} from './styles';
import {AppTextInput, PdfInput} from '@/components/inputs';

const styles = attachReferralLetterStyles;
const AttachReferralLetter: FunctionComponent<{
  control: Control<addNewPatientFormSchema>;
}> = ({control}) => {
  return (
    <View style={styles.container}>
      <FormFieldController
        name="referringHospital"
        control={control}
        // eslint-disable-next-line react/no-unstable-nested-components
        Field={({onChange, value}: InputFieldControls) => {
          return (
            <AppTextInput
              label="Referring hospital"
              placeholder="Enter referring hospital"
              onChangeText={onChange}
              value={value}
            />
          );
        }}
      />
      <FormFieldController
        name="diagonsis"
        control={control}
        // eslint-disable-next-line react/no-unstable-nested-components
        Field={({onChange, value}: InputFieldControls) => {
          return (
            <AppTextInput
              label="Diagnosis"
              placeholder="Enter diagnosis"
              onChangeText={onChange}
              value={value}
            />
          );
        }}
      />
      <FormFieldController
        name="referralLetterImage"
        control={control}
        // eslint-disable-next-line react/no-unstable-nested-components
        Field={({
          onChange: onChangeImage,
          value: selectedPdf,
        }: ImageFieldControls) => {
          return (
            <PdfInput
              onChangeImage={pdf => {
                if (pdf?.uri) {
                  onChangeImage({
                    path: pdf?.uri,
                    type: pdf?.type,
                    name: pdf.name,
                  });
                }
              }}
              imageSrc={selectedPdf?.path}
            />
          );
        }}
      />
    </View>
  );
};

export default AttachReferralLetter;
