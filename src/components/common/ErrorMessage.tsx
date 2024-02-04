/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {Text} from '@rneui/themed';
import {StyleSheet, View} from 'react-native';
import {AppColors} from '../../utility/AppColors';
import {AppFontStyle} from '../../styles/AppFontStyle';
import FeatherIcon from 'react-native-vector-icons/Feather';

const ErrorMessage = (props: any) => {
  return (
    <View style={styles.container}>
      {props.showLogo ? (
        <>
          <FeatherIcon
            name="alert-octagon"
            color={AppColors.errorMsgText}
            style={styles.icon}
            size={20}
          />
          <Text style={(AppFontStyle.REGULAR_10, styles.text)}>
            {props.message}
          </Text>
        </>
      ) : (
        <Text
          style={[AppFontStyle.REGULAR_10, styles.text, {textAlign: 'center'}]}>
          {props.message}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors.errorMsgBgc,
    padding: 10,
    borderRadius: 7,
    flexDirection: 'row',
    marginVertical: 10,
  },
  text: {
    color: AppColors.errorMsgText,
  },
  icon: {
    marginHorizontal: 10,
  },
});
export default ErrorMessage;
