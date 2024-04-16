import {RadioBtnEmptyIcon, RadioBtnFilledIcon} from '@/assets/svg';
import AppSelectItemSheet from '@/components/sheets/app-select-item-sheet';
import SliderInput from '@/components/slider-input';
import {useSheet} from '@/hooks/useSheet';
import {
  MeasurementRangeDto,
  MeasurementSiteDto,
} from '@/state/services/vitalSignsApi';
import {EMPTY_STRING} from '@/utils/constants';
import React, {useEffect} from 'react';
import {Control, FieldPath, useController, useWatch} from 'react-hook-form';
import CheckGCS from '../common/check-gcs';
import VitalSignsNumericInput from '../common/vital-signs-numeric-input';
import {AllVitalSignsSchema, VitalSignFormSchema} from '../schema';

/**
 *
 * @param hasBorder boolean, if it should have a divider like a border bottom width
 * @param vitalSignData VitalSignFormSchema, the data of the vital sign
 * @param paths object, contains paths for measurementSite, measurementRange, vitalReading, and position
 * @param control Control<AllVitalSignsSchema>, control object from react-hook-form
 * @param measurementRanges MeasurementRangeDto[], optional, array of measurement ranges
 * @param measurementSites MeasurementSiteDto[], optional, array of measurement sites
 * @param decimalPlaces number | undefined, optional, number of decimal places for the input
 */

const VitalSignView = ({
  vitalSignData,
  hasBorder,
  paths,
  control,
  measurementRanges = [],
  measurementSites = [],
  decimalPlaces,
}: {
  vitalSignData: VitalSignFormSchema;
  hasBorder: boolean;
  measurementRanges?: MeasurementRangeDto[];
  measurementSites?: MeasurementSiteDto[];
  control: Control<AllVitalSignsSchema>;
  decimalPlaces: number | undefined;
  paths: {
    measurementSite: FieldPath<AllVitalSignsSchema>;
    measurementRange: FieldPath<AllVitalSignsSchema>;
    vitalReading: FieldPath<AllVitalSignsSchema>;
    position: FieldPath<AllVitalSignsSchema>;
  };
}) => {
  const {
    sheetRef: siteSheetRef,
    openSheet: openSiteSheet,
    closeSheet: closeSiteSheet,
  } = useSheet();
  const {
    sheetRef: rangeSheetRef,
    openSheet: openRangeSheet,
    closeSheet: closeRangeSheet,
  } = useSheet();

  const {
    field: {value: vitalReadingValue, onChange: vitalReadingOnChange},
    fieldState: {error: vitalReadingError},
  } = useController({name: paths.vitalReading, control});
  const {
    field: {value: measurementRangeValue, onChange: measurementRangeOnChange},
  } = useController({name: paths.measurementRange, control});
  const {
    field: {value: measurementSiteValue, onChange: measurementSiteOnChange},
  } = useController({name: paths.measurementSite, control});
  const {
    field: {value: positionValue, onChange: positionOnChange},
  } = useController({name: paths.position, control});

  const numOfDecimalPlaces =
    measurementRangeValue?.data?.decimalPlaces ?? decimalPlaces;

  return (
    <>
      {vitalSignData.vitalSignName === 'Pain' ? (
        <SliderInput
          title="Pain severity, on a scale of 0-10"
          number={vitalReadingValue}
          getValue={number => vitalReadingOnChange(`${number.toFixed(0)}`)}
        />
      ) : vitalSignData.vitalSignName === 'BMI' ? (
        <BMIVitalSignView control={control} name={paths.vitalReading} />
      ) : (
        <>
          <VitalSignsNumericInput
            title={
              `${vitalSignData.vitalSignName}${
                measurementSiteValue?.value && !measurementSiteValue?.data
                  ? ` - ${measurementSiteValue?.value}`
                  : EMPTY_STRING
              }` as string
            }
            disable={vitalSignData.vitalSignName === 'BMI'}
            unitValue={measurementRangeValue?.value as string}
            hasToggle={!!vitalSignData.position}
            validationError={vitalReadingError?.message}
            hasBorder={hasBorder}
            hasRangeDropDown={measurementRanges?.length > 1}
            hasSitesDropDown={!!measurementSites?.length}
            count={vitalReadingValue}
            onChangeCount={count => vitalReadingOnChange(count)}
            isRightPosition={positionValue === 'RIGHT' ? true : false}
            onTogglePosition={position =>
              positionOnChange(position ? 'RIGHT' : 'LEFT')
            }
            decimalPlaces={numOfDecimalPlaces}
            addSubBy={
              numOfDecimalPlaces ? Math.pow(10, -numOfDecimalPlaces) : 1
            }
            onPressSiteDropDown={openSiteSheet}
            onPressRangeDropDown={openRangeSheet}
            customContent={
              vitalSignData?.vitalSignName === 'GCS' ? (
                <CheckGCS
                  score={vitalReadingValue}
                  onChangeScore={vitalReadingOnChange}
                />
              ) : undefined
            }
          />
        </>
      )}
      <AppSelectItemSheet
        title={`${vitalSignData.vitalSignName}: Measurement site`}
        sheetRef={siteSheetRef}
        closeSheet={closeSiteSheet}
        selectOptions={(measurementSites ?? [])?.map(el => ({
          item: {
            id: el.id as number,
            value: el.site as string,
            data: el.default,
          },
        }))}
        selectedValue={measurementSiteValue?.value}
        renderRightIcon={({isSelected}) =>
          isSelected ? <RadioBtnFilledIcon /> : <RadioBtnEmptyIcon />
        }
        onSelectItem={({item}) => {
          measurementSiteOnChange({
            id: item.id,
            value: item.value,
            data: item.data,
          });
        }}
      />
      <AppSelectItemSheet
        title={`${vitalSignData.vitalSignName}: Measurement unit`}
        sheetRef={rangeSheetRef}
        closeSheet={closeRangeSheet}
        selectOptions={(measurementRanges ?? [])?.map(el => ({
          item: {
            id: el.id as number,
            value: el.unit as string,
            data: el,
          },
        }))}
        selectedValue={measurementRangeValue?.value}
        renderRightIcon={({isSelected}) =>
          isSelected ? <RadioBtnFilledIcon /> : <RadioBtnEmptyIcon />
        }
        onSelectItem={({item}) => {
          measurementRangeOnChange({
            id: item.id,
            value: item.value,
            data: item?.data,
          });
          vitalReadingOnChange(vitalReadingValue);
        }}
      />
    </>
  );
};

export default VitalSignView;

const BMIVitalSignView = ({
  control,
  name,
}: {
  control: Control<AllVitalSignsSchema>;
  name: FieldPath<AllVitalSignsSchema>;
}) => {
  const vitalSigns = useWatch({control, name: 'vitalSigns'});
  const data = vitalSigns.filter(el =>
    ['Height', 'Weight'].includes(el.vitalSignName ?? EMPTY_STRING),
  );

  const heightReading = data.find(
    el => el.vitalSignName === 'Height',
  )?.vitalReading;
  const weightReading = data.find(
    el => el.vitalSignName === 'Weight',
  )?.vitalReading;

  const {
    field: {value: vitalReadingValue, onChange: vitalReadingOnChange},
    fieldState: {error: vitalReadingError},
  } = useController({name, control});

  useEffect(() => {
    const height = Number(heightReading);
    const weight = Number(weightReading);
    const bmi =
      height > 0 ? (weight / Math.pow(height, 2)).toFixed(1) : undefined;

    vitalReadingOnChange(bmi);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [heightReading, weightReading]);

  return (
    <VitalSignsNumericInput
      title={'BMI'}
      disable
      count={vitalReadingValue}
      validationError={vitalReadingError?.message}
    />
  );
};
