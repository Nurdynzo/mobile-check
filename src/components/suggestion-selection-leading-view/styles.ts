import {StyleSheet} from 'react-native';

export const suggestionSelectionLeadingViewStyles = ({
  toggleButton,
}: {
  toggleButton?: React.JSX.Element;
}) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: toggleButton ? 'space-between' : 'flex-end',
    },
  });
};
