import AppActivityIndicator from '@/components/app-activity-indicator';
import {useColors} from '@/hooks/useColors';
import {zodResolver} from '@hookform/resolvers/zod';
import React, {FunctionComponent, useEffect, useRef, useState} from 'react';
import {Control, useForm} from 'react-hook-form';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import AppButton from '../../buttons/app-button';
import {AppText} from '../../common';
import {ScrollableTab} from '../../tabs';
import AttachReferralLetter from './attach-referral-letter';
import {addNewPatientFormDefaultValues} from './defaultValues';
import InsuranceProviderDetails from './insurance-provider-details';
import OtherPersonalDetails from './other-personal-details';
import {GuardianDetails, NextofKinDetails} from './patient-relatives';
import PersonalDetails from './personal-details';
import {addNewPatientFormSchema} from './schema';
import {addNewPatientStyles} from './styles';
import {PatientFormProps} from './types';

const PatientForm: FunctionComponent<PatientFormProps> = props => {
  const {onSubmit, formType} = props;
  let defaultValues: addNewPatientFormSchema | undefined;
  let isUpdatingForm: boolean = false;
  if (formType === 'update') {
    defaultValues = props.defaultValues;
    isUpdatingForm = props.isUpdatingForm;
  }
  const [currentForm, setCurrentForm] = useState(0);
  const isCreateForm = formType === 'create';
  const {colors} = useColors();
  const styles = addNewPatientStyles({
    currentForm,
    lastIndex: formTabs.length - 1,
    colors,
  });

  const {handleSubmit, control, reset} = useForm<addNewPatientFormSchema>({
    defaultValues: addNewPatientFormDefaultValues,
    values: defaultValues,
    resolver: zodResolver(addNewPatientFormSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const scrollRef = useRef<ScrollView | null>(null);

  useEffect(() => {
    scrollRef?.current?.scrollTo({
      animated: true,
      y: 0,
    });
  }, [currentForm]);

  const {FormView, nextFormButtonLabel} = formTabs[currentForm];

  return (
    <View style={styles.container}>
      <View style={styles.screenTitle}>
        <AppText
          text="Fill in the patient information in the fields provided below"
          type="subtitle_medium"
          color="text300"
        />
      </View>
      <ScrollableTab
        style={styles.formTab}
        tabs={formTabs.map(el => el.title)}
        currentIndex={currentForm}
        onPress={index => setCurrentForm(index)}
      />
      <View style={styles.container}>
        <ScrollView
          ref={scrollRef}
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}>
          <View style={styles.formViewContainer}>
            <FormView control={control} isCreateForm={isCreateForm} />
          </View>
          <View style={styles.buttonsContainer}>
            {nextFormButtonLabel && (
              <AppButton
                text={nextFormButtonLabel}
                onPress={() => setCurrentForm(num => num + 1)}
                buttonColor="text50"
                textColor="primary400"
              />
            )}

            <AppButton
              text={isCreateForm ? 'Create appointment' : 'Update information'}
              containerStyle={styles.createAppointBtn}
              onPress={handleSubmit(data =>
                onSubmit({
                  data,
                  reset,
                  type: isCreateForm
                    ? 'create_appointment'
                    : 'update_information',
                }),
              )}
            />

            {isCreateForm && (
              <AppButton
                text={'Save & close'}
                onPress={handleSubmit(data =>
                  onSubmit({data, reset, type: 'save_and_close'}),
                )}
                borderWidth={1}
                buttonColor={'white'}
                textColor="primary400"
              />
            )}
          </View>
        </ScrollView>
        {isUpdatingForm && (
          <View style={styles.overlayContainer}>
            <AppActivityIndicator color="white" />
          </View>
        )}
      </View>
    </View>
  );
};

export default PatientForm;

type DemographicFormType = {
  title: string;
  nextFormButtonLabel?: string;
  FormView: FunctionComponent<{
    control: Control<addNewPatientFormSchema>;
    isCreateForm: boolean;
  }>;
};

const formTabs: DemographicFormType[] = [
  {
    title: 'Personal details',
    FormView: PersonalDetails,
    nextFormButtonLabel: 'Proceed to Other personal details',
  },
  {
    title: 'Other personal details',
    FormView: OtherPersonalDetails,
    nextFormButtonLabel: 'Proceed to Next of kin details',
  },
  {
    title: 'Next of kin details',
    FormView: NextofKinDetails,
    nextFormButtonLabel: 'Proceed to Guardian details',
  },
  {
    title: 'Guardian details',
    FormView: GuardianDetails,
    nextFormButtonLabel: 'Proceed to Insurance provider details',
  },
  {
    title: 'Insurance provider details',
    FormView: InsuranceProviderDetails,
    nextFormButtonLabel: 'Proceed to Attach referral letter',
  },
  {
    title: 'Attach referral letter',
    FormView: AttachReferralLetter,
  },
];
