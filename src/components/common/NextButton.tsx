/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {AppColors} from '../../utility/AppColors';
import {AppFontStyle} from '../../styles/AppFontStyle';

const NextButton = (props: any) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: props.isInActive
        ? AppColors.inactiveThemeColor
        : AppColors.appThemeColor,
      flexDirection: 'row',
      paddingHorizontal: 25,
      paddingVertical: 15,
      justifyContent: 'center',
      alignItems: 'center',
      width: 100,
      borderRadius: 10,
      marginVertical: 10,
    },
  });
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={props.onTap}
      disabled={props.isInActive}>
      <Text
        style={[
          AppFontStyle.BOLD_15,
          {color: AppColors.whiteColor, marginHorizontal: 3},
        ]}>
        Next
      </Text>
      <EntypoIcon name="chevron-right" color={AppColors.whiteColor} size={18} />
    </TouchableOpacity>
  );
};

export default NextButton;
