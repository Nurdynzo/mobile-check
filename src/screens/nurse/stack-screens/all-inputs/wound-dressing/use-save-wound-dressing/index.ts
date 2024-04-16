import {showToast} from '@/components/app-toast';
import {SnowstormSimpleResponseDto} from '@/state/services/snowstorm';
import {useApiServicesAppWounddressingCreatewounddressingPostMutation} from '@/state/services/woundDressingApi';

export const useSaveWoundDressing = ({
  encounterId,
  patientId,
  successCallback = () => null,
}: {
  encounterId: number;
  patientId: number;
  successCallback?: () => void;
}) => {
  const [
    saveWoundDressing,
    {
      isLoading: isSavingWoundDressing,
      isError: woundDressingError,
      isSuccess: woundDressingSuccess,
      data: woundDressingData,
    },
  ] = useApiServicesAppWounddressingCreatewounddressingPostMutation();

  const extractIds = (extractIds: Array<SnowstormSimpleResponseDto>) => {
    return extractIds.map(item => item.name /* id */);
  };

  const handleSaveWoundDressing = async (
    woundDressingSnowmedIds: Array<SnowstormSimpleResponseDto>,
  ) => {
    const woundDressings = extractIds(woundDressingSnowmedIds);
    const payload = {
      encounterId,
      patientId,
      description: '',
      stamp: 0,
      woundDressingSnowmedIds: woundDressings as string[],
    };

    await saveWoundDressing({
      createWoundDressingDto: {...payload},
    }).unwrap();

    showToast('SUCCESS', {
      title: 'Successful!',
      message: 'Successfully added wound dressing!',
    });
    successCallback();
  };

  return {
    handleSaveWoundDressing,
    isSavingWoundDressing,
    woundDressingError,
    woundDressingSuccess,
    woundDressingData,
  };
};
