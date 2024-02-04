/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {StyleSheet, SafeAreaView, Text, View, TextInput} from 'react-native';
import {AppColors} from '../../../utility/AppColors';
import {AppFontStyle} from '../../../styles/AppFontStyle';
import CommonButton from '../../common/CommonButton';

const HelloScreen = () => {
  const [showInputContainer, setShowInputContainer] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowInputContainer(true);
    }, 3000);
  }, []);

  const InputContainer = () => {
    return (
      <View>
        <Text style={[AppFontStyle.REGULAR_13, {marginVertical: 10}]}>
          Please enter your first name
        </Text>
        <TextInput style={[styles.textInput, AppFontStyle.BOLD_48]} />
        <CommonButton title={'Next'} buttonStyle={{borderRadius: 15}} />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={AppFontStyle.BOLD_40}>Hello</Text>
        {showInputContainer && <InputContainer />}
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

export default HelloScreen;
