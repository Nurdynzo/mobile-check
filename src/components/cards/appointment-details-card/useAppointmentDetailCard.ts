import {useState} from 'react';
import {useColors} from '@/hooks/useColors';
import {useSheet} from '@/hooks/useSheet';
import {logThis} from '@/utils/helpers/logThis';
import {useApiServicesAppUploadreferralletterfilePostMutation} from '@/state/services/customApi';
import {generateRandomText, getErrorMessage} from '@/utils/helpers';
import {AttachReferralLetterSchema} from '../../forms/appointment-form/schema';
import {showToast} from '../../app-toast';

export type ReferralLetter = {
  referralHospital: string;
  diagnosis: string;
  letter: FileReader;
};

export const useAppointmentCard = ({
  appointmentID,
  patientID,
  onReferralUploadSuccess = () => null,
}: {
  appointmentID: number;
  patientID: number;
  onReferralUploadSuccess?: () => void;
}) => {
  const {
    closeSheet: closeDetailsSheet,
    openSheet: openDetailsSheet,
    sheetRef: detailsSheet,
  } = useSheet();
  const {
    closeSheet: closeReferralSheet,
    openSheet: openReferralSheet,
    sheetRef: referalSheet,
  } = useSheet();
  const {
    closeSheet: closeGeneralSheet,
    openSheet: openGeneralSheet,
    sheetRef: generalSheet,
  } = useSheet();
  const {
    closeSheet: closePaperRecordStatusSheet,
    openSheet: openPaperRecordStatusSheet,
    sheetRef: paperRecordStatusSheet,
  } = useSheet();
  const [isFocused, setIsFocused] = useState(false);

  const [
    uploadReferralLetter,
    {
      isLoading: isSendingReferralLetter,
      isError: errorSendingReferralLetter,
      isSuccess: successSendingReferralLetter,
      reset: resetUploadReferralLetterFunc,
    },
  ] = useApiServicesAppUploadreferralletterfilePostMutation();

  const {colors} = useColors();

  //used to the details user want to view.
  const handleCurrentlyViewing = () => {
    closeDetailsSheet();
    openGeneralSheet();
  };

  const saveReferralLetter = async (data: AttachReferralLetterSchema) => {
    if (
      data.referringHospital &&
      data.diagonsis &&
      data.referralLetterImage?.path
    ) {
      try {
        await uploadReferralLetter({
          body: {
            AppointmentId: appointmentID,
            PatientId: patientID,
            File: {
              uri: data?.referralLetterImage?.path,
              type: data?.referralLetterImage?.type,
              name: data?.referralLetterImage?.name ?? generateRandomText(10),
            },
            DiagnosisSummary: data.diagonsis,
            ReferringHealthCareProvider: data.referringHospital,
          },
        }).unwrap();
        closeReferralSheet();
        onReferralUploadSuccess();
        showToast('SUCCESS', {
          title: 'Referral letter upload success',
          message: 'Patient Refferal letter has been added to our records',
        });
        closeReferralSheet();
      } catch (error) {
        logThis('Patient Appointment Referral error===', error);
        showToast('ERROR', {
          title: 'Appointment Referral Error Encountered!',
          message: getErrorMessage(error),
        });
      }
    }
  };

  return {
    detailsSheet,
    closeDetailsSheet,
    generalSheet,
    closeGeneralSheet,
    openGeneralSheet,
    paperRecordStatusSheet,
    closePaperRecordStatusSheet,
    openPaperRecordStatusSheet,
    colors,
    openDetailsSheet,
    closeReferralSheet,
    openReferralSheet,
    isFocused,
    setIsFocused,
    referalSheet,
    handleCurrentlyViewing,
    saveReferralLetter,
    isSendingReferralLetter,
    errorSendingReferralLetter,
    successSendingReferralLetter,
    resetUploadReferralLetterFunc,
  };
};
