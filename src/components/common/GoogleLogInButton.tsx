/* eslint-disable react/react-in-jsx-scope */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AppImages} from '../../utility/AppImages';
import {AppColors} from '../../utility/AppColors';
import {AppFontStyle} from '../../styles/AppFontStyle';

const GoogleLoginButton = (props: any) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => props.navigation.navigate('GoogleAuth')}>
      <Image source={AppImages.IMG_USER} style={styles.icon} />
      <View style={styles.accountDetails}>
        <Text style={[AppFontStyle.REGULAR_12, {color: AppColors.primaryText}]}>
          Sign in as Emma
        </Text>
        <Text style={[AppFontStyle.REGULAR_10, {color: AppColors.primaryText}]}>
          emma1234@gmail.com
        </Text>
      </View>
      <Image source={AppImages.IMG_GOOGLE_ICON} style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 44,
    borderWidth: 1,
    borderColor: AppColors.lightGrey,
    padding: 9,
    flexDirection: 'row',
    marginVertical: 15,
  },
  icon: {
    height: 30,
    width: 30,
  },
  accountDetails: {flex: 1, marginHorizontal: 10},
});

export default GoogleLoginButton;
