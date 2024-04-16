import AllInputsSuggestionsContainer from '@/components/all-inputs-suggestions-container';
import {AllInputsPillButton, AppButton} from '@/components/buttons';
import {AppRow, AppText} from '@/components/common';
import {AppContentSheet} from '@/components/sheets';
import {ScrollableTab} from '@/components/tabs';
import {useColors} from '@/hooks/useColors';
import {wp} from '@/resources/config';
import {useApiServicesAppVitalsignsGetgcsscoringGetQuery} from '@/state/services/vitalSignsApi';
import {selectPatient} from '@/state/slices/patient/selectedPatient';
import React, {FunctionComponent, useRef, useState} from 'react';
import {ScrollView, View} from 'react-native';
import {useSelector} from 'react-redux';
import {vitalSignsStyles} from '../../styles';
import {useSheet} from '@/hooks/useSheet';

const CheckGCS: FunctionComponent<{
  onChangeScore: (score: string) => void;
  score: number;
}> = ({onChangeScore, score = 0}) => {
  const {
    sheetRef: checkGCSsheet,
    closeSheet: closeCheckGCSsheet,
    openSheet: openCheckGCSsheet,
  } = useSheet();
  const {colors} = useColors();
  const [selectedGCSscoreTab, setSelectedGCSscoreTab] = useState(0);
  const [selectedGCS, setSelectedGCS] = useState<{
    [key: number]: {name: string; score: number};
  }>({});

  const {id} = useSelector(selectPatient);
  const {data} = useApiServicesAppVitalsignsGetgcsscoringGetQuery({
    patientId: id,
  });

  const scrollViewRef = useRef<ScrollView>(null);

  const totalScore = Object.values(selectedGCS).reduce(
    (prev, cur) => prev + cur.score,
    0,
  );

  const styles = vitalSignsStyles({colors});

  const tabs = (data ?? [])?.map(el => el.name as string);

  const selectedCGSScoringData =
    data?.find((_, i) => i === selectedGCSscoreTab)?.ranges ?? [];

  return (
    <>
      <>
        <AppRow
          // eslint-disable-next-line react-native/no-inline-styles
          extraStyles={{
            width: '70%',
          }}>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{flex: 1}}>
            <AppText
              type="title_semibold"
              align="center"
              color="text400"
              text={score}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{alignSelf: 'center'}}
            />
          </View>
          <AppButton
            onPress={openCheckGCSsheet}
            text="Check GCS"
            containerStyle={{width: wp(120)}}
          />
        </AppRow>
      </>

      <AppContentSheet
        onClose={() => {
          setSelectedGCSscoreTab(0);
          setSelectedGCS([]);
        }}
        headerTitle="GCS score"
        sheetRef={checkGCSsheet}>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{gap: 10}}>
          {tabs.length ? (
            <ScrollableTab
              tabs={tabs}
              currentIndex={selectedGCSscoreTab}
              activeColor={{
                background: 'default300',
                border: 'transparent',
              }}
              unActiveColor={{
                background: 'neutral100',
                border: 'default200',
              }}
              onPress={index => setSelectedGCSscoreTab(index)}
            />
          ) : (
            <></>
          )}
          <View style={styles.takeContainer}>
            <View style={styles.predictiveTextContainer}>
              {!selectedGCS[selectedGCSscoreTab] ? (
                <AppText
                  type="body_2_medium"
                  align="left"
                  color="text50"
                  text={'Click predictive text'}
                />
              ) : (
                <ScrollView
                  ref={scrollViewRef}
                  nestedScrollEnabled
                  onContentSizeChange={() =>
                    scrollViewRef.current?.scrollToEnd()
                  }
                  overScrollMode="never"
                  contentContainerStyle={styles.suggestedPillContainer}>
                  <AllInputsPillButton
                    text={selectedGCS[selectedGCSscoreTab]?.name}
                    isSelected
                    onPress={() => {
                      setSelectedGCS(currentSelectedCGS => {
                        // eslint-disable-next-line @typescript-eslint/no-unused-vars
                        const {[selectedGCSscoreTab]: _, ...rest} =
                          currentSelectedCGS;
                        return rest;
                      });
                    }}
                  />
                </ScrollView>
              )}
            </View>
            <AllInputsSuggestionsContainer height={320}>
              {selectedCGSScoringData.map((item, index) => (
                <AllInputsPillButton
                  key={index}
                  text={item.response as string}
                  onPress={() => {
                    setSelectedGCS(prev => ({
                      ...prev,
                      [selectedGCSscoreTab]: {
                        name: item?.response as string,
                        score: item?.score ?? 0,
                      },
                    }));
                  }}
                />
              ))}
            </AllInputsSuggestionsContainer>

            <AppRow>
              <View style={styles.score}>
                <AppText
                  type="body_2_medium"
                  align="left"
                  color="text50"
                  text={'GCS score:'}
                />
                <AppText
                  type="body_2_bold"
                  align="left"
                  color="text400"
                  text={` ${totalScore}`}
                />
              </View>
              <AppButton
                onPress={() => {
                  closeCheckGCSsheet();
                  onChangeScore(`${totalScore}`);
                }}
                text="Done"
                isDisabled={totalScore === 0}
              />
            </AppRow>
          </View>
        </View>
      </AppContentSheet>
    </>
  );
};

export default CheckGCS;
