import {
  BackIcon,
  BinIcon,
  CameraIcon,
  EllipseIcon,
  FlashIcon,
  HorizontalMoreIcon,
  RadioBtnEmptyIcon,
  RadioBtnFilledIcon,
  RightIcon,
  RotateIcon,
  ScanWrapperIcon,
  WhiteTickIcon,
} from '@/assets/svg';
import AppScreen from '@/components/app-screen';
import {AppButton, AppIconButton} from '@/components/buttons';
import PatientInfoCard from '@/components/cards/Patients/patient-info-card';
import {
  AppAlert,
  AppLoading,
  AppRow,
  AppText,
  DisplayImage,
} from '@/components/common';
import {AppHeader} from '@/components/headers';
import {AppContentSheet, AppMenuSheet} from '@/components/sheets';
import AppSelectItemSheet from '@/components/sheets/app-select-item-sheet';
import {useColors} from '@/hooks/useColors';
import {ColorDefinitions, ColorKeys} from '@/resources/colors';
import {MenuOptionsProp} from '@/types/menusheet';
import React, {ReactNode} from 'react';
import {
  ActivityIndicator,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Pdf from 'react-native-pdf';
import {
  buttonStyles,
  scanPaperRecordsCardStyles,
  scanPaperRecordsStyles,
} from './style';
import {contentTypes} from './type';
import {useScanPaperRecords} from './useScanPaperRecords';
import {selectPatient} from '@/state/slices/patient/selectedPatient';
import {useAppSelector} from '@/state/hooks';

const ScanPaperRecord = () => {
  const {colors} = useColors();
  const styles = scanPaperRecordsStyles({colors});

  const patient = useAppSelector(selectPatient);

  const {
    handleSnapped,
    handleShare,
    handleUploadPDF,
    handleAwaiting,
    state,
    openMoreSheet,
    moreSheet,
    shareSheet,
    handleAllPreviewer,
    successSheet,
    handleReturnToHome,
    handlePhoto,
    images,
    createdPDF,
    creatingPDF,
    handleCreatePDFCompleted,
    handleCreatePDFError,
    handleCreatingPDFProgress,
    numberOfPdfPages,
    handlePdfPageChanged,
    currentPdfPage,
    handleRemove,
    setQueryForReviewer,
    setSelectedReviewer,
    prepareConverstion,
    selectedReviewer,
    handleSendToReviewer,
    canSendToReviewerNow,
    uploading,
    sendingToReviewer,
  } = useScanPaperRecords();

  const moreOptions: MenuOptionsProp = [
    {
      value: 'Remove',
      onPress: () => handleRemove(),
      id: 'option-1',
      color: 'danger300',
    },
  ];

  const renderContent = () => {
    switch (state) {
      case 'awaiting':
        return renderAwaitingContent({
          colors,
          styles,
          handlePhoto,
          patientName: patient.fullName,
          patientCode: patient.code,
          gender: patient.gender,
          age: patient.dateOfBirth,
          patientPic: patient.pic,
        });
      case 'snapped':
        return renderSnappedContent({
          styles,
          colors,
          handlePhoto,
          handleAwaiting,
          creatingPDF,
          images,
          prepareConverstion,
        });
      case 'previewing':
        return renderPreviewingContent({
          styles,
          colors,
          handleSnapped,
          currentPdfPage,
          numberOfPdfPages,
          openMoreSheet,
          createdPDF,
          handleCreatePDFCompleted,
          handleCreatePDFError,
          handlePdfPageChanged,
          handleCreatingPDFProgress,
          handleShare,
          handleUploadPDF,
          canSendToReviewerNow,
          handlePhoto,
        });
      default:
        return {
          header: <></>,
          body: <></>,
          footer: <></>,
        };
    }
  };
  return (
    <>
      {<AppLoading isLoading={sendingToReviewer || uploading} />}
      <AppScreen
        isScrollable={false}
        ScreenHeader={<>{renderContent().header}</>}>
        {renderContent().body}
      </AppScreen>
      {renderContent().footer}
      <AppMenuSheet
        menuOptions={moreOptions}
        removeHeader
        sheetRef={moreSheet}
        renderRightIcon={() => <BinIcon />}
      />
      <AppContentSheet removeHeader sheetRef={successSheet}>
        <AppAlert
          title="Successful"
          description="The uploaded paper records have been successfully sent to Labambam Adejiji for review"
          buttonText="Return to home"
          onPress={handleReturnToHome}
        />
      </AppContentSheet>
      <AppSelectItemSheet
        title="Select reviewer"
        searchPlaceholder="Search reviewer"
        sheetRef={shareSheet}
        isLoading={false}
        selectOptions={handleAllPreviewer()}
        selectedValue={selectedReviewer?.value}
        renderRightIcon={({isSelected}) =>
          isSelected ? <RadioBtnFilledIcon /> : <RadioBtnEmptyIcon />
        }
        showSearchInput
        onSelectItem={({item}) => {
          item &&
            setSelectedReviewer({
              id: `${item.id}`,
              label: item.value,
              value: item.value,
            });
        }}
        onSearchInputChange={text => setQueryForReviewer(text)}
        flatlistProps={{
          ListFooterComponent: () => {
            return (
              <AppButton
                text="Send to reviewer"
                containerStyle={styles.sendToReviewerBtn}
                onPress={handleSendToReviewer}
              />
            );
          },
        }}
      />
    </>
  );
};

const Card = ({colors}: {colors: ColorDefinitions}) => {
  const styles = scanPaperRecordsCardStyles({colors});
  return (
    <View style={styles.container}>
      <ScanWrapperIcon />
      <View style={styles.textWrapper}>
        <AppText
          type="title_semibold"
          color="text400"
          text={'Scan paper records'}
          align="center"
        />
        <AppText
          type="subtitle_medium"
          color="text300"
          text={'Click on the camera icon below to scan paper records'}
          align="center"
        />
      </View>
    </View>
  );
};

const Button = ({
  icon,
  bg,
  borderColor,
  extraStyles,
  onPress,
  colors,
}: {
  icon?: ReactNode;
  bg: ColorKeys;
  borderColor: ColorKeys;
  extraStyles?: ViewStyle;
  onPress?: () => void;
  colors: ColorDefinitions;
}) => {
  const styles = buttonStyles({colors, bg, borderColor});
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, extraStyles]}>
      {icon}
    </TouchableOpacity>
  );
};

const CameraCard = ({
  middleContent,
  rightContent,
  leftContent,
  showText = true,
  onPressMiddleAction = () => null,
  colors,
}: {
  leftContent?: ReactNode;
  middleContent?: ReactNode;
  rightContent?: ReactNode;
  onPressMiddleAction?: () => void;
  showText?: boolean;
  colors: ColorDefinitions;
}) => {
  const styles = scanPaperRecordsStyles({colors});
  return (
    <View style={styles.cameraWrapper}>
      {leftContent}
      <TouchableOpacity
        onPress={onPressMiddleAction}
        // TODO(Zucci): Kindly review to take out styles to styles file
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          gap: 10,
        }}>
        {middleContent}
        {showText && (
          <AppText
            type="nav_bar_menu_semibold"
            color="text400"
            text={'camera'}
            align="center"
          />
        )}
      </TouchableOpacity>
      {rightContent}
    </View>
  );
};

const renderAwaitingContent = ({
  styles,
  patientName,
  patientCode,
  age,
  patientPic,
  gender,
  colors,
  handlePhoto,
}: contentTypes) => {
  return {
    header: (
      <>
        <AppHeader middleTitle={'Scan paper records'} />
        <View style={styles.header}>
          <PatientInfoCard
            fullName={patientName}
            code={patientCode}
            dateOfBirth={age}
            gender={gender}
            avatar={patientPic}
          />
        </View>
      </>
    ),
    body: (
      <>
        <View style={styles.container}>
          <View style={styles.content}>
            <Card colors={colors} />
          </View>
        </View>
      </>
    ),
    footer: (
      <>
        <CameraCard
          colors={colors}
          onPressMiddleAction={handlePhoto}
          middleContent={<CameraIcon />}
        />
      </>
    ),
  };
};

const renderSnappedContent = ({
  styles,
  colors,
  handlePhoto,
  handleAwaiting,
  creatingPDF,
  images,
  prepareConverstion,
}: contentTypes) => {
  return {
    header: (
      <>
        <AppHeader
          onPressBack={handleAwaiting}
          RightContent={
            <View style={styles.headerRightContent}>
              <Button
                colors={colors}
                borderColor="primary400"
                icon={<FlashIcon />}
                bg="white"
              />
            </View>
          }
        />
      </>
    ),
    body: (
      <>
        <View style={styles.cameraContainer}>
          {creatingPDF && (
            <View style={styles.loading}>
              <ActivityIndicator size={40} color={colors.primary400} />
            </View>
          )}
          {
            <DisplayImage
              style={styles.image}
              uri={images && images[images.length - 1].path}
            />
          }
        </View>
      </>
    ),
    footer: (
      <>
        <CameraCard
          colors={colors}
          middleContent={<EllipseIcon />}
          onPressMiddleAction={handlePhoto}
          showText={false}
          leftContent={
            <View style={styles.imageWrapper}>
              <DisplayImage uri={images && images[images.length - 1].path} />
              <AppText text={images?.length} style={styles.badge} />
            </View>
          }
          rightContent={
            <>
              <Button
                colors={colors}
                onPress={prepareConverstion}
                borderColor="success50"
                bg="primary400"
                icon={<WhiteTickIcon />}
              />
            </>
          }
        />
      </>
    ),
  };
};

const renderPreviewingContent = ({
  styles,
  colors,
  handleSnapped,
  currentPdfPage,
  numberOfPdfPages,
  openMoreSheet,
  createdPDF,
  handleCreatePDFCompleted,
  handleCreatePDFError,
  handlePdfPageChanged,
  handleCreatingPDFProgress,
  handleShare,
  handleUploadPDF,
  canSendToReviewerNow,
  handlePhoto,
}: contentTypes) => {
  return {
    header: (
      <>
        <AppHeader
          LeftContent={
            <View style={styles.headerLeftContent}>
              <TouchableOpacity onPress={handleSnapped}>
                <BackIcon />
              </TouchableOpacity>
              <AppText
                color="black"
                text={`${currentPdfPage}/${numberOfPdfPages}`}
                align="center"
                type="caption_semibold"
              />
            </View>
          }
          RightContent={
            <View style={styles.headerRightContent}>
              <Button
                onPress={handlePhoto}
                borderColor="primary400"
                colors={colors}
                icon={<CameraIcon fill={colors.primary400} />}
                bg="white"
              />
              <AppIconButton
                onPress={openMoreSheet}
                icon={<HorizontalMoreIcon />}
              />
            </View>
          }
        />
      </>
    ),
    body: (
      <>
        <View style={[styles.cameraContainer]}>
          <Pdf
            source={{uri: createdPDF}}
            onLoadComplete={numberOfPages => {
              handleCreatePDFCompleted &&
                handleCreatePDFCompleted(numberOfPages);
            }}
            onError={error => {
              handleCreatePDFError && handleCreatePDFError(error);
            }}
            onPageChanged={number =>
              handlePdfPageChanged && handlePdfPageChanged(number)
            }
            onLoadProgress={percent => {
              handleCreatingPDFProgress && handleCreatingPDFProgress(percent);
            }}
            style={{flex: 1}}
            horizontal
            enablePaging
            enableRTL={true}
          />
        </View>
      </>
    ),
    footer: (
      <>
        <CameraCard
          colors={colors}
          leftContent={
            <AppRow extraStyles={{gap: 15}}>
              <Button
                borderColor="primary400"
                colors={colors}
                onPress={() => null}
                bg="transparent"
                icon={<RotateIcon />}
              />
              <Button
                borderColor="primary400"
                colors={colors}
                onPress={() => null}
                bg="transparent"
                icon={<RotateIcon style={styles.undo} />}
              />
            </AppRow>
          }
          onPressMiddleAction={() => null}
          rightContent={
            <>
              <Button
                onPress={canSendToReviewerNow ? handleShare : handleUploadPDF}
                borderColor="success50"
                bg="primary400"
                colors={colors}
                icon={canSendToReviewerNow ? <RightIcon /> : <WhiteTickIcon />}
              />
            </>
          }
          showText={false}
        />
      </>
    ),
  };
};
export default ScanPaperRecord;
