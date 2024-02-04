/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {AppColors} from '../../utility/AppColors';
import {AppFontStyle} from '../../styles/AppFontStyle';

const PreviousButton = (props: any) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: AppColors.selectedTabColor,
      flexDirection: 'row',
      paddingHorizontal: 25,
      paddingVertical: 15,
      justifyContent: 'center',
      alignItems: 'center',
      width: 130,
      borderRadius: 10,
      marginVertical: 10,
    },
  });
  return (
    <TouchableOpacity style={styles.container} onPress={props.onTap}>
      <EntypoIcon
        name="chevron-left"
        color={AppColors.secondaryText}
        size={18}
      />
      <Text
        style={[
          AppFontStyle.BOLD_14,
          {color: AppColors.secondaryText, marginHorizontal: 3},
        ]}>
        Previous
      </Text>
    </TouchableOpacity>
  );
};

export default PreviousButton;
