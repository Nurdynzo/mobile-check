import React, {FunctionComponent, ReactNode} from 'react';
import {ScrollView} from 'react-native';
import {editFormFieldsstyles} from './styles';

const EditFormFieldsContainer: FunctionComponent<{children: ReactNode}> = ({
  children,
}) => {
  const styles = editFormFieldsstyles;
  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}>
      {children}
    </ScrollView>
  );
};

export default EditFormFieldsContainer;
