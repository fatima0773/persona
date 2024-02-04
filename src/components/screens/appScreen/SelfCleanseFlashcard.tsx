/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {StyleSheet, View, SafeAreaView, Text} from 'react-native';
import {AppColors} from '../../../utility/AppColors';
import {AppFontStyle} from '../../../styles/AppFontStyle';
import CommonButton from '../../common/CommonButton';
import FlashCard from '../../common/FlashCard';
import {useState} from 'react';
import {FULL_WIDTH} from '../../../utility/Constant';

const SelfCleanseFlashCard = () => {
  const [step, setStep] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={[
          AppFontStyle.BOLD_15,
          {
            color: AppColors.appThemeColor,
          },
        ]}>
        Self Cleanse
      </Text>
      {step === 0 && (
        <View style={styles.contentContainer}>
          <FlashCard
            content={
              'What are some unrealistic expectations or pressures you place on  yourself?'
            }
          />
          <CommonButton
            buttonStyle={{
              borderRadius: 15,
              width: '50%',
              marginTop: 50,
            }}
            title={'Next'}
            onTap={() => setStep(1)}
          />
          <Text
            style={[
              AppFontStyle.BOLD_15,
              {
                color: AppColors.appThemeColor,
                marginTop: 20,
              },
            ]}>
            View Previous Card
          </Text>
        </View>
      )}
      {step === 1 && (
        <View style={styles.contentContainer}>
          <Text
            style={[
              AppFontStyle.SEMI_BOLD_23,
              {
                color: AppColors.blackColor,
                textAlign: 'center',
                padding: 15,
              },
            ]}>
            Take this moment to reflect on your answers. Allow yourself to
            acknowledge these concerns and say your final goodbyes to what
            you’ve written down.
          </Text>
          <CommonButton
            buttonStyle={{
              borderRadius: 15,
              width: '50%',
            }}
            title={'Next'}
            onTap={() => setStep(2)}
          />
          <Text
            onPress={() => setStep(0)}
            style={[
              AppFontStyle.BOLD_15,
              {
                color: AppColors.appThemeColor,
                marginTop: 20,
              },
            ]}>
            View Previous Card
          </Text>
        </View>
      )}
      {step === 2 && (
        <View style={styles.contentContainer}>
          <Text
            style={[
              AppFontStyle.SEMI_BOLD_23,
              {
                color: AppColors.blackColor,
                textAlign: 'center',
                padding: 15,
              },
            ]}>
            Now, safely burn or destroy the piece of paper as a symbolic gesture
            of letting go. This is how you symbolically kill your current
            opinion of yourself which was formed by others. You are washing away
            that self-view and cleansing yourself of your original self-concept.
          </Text>
          <CommonButton
            buttonStyle={{
              borderRadius: 15,
              width: '50%',
            }}
            title={'Next'}
            onTap={() => setStep(3)}
          />
          <Text
            onPress={() => setStep(1)}
            style={[
              AppFontStyle.BOLD_15,
              {
                color: AppColors.appThemeColor,
                marginTop: 20,
              },
            ]}>
            View Previous Card
          </Text>
        </View>
      )}
      {step === 3 && (
        <View style={styles.contentContainer}>
          <Text
            style={[
              AppFontStyle.SEMI_BOLD_23,
              {
                color: AppColors.blackColor,
                textAlign: 'center',
                padding: 15,
              },
            ]}>
            Congratulations! You are now free to be whoever you want to be.
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: AppColors.whiteColor,
    alignItems: 'center',
    padding: 15,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: '100%',
    width: FULL_WIDTH,
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
  optionContainer: {
    backgroundColor: AppColors.whiteColor,
    borderRadius: 13,
    shadowColor: AppColors.transparentBlackHard,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 5,
    width: '100%',
    flexDirection: 'row',
    padding: 15,
    marginVertical: 5,
    justifyContent: 'space-between',
  },
});

export default SelfCleanseFlashCard;
