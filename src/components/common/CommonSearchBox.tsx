/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TextInput, StyleSheet, View} from 'react-native';
import {AppColors} from '../../utility/AppColors';
import {AppFontStyle} from '../../styles/AppFontStyle';
import Icon from 'react-native-vector-icons/AntDesign';
import {s} from 'react-native-size-matters';

export function CommonSearchBox({
  placeholder = 'Search... ',
  text,
  style,
  onChangeText,
  onBlur,
  onFocus,
}: any) {
  const handleBlur = () => {
    if (onBlur) {
      onBlur();
    }
  };

  return (
    <View style={[styles.inputContainer, style, AppFontStyle.REGULAR_15]}>
      <TextInput
        style={[styles.input, style, AppFontStyle.REGULAR_15]}
        placeholder={placeholder}
        placeholderTextColor={AppColors.secondaryText}
        value={text}
        onChangeText={onChangeText}
        onFocus={onFocus}
        onBlur={handleBlur}
      />
      <Icon
        style={{width: '10%'}}
        name="search1"
        color={AppColors.appThemeColor}
        size={20}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    color: AppColors.primaryText,
    borderColor: AppColors.lightGrey,
    borderWidth: 0.7,
    paddingLeft: 10,
    borderRadius: 10,
    height: 50,
    width: '100%',
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: AppColors.whiteColor,
    shadowColor: AppColors.transparentBlack07,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  input: {
    paddingHorizontal: s(5),
    width: '80%',
  },
});
