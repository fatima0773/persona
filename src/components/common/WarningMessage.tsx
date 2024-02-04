/* eslint-disable react/react-in-jsx-scope */
import {Text} from '@rneui/themed';
import {StyleSheet, View} from 'react-native';
import {AppColors} from '../../utility/AppColors';
import {AppFontStyle} from '../../styles/AppFontStyle';
import FeatherIcon from 'react-native-vector-icons/Feather';

const WarningMessage = (props: any) => {
  return (
    <View style={styles.container}>
      <FeatherIcon
        name="alert-circle"
        color={AppColors.warningText}
        style={styles.icon}
        size={20}
      />
      <Text style={(AppFontStyle.REGULAR_10, styles.text)}>
        {props.message}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors.warningMsgBgc,
    padding: 10,
    borderRadius: 7,
    flexDirection: 'row',
    marginVertical: 10,
    width: '100%',
  },
  text: {
    color: AppColors.warningText,
    width: '90%',
  },
  icon: {
    marginHorizontal: 10,
  },
});
export default WarningMessage;
