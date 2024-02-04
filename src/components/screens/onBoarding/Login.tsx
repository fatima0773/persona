/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {AppColors} from '../../../utility/AppColors';
import CommonButton from '../../common/CommonButton';
import {AppFontStyle} from '../../../styles/AppFontStyle';
import {FULL_HEIGHT} from '../../../utility/Constant';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={[AppFontStyle.BOLD_40, {marginTop: 90}]}>Log In</Text>
          <Text style={[AppFontStyle.MEDIUM_15, {marginTop: 40}]}>
            Welcome back. Sign in to continue
          </Text>
          <TextInput
            style={{
              backgroundColor: AppColors.lightAccentColor,
              width: '100%',
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
              marginTop: 30,
              padding: 20,
              borderColor: AppColors.lightGrey,
              borderBottomWidth: 1.5,
            }}
            placeholder="Email or Phone Number"
            placeholderTextColor={AppColors.lightText}
          />
          <TextInput
            style={{
              backgroundColor: AppColors.lightAccentColor,
              width: '100%',
              borderBottomLeftRadius: 15,
              borderBottomRightRadius: 15,
              padding: 20,
              marginBottom: 50,
            }}
            placeholder="Password"
            placeholderTextColor={AppColors.lightText}
          />
          <CommonButton
            title={'Sign In'}
            buttonStyle={{borderRadius: 15, width: '100%'}}
          />
          <Text
            style={[
              AppFontStyle.MEDIUM_15,
              {marginTop: 20, color: AppColors.appThemeColor},
            ]}>
            Lost password
          </Text>
          <View style={styles.rowContainer}>
            <TouchableOpacity style={styles.borderedContainer}>
              <AntDesignIcon
                name="facebook-square"
                size={35}
                color={AppColors.blackColor}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.borderedContainer}>
              <AntDesignIcon
                name="google"
                size={35}
                color={AppColors.blackColor}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.borderedContainer}>
              <AntDesignIcon
                name="apple1"
                size={35}
                color={AppColors.blackColor}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: AppColors.whiteColor,
  },
  contentContainer: {
    padding: 20,
    alignItems: 'center',
    minHeight: FULL_HEIGHT,
  },
  separator: {
    borderColor: AppColors.whiteColor,
    borderWidth: 0.5,
    borderBottomColor: AppColors.lightGrey,
    width: '25%',
    backgroundColor: AppColors.whiteColor,
    height: 0,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  borderedContainer: {
    borderRadius: 15,
    borderColor: AppColors.lightGrey,
    margin: 6,
    padding: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;
