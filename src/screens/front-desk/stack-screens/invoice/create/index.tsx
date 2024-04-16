import AppScreen from '@/components/app-screen';
import {showToast} from '@/components/app-toast';
import {AppButton} from '@/components/buttons';
import PatientInfoCard from '@/components/cards/Patients/patient-info-card';
import {AppLoading} from '@/components/common';
import {FormFieldController} from '@/components/forms/form-field-controller';
import {AppHeader} from '@/components/headers';
import {
  AppButtonInput,
  AppSelectInput,
  AppToggleSwitch,
} from '@/components/inputs';
import {useColors} from '@/hooks/useColors';
import {useResponseHandler} from '@/hooks/useResponseHandler';
import {routesNames} from '@/navigation/routes';
import {GeneralScreenProps} from '@/navigation/types';
import {
  PaymentTypes,
  useApiServicesAppInvoicesGenerateinvoicecodeGetQuery,
} from '@/state/services/invoiceApi';
import {useApiServicesAppInvoicesCreatenewinvoicePostMutation} from '@/state/services/overrides';
import {useApiServicesAppPatientsGetpatientdetailsGetQuery} from '@/state/services/patientApi';
import {getErrorMessage} from '@/utils/helpers';
import {
  convertToReadableDate,
  convertToReadableTime,
  getTodaysDate,
} from '@/utils/helpers/convertDateTime';
import {logThis} from '@/utils/helpers/logThis';
import {NOT_AVAILABLE} from '@/utils/index';
import {zodResolver} from '@hookform/resolvers/zod';
import React, {FunctionComponent, useState} from 'react';
import {useFieldArray, useForm, useWatch} from 'react-hook-form';
import {View} from 'react-native';
import {
  AddItemForm,
  InvoiceCard,
  InvoiceStatus,
  SelectedItems,
  TotalSummaryCard,
} from '../common';
import {defaultValues} from '../defaultValues';
import {createAppointmentSchema} from '../schema';
import {invoiceStyles} from '../styles';

type onCreateInvoiceSubmit = {
  data: createAppointmentSchema;
  type: 'save_and_close' | 'service_on_credit' | 'continue_to_pay' | 'update';
  reset: () => void;
};

const CreateInvoice: FunctionComponent<
  GeneralScreenProps<'FD_CREATE_INVOICE'>
> = ({navigation, route}) => {
  const {params} = route || {};
  const {appointment, patientId} = params || {};

  const {data: patientDetails} =
    useApiServicesAppPatientsGetpatientdetailsGetQuery({patientId});

  const [isLoading, setIsLoading] = useState(false);
  const {
    handleSubmit,
    control,
    reset: formReset,
  } = useForm<createAppointmentSchema>({
    defaultValues,
    resolver: zodResolver(createAppointmentSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });
  const {fields, append, remove} = useFieldArray({
    control,
    name: 'items',
  });

  const isServiceOnCredit = useWatch({control, name: 'isServiceOnCredit'});

  const {colors} = useColors();
  const styles = invoiceStyles({colors});

  const {data: generatedInvoice} =
    useApiServicesAppInvoicesGenerateinvoicecodeGetQuery(undefined, {
      refetchOnMountOrArgChange: true,
    });

  const [
    createNewInvoice,
    {isError, isSuccess, error: createInvoiceError, reset: createInvoiceReset},
  ] = useApiServicesAppInvoicesCreatenewinvoicePostMutation();

  useResponseHandler({
    success: {
      value: isSuccess,
      trigger: () => {
        showToast('SUCCESS', {
          title: 'Create Invoice success',
          message: `${patientDetails?.fullName} created invoice has been added to records`,
        });
      },
    },
    error: {
      value: isError,
      trigger: () => {
        showToast('ERROR', {
          title: 'Create Invoice Error encounted!',
          message: getErrorMessage(createInvoiceError),
        });
      },
    },
    reset: createInvoiceReset,
  });

  const totalDiscountAmount = fields.reduce((total, {type, quantity}) => {
    const amount = type?.data?.amount?.amount ?? 0;
    const qty = quantity?.data ?? 0;
    const discount = type?.data?.discountPercentage ?? 0;
    return amount * qty * (discount / 100) + total;
  }, 0);
  const totalAmount =
    fields.reduce((total, {type, quantity}) => {
      const amount = type?.data?.amount?.amount ?? 0;
      const qty = quantity?.data ?? 0;
      return amount * qty + total;
    }, 0) - totalDiscountAmount;

  const onSubmit = async (props: onCreateInvoiceSubmit) => {
    setIsLoading(true);
    const {data, reset, type} = props;
    const itemsPayload = data.items.map(
      ({type: {data: typeData}, quantity}) => {
        const {name, amount, discountPercentage, isGlobal} = typeData;
        const qty = quantity.data;
        const itemTotal = amount.amount * qty;
        const itemTotalDiscount = itemTotal * (discountPercentage / 100);

        const subTotalAmount = parseFloat(
          Number(itemTotal - itemTotalDiscount).toFixed(2),
        );

        return {
          name,
          quantity: qty,
          unitPrice: amount,
          subTotal: {
            amount: subTotalAmount,
            currency: amount.currency,
          },
          discountPercentage,
          isGlobal,
          isDeleted: false,
          id: null,
        };
      },
    );

    if (generatedInvoice && patientDetails?.id) {
      try {
        await createNewInvoice({
          createNewInvoiceCommand: {
            items: itemsPayload,
            isServiceOnCredit: data.isServiceOnCredit,
            invoiceNo: generatedInvoice,
            paymentType: 'Wallet' as PaymentTypes,
            patientId: patientDetails?.id,
            appointmentId: appointment?.id,
            totalAmount: {
              amount: parseFloat(Number(totalAmount).toFixed(2)),
              currency: 'NGN',
            },
          },
        }).unwrap();

        if (type === 'continue_to_pay') {
          navigation.navigate(routesNames.FRONT_DESK.FD_PAY_INVOICE);
        } else {
          navigation.goBack();
        }
        reset();
      } catch (error: unknown) {
        logThis('create Invoice error', getErrorMessage(error));
      } finally {
        setIsLoading(false);
      }
    }
  };

  const generatedInvoiceDateTime = getTodaysDate();

  return (
    <AppScreen
      ScreenHeader={
        <>
          <AppHeader middleTitle="Create invoice" />
          <InvoiceCard
            number={generatedInvoice ? generatedInvoice : 'generating...'}
            date={convertToReadableDate(generatedInvoiceDateTime, 'DD MMM YY')}
            time={convertToReadableTime(generatedInvoiceDateTime)}
            walletBal={NOT_AVAILABLE}
            isbalanceSufficient={isServiceOnCredit}
          />
        </>
      }>
      <AppLoading isLoading={isLoading} />
      <View style={styles.screenContainer}>
        <PatientInfoCard
          fullName={patientDetails?.fullName ?? NOT_AVAILABLE}
          code={patientDetails?.patientCode ?? NOT_AVAILABLE}
          dateOfBirth={patientDetails?.dateOfBirth}
          gender={patientDetails?.gender ?? NOT_AVAILABLE}
          // avatar={patientDetails} //TODO(Franklyn) till i find a way to get patient profile
        />
        <AppButtonInput
          label="Appointment"
          buttonColor="primary50"
          value={`${appointment?.type} | ${appointment?.title} | ${appointment?.time}`}
        />

        <FormFieldController
          name={'paymentMode'}
          control={control}
          // eslint-disable-next-line react/no-unstable-nested-components
          Field={({onChange, value}) => {
            return (
              <AppSelectInput
                label="Payment mode"
                placeholder="Select payment mode"
                onChange={item => onChange(item?.value)}
                value={value}
                disabled
                selectOptions={[
                  {item: {id: '1', value: 'Wallet'}},
                  {item: {id: '2', value: 'Split payment'}},
                  {item: {id: '3', value: 'Reliance Ins'}},
                  {item: {id: '4', value: 'AXA Mansard Ins'}},
                ]}
              />
            );
          }}
        />
        <AddItemForm onAddItemSubmit={values => append(values)} />
        <FormFieldController
          name={'items'}
          control={control}
          // eslint-disable-next-line react/no-unstable-nested-components
          Field={() => {
            return <SelectedItems fields={fields} onRemove={remove} />;
          }}
        />
        <TotalSummaryCard
          currencySymbool="₦"
          totalDiscount={totalDiscountAmount}
          total={totalAmount}
        />
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
        <InvoiceStatus status="Issued" fullname="Akpoipodion F." />
        <AppButton
          text={'Continue to Pay'}
          isDisabled={isServiceOnCredit}
          onPress={() =>
            showToast('ERROR', {
              title: 'Insufficient fund',
              message: 'Patient wallet balance is insufficient for payment.',
            })
          }
          // TODO(Franklyn) will work on it when pay endpoint is ready
          // onPress={handleSubmit(data =>
          //   onSubmit({
          //     data,
          //     reset: formReset,
          //     type: 'continue_to_pay',
          //   }),
          // )}
          containerStyle={styles.createAppointBtn}
        />
        <AppButton
          text={isServiceOnCredit ? 'Service on credit' : 'Save & close'}
          borderWidth={1}
          onPress={handleSubmit(data =>
            onSubmit({
              data,
              reset: formReset,
              type: isServiceOnCredit ? 'service_on_credit' : 'save_and_close',
            }),
          )}
          buttonColor={'white'}
          textColor="primary400"
        />
      </View>
    </AppScreen>
  );
};

export default CreateInvoice;
