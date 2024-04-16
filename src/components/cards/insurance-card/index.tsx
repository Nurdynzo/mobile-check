import React from 'react';
import {View} from 'react-native';
import {DownCaretIcon} from '../../../assets/svg';
import {useColors} from '../../../hooks/useColors';
import {AppRow, AppText} from '../../common';
import RecordRow from '../record-row';
import StatusLabel from '../status-label';
import {insuranceCardStyles} from './styles';

const InsuranceCard = () => {
  const {colors} = useColors();

  const styles = insuranceCardStyles({colors});

  return (
    <>
      <View style={styles.generalRowContainer}>
        <AppRow alignItems="flex-start">
          <RecordRow
            detail="Insurance provider"
            children={
              <>
                <AppText
                  color="text400"
                  type="body_1_semibold"
                  text={'Reliance HMO Limited'}
                />
              </>
            }
          />
          <RecordRow detail="Status">
            <StatusLabel
              text="Active"
              color="success600"
              icon={<DownCaretIcon />}
              bg={'success25'}
            />
          </RecordRow>
        </AppRow>

        <AppRow alignItems="flex-start">
          <RecordRow
            detail="Insurance coverage"
            children={
              <>
                <AppText
                  color="text400"
                  type="body_1_semibold"
                  text={'Alexandrite'}
                />
              </>
            }
          />
          <RecordRow
            detail="Insurance ID"
            children={
              <>
                <AppText
                  color="text400"
                  type="body_1_semibold"
                  text={'112345678902'}
                />
              </>
            }
          />
        </AppRow>
        <AppRow alignItems="flex-start">
          <RecordRow
            detail="Reg type"
            children={
              <>
                <AppText
                  color="text400"
                  type="body_1_semibold"
                  text={'Dependent'}
                />
              </>
            }
          />
          <RecordRow
            detail="Expiry date"
            children={
              <>
                <AppText
                  color="text400"
                  type="body_1_semibold"
                  text={'14 Jan 21'}
                />
              </>
            }
          />
        </AppRow>
      </View>
    </>
  );
};

export default InsuranceCard;
