import {
  DownCaretIcon,
  RadioBtnEmptyIcon,
  RadioBtnFilledIcon,
  RightCaretIcon,
} from '@/assets/svg';
import {AppTouchButton} from '@/components/buttons';
import {AppRow, AppText} from '@/components/common';
import Overlay from '@/components/overlay';
import {AppMenuSheet} from '@/components/sheets';
import {sortByOptions} from '@/constants/doctorLandingScreen';
import * as Constants from '@/constants/index';
import {useColors} from '@/hooks/useColors';
import {useSheet} from '@/hooks/useSheet';
import {hp} from '@/resources/config';
import React, {ReactNode, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {PaymentConfirmationStyles} from '../../styles';
import {EMPTY_STRING} from '@/utils/constants';

const PaymentConfirmationFilter = () => {
  const {
    sheetRef: filterByPaymentSheet,
    openSheet: openfilterByPaymentSheet,
    closeSheet: closefilterByPaymentSheet,
  } = useSheet();
  const {
    sheetRef: filterByItemCategorySheet,
    openSheet: openfilterByItemCategorySheet,
  } = useSheet();
  const {colors} = useColors();

  const styles = PaymentConfirmationStyles({colors});
  const [showOptions, setShowOptions] = useState(false);

  return (
    <>
      <AppTouchButton
        text="Filter by"
        color="text400"
        onPress={() => setShowOptions(true)}
        rightIcon={<DownCaretIcon stroke={colors.text400} />}
      />
      <Overlay
        show={showOptions}
        onOverlayTap={() => setShowOptions(false)}
        shouldUserOverlayContentStyles={false}
        offset={hp(215)}
        children={
          <>
            <View style={styles.dropDown}>
              {Constants.filterOptions.map(({title, value}, index) => (
                <Menu
                  title={title}
                  value={value}
                  key={index}
                  onPress={() => {
                    if (title === 'Payment types') {
                      setShowOptions(false);
                      openfilterByPaymentSheet();
                      return;
                    }
                    if (title === 'Item categories') {
                      setShowOptions(false);
                      openfilterByItemCategorySheet();
                      return;
                    }
                  }}
                />
              ))}
            </View>
          </>
        }
      />
      <AppMenuSheet
        showSearchInput
        title="Filter by payment types"
        sheetRef={filterByPaymentSheet}
        renderRightIcon={({isSelected}) =>
          isSelected ? <RadioBtnFilledIcon /> : <RadioBtnEmptyIcon />
        }
        selectedValue={EMPTY_STRING}
        menuOptions={sortByOptions}
        onSelectItem={() => {
          closefilterByPaymentSheet();
        }}
      />
      <AppMenuSheet
        title="Filter by item category"
        sheetRef={filterByItemCategorySheet}
        renderRightIcon={({isSelected}) =>
          isSelected ? <RadioBtnFilledIcon /> : <RadioBtnEmptyIcon />
        }
        selectedValue={EMPTY_STRING}
        menuOptions={sortByOptions}
        onSelectItem={() => {
          closefilterByPaymentSheet();
        }}
      />
    </>
  );
};

export default PaymentConfirmationFilter;

const Menu = ({
  onPress,
  title = 'title',
  value = 'value',
  icon,
}: {
  onPress?: () => void;
  title: string;
  value: string;
  icon?: ReactNode;
}) => {
  const {colors} = useColors();
  const styles = PaymentConfirmationStyles({colors});

  return (
    <TouchableOpacity onPress={onPress}>
      <AppRow>
        <View style={styles.menu}>
          <AppText
            type="body_1_semibold"
            color={'text400'}
            text={title}
            align={'left'}
          />
          <AppText
            type="caption_medium"
            color={'text300'}
            text={value}
            align={'left'}
          />
        </View>
        {icon || <RightCaretIcon stroke={colors.text300} />}
      </AppRow>
    </TouchableOpacity>
  );
};
