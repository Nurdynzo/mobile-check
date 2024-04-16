import {AppRow, AppText} from '@/components/common';
import {
  AllInputsSuggestionForm,
  useNewAllInputsSuggestionForm,
} from '@/components/forms';
import {ScrollableTab} from '@/components/tabs';
import ViewImagesOnLocalButton from '@/components/view-images-on-local-button';
import {microbiologyFormFilterOptions} from '@/constants/recordInvestigationsTests';
import {useColors} from '@/hooks/useColors';
import {wp} from '@/resources/config';
import {EMPTY_STRING} from '@/utils/constants';
import {logThis} from '@/utils/helpers/logThis';
import {imageFileSchema} from '@/utils/schema';
import React, {useState} from 'react';
import {View} from 'react-native';
import InvestigationsCameraViewButton from '../../../investigations-camera-view-button';
import {investigationStyles} from '../../../styles';
import {SingleInvestigationTestType} from '../available-investigation-tests-view/use-get-available-investigations-tests/type';
import DynamicTestForm from '../dynamic-test-form';
import AntibioticSensitivityTestForm from '../investigation-filters/antibiotic-sensitivity-test-form';
import CultureTestForm from '../investigation-filters/culture-test-form';
import GramStainInvestigationTestForm from '../investigation-filters/gram-stain-investigation-test-form';
import MacroscopyTestForm from '../investigation-filters/macroscopy-test-form';
import MethyleneBlueStainTestForm from '../investigation-filters/methylene-blue-stain-test-form';
import MicroscopyTestForm from '../investigation-filters/microscopy-test-form';
import SpecimenInvestigationTestForm from '../investigation-filters/specimen-investigation-test-form';
import {microbiologyFormViewStyles} from './styles';
import {microbiologyInvestigationFilterOptions} from './types';

const MicrobiologyFormView = ({
  selectedTest,
}: {
  selectedTest: SingleInvestigationTestType;
  encounterId: number;
}) => {
  const {colors} = useColors();
  const styles = investigationStyles({colors});
  const [images, setImages] = useState<imageFileSchema[]>([]);

  const [activeTab, setActiveTab] =
    useState<microbiologyInvestigationFilterOptions>('Specimen');

  const suggestionFormHandler = useNewAllInputsSuggestionForm();

  //TODO(ZUCCI): Extract this to the bottom of the file.
  const renderMicrobiologyInvestigationUI = () => {
    switch (activeTab) {
      case 'Specimen':
        return (
          <SpecimenInvestigationTestForm
            isSubmitButtonDisabled={false}
            isSubmitButtonLoading={false}
            onPressSubmitButton={() => null}
            selectedTest={selectedTest}
            dynamicForm={
              {} && (
                <DynamicTestForm
                  getUniqueTestDetails={data => {
                    logThis(data);
                  }}
                  testDetails={{}}
                  getTouchedValues={values => {
                    logThis(values);
                  }}
                />
              )
            }
          />
        );
      case 'Gram stain':
        return <GramStainInvestigationTestForm />;
      case 'Methylene blue stain':
        return <MethyleneBlueStainTestForm />;
      case 'Macroscopy':
        return <MacroscopyTestForm />;
      case 'Antibiotic sensitivity':
        return <AntibioticSensitivityTestForm />;
      case 'Culture':
        return <CultureTestForm />;
      case 'Microscopy':
        return <MicroscopyTestForm />;
      default:
        return <></>;
    }
  };

  return (
    <>
      <AppRow extraStyles={styles.recentResultContainerHeader}>
        <AppText
          text={`Record results ${
            selectedTest?.name ? `for ${selectedTest?.name}` : EMPTY_STRING
          }`}
          type={'title_semibold'}
        />
      </AppRow>
      <ScrollableTab
        onPress={index => setActiveTab(microbiologyFormFilterOptions[index])}
        tabs={microbiologyFormFilterOptions}
        currentIndex={microbiologyFormFilterOptions.findIndex(
          value => value === activeTab,
        )}
        tabButtonScrollViewStyle={microbiologyFormViewStyles.padding}
      />
      {renderMicrobiologyInvestigationUI()}
      <View style={{gap: wp(5)}}>
        <AllInputsSuggestionForm
          removeExpandButton
          formProps={suggestionFormHandler}
          suggestions={[]}
          expandSheetHeaderTitle="Search predictive text"
          placeholder="Click on predictive text"
        />
      </View>
      <AppRow>
        <InvestigationsCameraViewButton getSelectedImage={images => images} />
        <ViewImagesOnLocalButton
          images={images}
          onDelete={(index, closeSheet = () => null) => {
            setImages(preImgs => preImgs.filter((_, i) => i !== index));
            closeSheet();
          }}
        />
      </AppRow>
    </>
  );
};

export default MicrobiologyFormView;
