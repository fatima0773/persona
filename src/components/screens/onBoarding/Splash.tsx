/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {StyleSheet, Text, ImageBackground} from 'react-native';
import {AppColors} from '../../../utility/AppColors';
import {AppFontStyle} from '../../../styles/AppFontStyle';
import {AppImages} from '../../../utility/AppImages';
import {FULL_HEIGHT} from '../../../utility/Constant';
const Splash = () => {
  return (
    <ImageBackground
      resizeMode="contain"
      style={styles.container}
      source={AppImages.IMG_SPLASH_BACKGROUND}>
      <Text style={[AppFontStyle.SEMI_BOLD_18, {color: AppColors.blackColor}]}>
        INTRO
      </Text>
      <Text
        style={{
          fontSize: 67,
          fontFamily: 'SF-Pro-Display-Bold',
          textAlign: 'center',
          color: AppColors.blackColor,
        }}>
        YOU NEED{'\n'}TO FEEL{'\n'}AT PEACE{'\n'}MORE{'\n'}THAN YOU{'\n'}NEED TO
        {'\n'}FEEL{'\n'}IN{'\n'}CONTROL
      </Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    height: FULL_HEIGHT,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Splash;
