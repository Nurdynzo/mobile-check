import {zodResolver} from '@hookform/resolvers/zod';
import React, {FunctionComponent} from 'react';
import {useFieldArray, useForm, useWatch} from 'react-hook-form';
import {View} from 'react-native';
import {ExclaimationIcon, TickIcon} from '@/assets/svg';
import AnimatedBubble from '@/components/animated-bubble';
import AppScreen from '@/components/app-screen';
import {AppButton} from '@/components/buttons';
import PatientInfoCard from '@/components/cards/Patients/patient-info-card';
import TotalSummaryCard from '@/components/cards/total-summary-card';
import {AppAlert, AppText} from '@/components/common';
import {FormFieldController} from '@/components/forms/form-field-controller';
import {AppHeader} from '@/components/headers';
import {AppButtonInput} from '@/components/inputs';
import AppToggleSwitch from '@/components/inputs/app-toggle-switch';
import {AppContentSheet} from '@/components/sheets';
import {useColors} from '@/hooks/useColors';
import {useSheet} from '@/hooks/useSheet';
import InvoiceCard from '../common/invoice-card';
import InvoiceStatus from '../common/invoice-status';
import SelectedItems from '../common/selected-item';
import {defaultValues} from '../defaultValues';
import {createAppointmentSchema} from '../schema';
import {invoiceStyles} from '../styles';
import {GeneralScreenProps} from '@/navigation/types';

const PayInvoice: FunctionComponent<
  GeneralScreenProps<'FD_PAY_INVOICE'>
> = () => {
  const {control} = useForm<createAppointmentSchema>({
    defaultValues,
    resolver: zodResolver(createAppointmentSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });
  const {fields, remove} = useFieldArray({
    control,
    name: 'items',
  });

  const {
    closeSheet: closePaySheet,
    openSheet: openPaySheet,
    sheetRef: paySheetRef,
  } = useSheet();
  const {
    closeSheet: closeAlertSheet,
    openSheet: openAlertSheet,
    sheetRef: AlertSheetRef,
  } = useSheet();

  const isServiceOnCredit = useWatch({control, name: 'isServiceOnCredit'});

  const {colors} = useColors();
  const styles = invoiceStyles({colors});

  return (
    <AppScreen
      ScreenHeader={
        <>
          <AppHeader middleTitle="Pay invoice" />
          <InvoiceCard
            number={'29307'}
            date="06 Feb 2023"
            time="09:00 AM"
            walletBal="___"
            isbalanceSufficient={isServiceOnCredit}
          />
        </>
      }>
      <View style={styles.screenContainer}>
        <PatientInfoCard
          fullName="Natasha Kerrington"
          code="HOSP1000808"
          dateOfBirth="2023-08-25T10:15:30.000Z"
          gender="Female"
        />
        <AppButtonInput
          label="Appointment"
          buttonColor="primary50"
          value={'New appointment | Walk-in, Neurology | 09:00AM, Today'}
        />

        <AppButtonInput
          label="Payment mode"
          buttonColor="primary50"
          value={'Wallet'}
        />

        <FormFieldController
          name={'items'}
          control={control}
          // eslint-disable-next-line react/no-unstable-nested-components
          Field={() => {
            return <SelectedItems fields={fields} onRemove={remove} />;
          }}
        />
        <TotalSummaryCard total={0} currencySymbool="₦" totalDiscount={0} />

        <FormFieldController
          name={'isServiceOnCredit'}
          control={control}
          // eslint-disable-next-line react/no-unstable-nested-components
          Field={({onChange, value}) => {
            return (
              <AppToggleSwitch
                isOn={value}
                labelPosition="left"
                onColor={'primary400'}
                label="Service on credit"
                useNativeDriver={true}
                labelStyle={styles.flex1}
                offColor="neutral100"
                onToggle={isOn => onChange(isOn)}
              />
            );
          }}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <InvoiceStatus status="Paid" fullname="Akpoipodion F." />
        <AppButton
          text={'Pay invoice'}
          onPress={openPaySheet}
          isDisabled={isServiceOnCredit}
          containerStyle={styles.createAppointBtn}
        />
        {isServiceOnCredit && (
          <AppButton
            text={'Service on credit'}
            borderWidth={1}
            // onPress={handleSubmit(submit)}
            buttonColor={'white'}
            textColor="primary400"
          />
        )}
      </View>

      <AppContentSheet
        headerTitle="Confirmation"
        isScrollable={false}
        HeaderRightContent={<ExclaimationIcon />}
        sheetRef={paySheetRef}>
        <View style={styles.paySheetContainer}>
          <View style={styles.payNotice}>
            <AppText
              text="You are about to pay this invoice"
              type="body_1_medium"
              color="black"
            />
            <AppText
              text="Do you wish to proceed?"
              type="body_1_medium"
              color="text300"
            />
          </View>

          <View style={styles.payBtnsContainer}>
            <AppButton
              text="Cancel"
              containerStyle={styles.flex1}
              buttonColor="white"
              textColor="primary400"
            />
            <AppButton
              text="Proceed"
              containerStyle={styles.flex1}
              onPress={() => {
                closePaySheet();
                openAlertSheet();
              }}
            />
          </View>
        </View>
      </AppContentSheet>
      <AppContentSheet removeHeader sheetRef={AlertSheetRef}>
        <AppAlert
          title="Payment Successful!"
          icon={
            <AnimatedBubble
              bgColor="success25"
              size={90}
              Icon={
                <View style={styles.successIcon}>
                  <TickIcon width={36} height={36} />
                </View>
              }
            />
          }
          description="The invoice 29307 has been paid successfully"
          buttonText="Return to home"
          containerStyle={styles.alertSheetContainer}
          onPress={closeAlertSheet}
        />
      </AppContentSheet>
    </AppScreen>
  );
};

export default PayInvoice;
