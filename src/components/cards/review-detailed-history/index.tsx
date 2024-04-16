import React, {FunctionComponent} from 'react';
import {PatientDetailsProps} from './types';
import {View} from 'react-native';
import {reviewDetailHistoryStyles} from './styles';
import LabelValueText from '../../common/label-value-text';
import {useApiServicesAppRegionsGetregionforeditGetQuery} from '@/state/services/regionsApi';
import {useApiServicesAppDistrictGetdistrictforeditGetQuery} from '@/state/services/districtApi';
import {useApiServicesAppCountriesGetcountryforeditGetQuery} from '@/state/services/countryApi';
import AnimatedBubble from '@/components/animated-bubble';
import {UsersIcon} from '@/assets/svg';
import {useColors} from '@/hooks/useColors';
import {AppAlert, AppRow, AppSeperator, AppText} from '@/components/common';
import {useApiServicesAppOccupationGetoccupationsGetQuery} from '@/state/services/occupationApi';
import {NOT_AVAILABLE} from '@/utils/constants';
import AlertBubbleIconWrapper from '@/components/alert-bubble-icon-wrapper';

const ReviewDetailedHistoryCard: FunctionComponent<
  PatientDetailsProps
> = probs => {
  const {colors} = useColors();
  const styles = reviewDetailHistoryStyles({colors});

  const {data: counrtry} = useApiServicesAppCountriesGetcountryforeditGetQuery({
    id: probs?.countryId as number,
  });

  const {data: stateOfOrigin} =
    useApiServicesAppRegionsGetregionforeditGetQuery({
      id: probs.stateOfOriginId as number,
    });

  const {data: lga} = useApiServicesAppDistrictGetdistrictforeditGetQuery({
    id: probs.lgaOfOriginId as number,
  });

  const {data: occupations} =
    useApiServicesAppOccupationGetoccupationsGetQuery();

  return (
    <View style={styles.container}>
      {probs.Header}
      <AppRow alignItems="flex-start">
        <LabelValueText label={'Full name'} value={probs.fullName} />
        <LabelValueText label={'Date of Birth'} value={probs?.dob} />
      </AppRow>
      <AppRow alignItems="flex-start">
        <LabelValueText label={'Phone number'} value={probs?.phoneNumber} />
        <LabelValueText label={'Patient ID'} value={probs?.patientCode} />
      </AppRow>
      <AppRow alignItems="flex-start">
        <LabelValueText
          label={'Marital status'}
          value={probs?.maritalStatus || NOT_AVAILABLE}
        />
        <LabelValueText label={'Gender'} value={probs?.gender} />
      </AppRow>
      <LabelValueText
        label={'Address'}
        value={probs?.address || NOT_AVAILABLE}
      />
      <AppRow alignItems="flex-start">
        <LabelValueText
          label={'Email address'}
          value={probs?.emailAddress || NOT_AVAILABLE}
        />
        <LabelValueText
          label={'Govt issued ID'}
          value={probs?.govtIssuedId || NOT_AVAILABLE}
        />
      </AppRow>
      <AppRow alignItems="flex-start">
        <LabelValueText
          label={'Nationality'}
          value={counrtry?.country?.name || NOT_AVAILABLE}
        />
        <LabelValueText
          label={'State of origin'}
          value={stateOfOrigin?.region?.name || NOT_AVAILABLE}
        />
      </AppRow>
      <AppRow alignItems="flex-start">
        <LabelValueText
          label={'LGA of origin'}
          value={lga?.district?.name || NOT_AVAILABLE}
        />
        <LabelValueText
          label={'Occupation'}
          value={
            occupations?.find(el => el.id === probs.occupationId)?.name ??
            NOT_AVAILABLE
          }
        />
      </AppRow>
      {probs.otherDetails && (
        <>
          <LabelValueText
            label={'Work location'}
            value={probs.otherDetails.workLocation ?? NOT_AVAILABLE}
          />
          <AppRow alignItems="flex-start">
            <LabelValueText
              label={'Blood group'}
              value={probs.otherDetails.bloodGroup ?? NOT_AVAILABLE}
            />
            <LabelValueText
              label={'Genotype'}
              value={probs.otherDetails.genoType ?? NOT_AVAILABLE}
            />
          </AppRow>
          <AppRow alignItems="flex-start">
            <LabelValueText
              label={'Ethnicity'}
              value={probs.otherDetails.ethnicity ?? NOT_AVAILABLE}
            />
            <LabelValueText
              label={'Religion'}
              value={probs.otherDetails.religion ?? NOT_AVAILABLE}
            />
          </AppRow>
        </>
      )}
      {probs.familyHistory && (
        <>
          <AppSeperator style={styles.seperator} />
          <AppText text="Family History" type="subtitle_semibold" />

          {Object.values(probs?.familyHistory ?? {}).some(el => !!el) ? (
            <>
              <AppRow alignItems="flex-start">
                <LabelValueText
                  label={'No. of spouse(s)'}
                  value={probs?.familyHistory?.noOfSpouses || 0}
                />
                <LabelValueText
                  label={'Position in family'}
                  value={
                    probs?.familyHistory?.positionInFamily || NOT_AVAILABLE
                  }
                />
              </AppRow>
              <LabelValueText
                label={'Nuclear family size'}
                value={probs?.familyHistory?.nuclearFamilySize || 0}
              />

              <AppText
                text="Number of children"
                type="subtitle_semibold"
                color="text300"
              />
              <AppRow alignItems="flex-end">
                <LabelValueText
                  label={'No. of males'}
                  value={probs?.familyHistory?.noOfMaleChildren || 0}
                />
                <LabelValueText
                  label={'No. of females'}
                  value={probs?.familyHistory?.noOfFemaleChildren || 0}
                />
                <LabelValueText
                  label={'Total'}
                  value={probs?.familyHistory?.totalChildren || 0}
                />
              </AppRow>
              <AppText
                text="Number of siblings"
                type="subtitle_semibold"
                color="text300"
              />
              <AppRow alignItems="flex-end">
                <LabelValueText
                  label={'No. of males'}
                  value={probs?.familyHistory?.noOfMaleSiblings || 0}
                />
                <LabelValueText
                  label={'No. of females'}
                  value={probs?.familyHistory?.noOfFemaleSiblings || 0}
                />
                <LabelValueText
                  label={'Total'}
                  value={probs?.familyHistory?.totalSiblings || 0}
                />
              </AppRow>
            </>
          ) : (
            <AppAlert
              title="Family History"
              description="No family history has been saved"
              showButton={false}
              icon={
                <AnimatedBubble
                  bgColor="primary25"
                  size={90}
                  Icon={
                    <AlertBubbleIconWrapper
                      icon={
                        <UsersIcon fill={colors.white} width={36} height={36} />
                      }
                    />
                  }
                />
              }
            />
          )}
        </>
      )}
    </View>
  );
};

export default ReviewDetailedHistoryCard;
