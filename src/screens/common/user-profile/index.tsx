import {PIcon, PencilIcon} from '@/assets/svg';
import AppScreen from '@/components/app-screen';
import {AppButton} from '@/components/buttons';
import {AppRow, AppText, DisplayImage} from '@/components/common';
import {AppHeader} from '@/components/headers';
import {ScrollableTab} from '@/components/tabs';
import {
  jobInfo,
  otherDetails,
  secondaryJobInfo,
  profileTabs,
  userInfo,
} from '@/constants/profile';
import {useColors} from '@/hooks/useColors';
import {fs, wp} from '@/resources/config';
import {NOT_AVAILABLE, TEMP_AVATAR_URL} from '@/utils/constants';
import React, {useState} from 'react';
import {View} from 'react-native';
import ChangePasswordOption from './common/change-password-option';
import PersonalInformationCard from './common/personal-information-card';
import SettingsCard from './common/settings-card';
import {userProfileStyles} from './styles';

const UserProfile = () => {
  const {colors} = useColors();
  const styles = userProfileStyles({colors});
  const [currentTab, setCurrentTab] = useState<number | null>(0);

  return (
    <AppScreen
      paddingHorizontal={24}
      ScreenHeader={
        <View style={styles.headerContainer}>
          <AppHeader
            LeftContent={<PIcon />}
            middleTitle="Profile"
            paddingBottom={0}
            paddingHorizontal={0}
          />
          <UserCard
            fullName={'Dr Oluwaseunfunmi Akinola'}
            avatar={TEMP_AVATAR_URL}
          />
          <ScrollableTab
            tabs={profileTabs}
            currentIndex={currentTab}
            activeColor={{background: 'default300'}}
            unActiveColor={{background: 'neutral100'}}
            onPress={index =>
              setCurrentTab(currentTab !== index ? index : null)
            }
            style={styles.scrollExtraStyles}
          />
        </View>
      }>
      <View style={styles.tabsScreen}>
        {currentTab === 0 && <PersonalInformation />}
        {currentTab === 1 && <JobInformation />}
        {currentTab === 2 && (
          <>
            <SettingsCard cardTitle="Notifications" />
            <ChangePasswordOption />
          </>
        )}
      </View>
    </AppScreen>
  );
};

export default UserProfile;

const UserCard = ({
  fullName,
  avatar,
}: {
  fullName?: string | null;
  avatar?: string | null;
}) => {
  const {colors} = useColors();
  const styles = userProfileStyles({colors});
  const picUrl = avatar === NOT_AVAILABLE ? TEMP_AVATAR_URL : avatar;
  return (
    <View style={[styles.userCardWrapper]}>
      <View style={[styles.userCardContainer]}>
        <DisplayImage uri={picUrl} size={32} borderRadius={16} />
        <View style={styles.userCardDetailsContainer}>
          <AppText text={fullName || NOT_AVAILABLE} type="body_1_semibold" />
          <AppRow>
            <AppText text={'Doctor'} type="caption_medium" color="text300" />
            <View style={styles.userCardPrimary}>
              <AppText
                text={'Primary'}
                type="label_semibold"
                color="text300"
                style={{fontSize: fs(10)}}
              />
            </View>
          </AppRow>
        </View>
      </View>
    </View>
  );
};
const PersonalInformation = () => {
  const {colors} = useColors();
  return (
    <>
      <AppButton
        text="Edit personal information"
        buttonColor="white"
        borderColor="primary400"
        textColor="primary400"
        textType="body_1_semibold"
        LeftContent={<PencilIcon fill={colors.primary400} width={wp(20)} />}
      />
      <PersonalInformationCard data={userInfo} />
    </>
  );
};
const JobInformation = () => {
  return (
    <>
      <PersonalInformationCard cardTitle="Primary job" data={jobInfo} />
      <PersonalInformationCard
        cardTitle="Secondary job 1"
        data={secondaryJobInfo}
      />
      <PersonalInformationCard cardTitle="Other details" data={otherDetails} />
    </>
  );
};
