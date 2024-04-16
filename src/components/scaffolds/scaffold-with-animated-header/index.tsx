import PatientInfoCard from '@/components/cards/Patients/patient-info-card';
import AnimatedAppHeader from '@/components/headers/animated-app-header';
import {useColors} from '@/hooks/useColors';
import {isIOS, wp} from '@/resources/config';
import {useAppSelector} from '@/state/hooks';
import {selectPatient} from '@/state/slices/patient/selectedPatient';
import React, {useRef} from 'react';
import {
  Animated,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  ScrollViewProps,
  StatusBar,
  ViewStyle,
} from 'react-native';
import {scaffoldWithBackButtonStyles} from './styles';

/**
 * A component that serves as the base foundation for a
 * screen with PatientInfoCard and an AppHeader that consist primarily of a back button and screenTitle.
 *
 * The AppHeader shrinks in height when the body of the screen is scrolled in the opposite direction.
 * see usage in Presenting complaints screen et al.
 *
 * @param bodyHorizontalPadding defaults to 24 and it's scaled by wp.
 * @param scrollEnabled defaults to true.
 */
const ScaffoldWithAnimatedHeader = ({
  children,
  screenTitle,
  scrollEnabled = true,
  bodyHorizontalPadding = 24,
  scrollRef,
  AppHeaderRightContent,
  AdditionalHeaderContent,
  ...scrollViewProps
}: {
  screenTitle: string;
  bodyHorizontalPadding?: number;
  AppHeaderRightContent?: React.ReactNode;
  AdditionalHeaderContent?: React.ReactNode;
  scrollRef?: React.MutableRefObject<ScrollView | null>;
} & ScrollViewProps) => {
  const {colors} = useColors();
  const styles = scaffoldWithBackButtonStyles({
    colors,
    bodyHorizontalPadding,
  });
  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  return (
    <>
      <StatusBar
        animated
        barStyle="dark-content"
        backgroundColor={colors?.default400}
      />
      <SafeAreaView style={styles.baseContainer}>
        <AnimatedAppHeader
          animatedValue={scrollOffsetY}
          screenTitle={screenTitle}
          RightContent={AppHeaderRightContent}
          extraStyles={{
            marginHorizontal: wp(24),
          }}
        />
        <PatientInfoView style={styles.patientInfoCard} />
        {AdditionalHeaderContent}
        <KeyboardAvoidingView
          behavior={isIOS ? 'padding' : 'height'}
          style={styles.flex1}>
          <Animated.ScrollView
            ref={scrollRef}
            scrollEventThrottle={1}
            scrollEnabled={scrollEnabled}
            contentInsetAdjustmentBehavior={'automatic'}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps={'handled'}
            style={[
              scrollViewProps.contentContainerStyle,
              styles.bodyHorizontalPadding,
            ]}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {y: scrollOffsetY}}}],
              {useNativeDriver: false},
            )}
            {...scrollViewProps}>
            {children}
          </Animated.ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};

export default ScaffoldWithAnimatedHeader;

const PatientInfoView = ({style}: {style?: ViewStyle | undefined}) => {
  const patient = useAppSelector(selectPatient);
  return (
    <PatientInfoCard
      fullName={patient.fullName}
      code={patient.code}
      dateOfBirth={patient.dateOfBirth}
      gender={patient.gender}
      avatar={patient.pic}
      containerStyle={style}
    />
  );
};
