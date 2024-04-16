import React from 'react';
import {DimensionValue, Pressable, ViewStyle} from 'react-native';
import {AppText} from '../common';
import {ColorKeys} from '../../resources/colors';
import {useColors} from '../../hooks/useColors';
import {doctorPatientStyle} from '../../screens/doctor/bottom-tabs/patients/styles';
import {TypographyKeys} from '@/resources/fonts';

type TabButtonProps = {
  label: 'Outpatient' | 'Inpatient' | 'A&E' | string;
  activeTab: 'Outpatient' | 'Inpatient' | 'A&E' | string;
  setActiveTab: (tab: 'Outpatient' | 'Inpatient' | 'A&E' | string) => void;
  activeBgColor?: ColorKeys;
  inActiveBgColor?: ColorKeys;
  activeTextColor?: ColorKeys;
  inActiveTextColor?: ColorKeys;
  width?: DimensionValue;
  otherStyles?: ViewStyle;
  textType?: TypographyKeys;
};

export const TabButton: React.FC<TabButtonProps> = ({
  label,
  activeTab,
  setActiveTab,
  activeBgColor = 'neutral100',
  inActiveBgColor = 'white',
  activeTextColor = 'text400',
  inActiveTextColor = 'text100',
  width = '32%',
  otherStyles = {},
  textType = 'body_1_semibold',
}) => {
  const isActive = activeTab === label;
  const {colors} = useColors();
  const tabStyles = doctorPatientStyle({});

  const buttonStyle = {
    backgroundColor: colors[isActive ? activeBgColor : inActiveBgColor],
    width,
    ...tabStyles.innerViewCommon,
    ...otherStyles,
  };

  return (
    <Pressable onPress={() => setActiveTab(label)} style={buttonStyle}>
      <AppText
        type={textType}
        color={isActive ? activeTextColor : inActiveTextColor}
        text={label}
      />
    </Pressable>
  );
};
