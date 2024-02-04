/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {StyleSheet, SafeAreaView, Text, View} from 'react-native';
import {AppColors} from '../../../utility/AppColors';
import {AppFontStyle} from '../../../styles/AppFontStyle';
import CommonButton from '../../common/CommonButton';

const WelcomeScreen = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowButton(true);
    }, 3000);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={AppFontStyle.BOLD_40}>Welcome John</Text>
        <Text
          style={[
            AppFontStyle.REGULAR_13,
            {marginVertical: 10, marginBottom: 25},
          ]}>
          Let’s begin your confidence journey.
        </Text>
        {showButton && (
          <CommonButton
            title={'Start'}
            textStyle={[AppFontStyle.BOLD_23, {color: AppColors.whiteColor}]}
            buttonStyle={{width: 180}}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: AppColors.whiteColor,
    borderRightColor: 'yellow',
  },
  contentContainer: {
    alignItems: 'center',
    flex: 1,
    height: '100%',
    justifyContent: 'center',
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
  textInput: {
    borderBottomColor: AppColors.lightGrey,
    borderBottomWidth: 1,
    marginVertical: 10,
    textAlign: 'center',
    padding: 10,
  },
});

export default WelcomeScreen;
