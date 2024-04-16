import {
  AttachIcon,
  MoreVerticalIcon,
  OpenEyeIcon,
  RightCaretIcon,
} from '@/assets/svg';
import {AppButton} from '@/components/buttons';
import {AppRow, AppText} from '@/components/common';
import {
  AttachReferralLetterSchema,
  attachReferralLetterSchema,
} from '@/components/forms/appointment-form/schema';
import {FormFieldController} from '@/components/forms/form-field-controller';
import {AppTextInput, PdfInput} from '@/components/inputs';
import {AppContentSheet, AppMenuSheet} from '@/components/sheets';
import {AppointmentStatus} from '@/components/cards/statues';
import {routesNames} from '@/navigation/routes';
import {GeneralNavProp} from '@/navigation/types';
import {ImageFieldControls} from '@/types/formFieldsControls';
import {MenuOptionsProp} from '@/types/menusheet';
import {EMPTY_STRING, NOT_AVAILABLE} from '@/utils/constants';
import {logThis} from '@/utils/helpers/logThis';
import {zodResolver} from '@hookform/resolvers/zod';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useForm} from 'react-hook-form';
import {TouchableOpacity, View} from 'react-native';
import {RecordRow, StatusLabel} from '../index';
import {detailsType} from '../record-card/useRecordCard';
import {appointmentDetailsCardStyles} from './styles';
import {AppointmentCardProps} from './type';
import {useAppointmentCard} from './useAppointmentDetailCard';

export type customOptionType = {
  title: detailsType;
  action?: () => void;
  id?: string;
};

const AppointmentCardDetails = ({
  clinician = NOT_AVAILABLE,
  clinicName = NOT_AVAILABLE,
  date = NOT_AVAILABLE,
  title = NOT_AVAILABLE,
  time = NOT_AVAILABLE,
  note = NOT_AVAILABLE,
  onPressDelete = () => null,
  onPressSetReminder = () => null,
  onPressEdit = () => null,
  appointmentID,
  patientID,
  referralLetter,
  onReferralUploadSuccess,
  status,
  onCreateInvoice,
  showHeaderTitle = false,
  removeMoreBtn,
}: AppointmentCardProps) => {
  const {
    generalSheet,
    openGeneralSheet,
    closeGeneralSheet,
    openReferralSheet,
    referalSheet,
    setIsFocused,
    colors,
    saveReferralLetter,
    isSendingReferralLetter,
  } = useAppointmentCard({appointmentID, patientID, onReferralUploadSuccess});
  const navigation = useNavigation<GeneralNavProp>();
  const defaultValues: Omit<AttachReferralLetterSchema, 'referralLetterImage'> =
    {
      referringHospital: EMPTY_STRING,
      diagonsis: EMPTY_STRING,
    };

  const {handleSubmit, control} = useForm<AttachReferralLetterSchema>({
    defaultValues,
    resolver: zodResolver(attachReferralLetterSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const styles = appointmentDetailsCardStyles({colors});

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const action = (action: () => void) => {
    action();
    closeGeneralSheet();
  };

  const detailsOptions: MenuOptionsProp = [
    {
      value: 'Set reminder',
      onPress: () => action(onPressSetReminder),
      id: 'option-1',
    },
    ...(['Not arrived', 'Processing'].includes(status || '')
      ? [
          {
            value: 'Delete appointment',
            onPress: () => action(onPressDelete),
            id: 'option-3',
          },
          {
            value: 'Edit appointment',
            onPress: () => action(onPressEdit),
            id: 'option-2',
          },
        ]
      : []),
  ];

  return (
    <>
      <View style={styles.wrapper}>
        {!removeMoreBtn && (
          <TouchableOpacity onPress={openGeneralSheet} style={styles.more}>
            <MoreVerticalIcon stroke={colors.black} />
          </TouchableOpacity>
        )}
        <View style={styles.generalRowWrapper}>
          <View style={[styles.generalRowContainer, styles.card]}>
            {showHeaderTitle && (
              <AppText text="Appointment details" type="title_semibold" />
            )}
            <AppRow alignItems="flex-start">
              <RecordRow detail="Title">
                <AppText color="text400" type="label_semibold" text={title} />
              </RecordRow>
              <RecordRow detail="Date">
                <AppText color="text400" type="body_2_semibold" text={date} />
              </RecordRow>
            </AppRow>
            <AppRow alignItems="flex-start">
              <RecordRow detail="Status">
                <AppointmentStatus status={status} />
              </RecordRow>
              <RecordRow detail="Time">
                <AppText color="text400" type="body_2_semibold" text={time} />
              </RecordRow>
            </AppRow>
            <AppRow alignItems="flex-start">
              <RecordRow detail="Clinic">
                <AppText
                  color="text400"
                  type="label_semibold"
                  text={clinicName}
                />
              </RecordRow>
              <RecordRow detail="Clinician">
                <AppText
                  color="text400"
                  type="body_2_semibold"
                  text={clinician}
                />
              </RecordRow>
            </AppRow>
            <AppRow alignItems="flex-start">
              <RecordRow
                detail="Referral letter"
                value={!referralLetter ? 'No referral letter' : undefined}>
                <StatusLabel
                  onPressStatusLabel={() => {
                    if (!referralLetter) {
                      openReferralSheet();
                    } else {
                      navigation.navigate(
                        routesNames.FRONT_DESK.FD_VIEW_REFERRAL_LETTER,
                        {docId: referralLetter},
                      );
                    }
                  }}
                  textType="button_semibold"
                  text={!referralLetter ? 'Attach letter' : 'View Letter'}
                  color="primary400"
                  leftIcon={
                    !referralLetter ? (
                      <AttachIcon />
                    ) : (
                      <OpenEyeIcon fill={colors.primary400} />
                    )
                  }
                  bg={'transparent'}
                  style={styles.referralLetter}
                />
              </RecordRow>
              <RecordRow detail="Note">
                <AppText
                  color="text400"
                  type="body_2_semibold"
                  text={note || NOT_AVAILABLE}
                  numberOfLines={2}
                />
              </RecordRow>
            </AppRow>
          </View>
        </View>
        <View style={styles.bottomPane}>
          <AppButton onPress={onCreateInvoice} text="Create invoice" />
        </View>
      </View>

      <AppMenuSheet
        menuOptions={detailsOptions}
        removeHeader
        sheetRef={generalSheet}
        renderRightIcon={() => <RightCaretIcon stroke={colors.text400} />}
      />

      <AppContentSheet
        sheetRef={referalSheet}
        headerTitle="Attach referral letter"
        onOpen={() => setIsFocused(true)}
        onClose={() => setIsFocused(false)}>
        <View style={styles.formContainer}>
          <FormFieldController
            name={'referringHospital'}
            control={control}
            // eslint-disable-next-line react/no-unstable-nested-components
            Field={({onChange, value}) => {
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
            name={'diagonsis'}
            control={control}
            // eslint-disable-next-line react/no-unstable-nested-components
            Field={({onChange, value}) => {
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
            name={'referralLetterImage'}
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

          <AppButton
            isLoading={isSendingReferralLetter}
            isDisabled={isSendingReferralLetter}
            onPress={handleSubmit(saveReferralLetter, error => {
              logThis(error);
            })}
            text="Save"
          />
        </View>
      </AppContentSheet>
    </>
  );
};

export default AppointmentCardDetails;
