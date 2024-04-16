import {useState} from 'react';
import {useColors} from '../../../hooks/useColors';
import {useSheet} from '../../../hooks/useSheet';

export type detailsType =
  | 'Create invoice'
  | 'Create appointment'
  | 'View appointment info'
  | 'Scan paper records'
  | 'View insurance details'
  | 'View patient profile'
  | 'View Next of Kin'
  | '';

export const useRecordCard = () => {
  const {
    closeSheet: closeDetailsSheet,
    openSheet: openDetailsSheet,
    sheetRef: detailsSheet,
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

  const [currentlyViewing, setCurrentlyViewing] = useState<detailsType>('');

  const {colors} = useColors();

  const handleCurrentlyViewing = (detail: detailsType) => {
    setCurrentlyViewing(detail);
    closeDetailsSheet();
    openGeneralSheet();
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
    handleCurrentlyViewing,
    currentlyViewing,
  };
};
