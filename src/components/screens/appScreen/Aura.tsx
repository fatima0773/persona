/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {StyleSheet, View, ScrollView, SafeAreaView, Text} from 'react-native';
import {AppColors} from '../../../utility/AppColors';
import {AppFontStyle} from '../../../styles/AppFontStyle';
import {FULL_HEIGHT} from '../../../utility/Constant';

const Aura = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.contentContainer}>
          <Text
            style={[
              AppFontStyle.BOLD_18,
              {
                color: AppColors.appThemeColor,
              },
            ]}>
            Aura
          </Text>
          <View style={{alignItems: 'flex-start', width: '100%'}}>
            <Text
              style={[
                AppFontStyle.BOLD_30,
                {
                  color: AppColors.blackColor,
                },
              ]}>
              Bonus Tip
            </Text>
            <Text
              style={[
                AppFontStyle.BOLD_18,
                {
                  color: AppColors.blackColor,
                  marginTop: 25,
                },
              ]}>
              Lorem Ipsum is not simply
            </Text>
            <Text
              style={[
                AppFontStyle.REGULAR_14,
                {
                  color: AppColors.blackColor,
                  marginTop: 15,
                  marginBottom: 10,
                },
              ]}>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through
            </Text>
            <Text
              style={[
                AppFontStyle.BOLD_18,
                {
                  color: AppColors.blackColor,
                  marginTop: 25,
                },
              ]}>
              Lorem Ipsum is not simply
            </Text>
            <Text
              style={[
                AppFontStyle.REGULAR_14,
                {
                  color: AppColors.blackColor,
                  marginTop: 15,
                  marginBottom: 10,
                },
              ]}>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through
            </Text>
            <Text
              style={[
                AppFontStyle.BOLD_18,
                {
                  color: AppColors.blackColor,
                  marginTop: 25,
                },
              ]}>
              Lorem Ipsum is not simply
            </Text>
            <Text
              style={[
                AppFontStyle.REGULAR_14,
                {
                  color: AppColors.blackColor,
                  marginTop: 15,
                  marginBottom: 10,
                },
              ]}>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through
            </Text>
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
    padding: 10,
  },
  contentContainer: {
    minHeight: FULL_HEIGHT,
    alignItems: 'center',
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
    justifyContent: 'center',
  },
  cameraIconContainer: {
    height: 110,
    width: 110,
    borderRadius: 1000,
    backgroundColor: 'rgba(217, 217, 217, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  textInput: {
    borderBottomColor: AppColors.lightGrey,
    borderBottomWidth: 1,
    marginVertical: 20,
    textAlign: 'center',
    paddingHorizontal: 45,
    marginBottom: 40,
  },
  captionInput: {
    borderBottomColor: AppColors.lightGrey,
    borderBottomWidth: 1,
    marginVertical: 20,
    width: '100%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Aura;
