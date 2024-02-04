/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {TextInput, StyleSheet, TouchableOpacity, View} from 'react-native';
import {AppColors} from '../../utility/AppColors';
import {AppFontStyle} from '../../styles/AppFontStyle';
import Icon from 'react-native-vector-icons/Entypo';
import {s} from 'react-native-size-matters';

export function CommonQuantityField({
  placeholder,
  value = 0,
  onChangeText,
  onBlur,
  onFocus,
  height = 50,
}: any) {
  const [localValue, setLocalValue] = useState(value);
  const handleBlur = () => {
    if (onBlur) {
      onBlur();
    }
  };

  const handleIncrease = () => {
    const newValue = localValue + 1;
    setLocalValue(newValue);
    onChangeText(newValue);
  };

  const handleDecrease = () => {
    const newValue = localValue > 0 ? localValue - 1 : 0;
    setLocalValue(newValue);
    onChangeText(newValue);
  };

  return (
    <View style={[styles.inputContainer, {height: s(height)}]}>
      <TouchableOpacity onPress={handleDecrease} style={styles.arrowButton}>
        <Icon
          name="chevron-down"
          color={localValue === 0 ? AppColors.lightGrey : AppColors.blackColor}
          size={20}
        />
      </TouchableOpacity>
      <TextInput
        style={[styles.input, AppFontStyle.REGULAR_15]}
        placeholder={placeholder}
        placeholderTextColor={AppColors.lightGrey}
        value={localValue.toString()}
        onFocus={onFocus}
        onBlur={handleBlur}
        keyboardType="numeric"
      />
      <TouchableOpacity onPress={handleIncrease} style={styles.arrowButton}>
        <Icon name="chevron-up" color={AppColors.blackColor} size={20} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    color: AppColors.primaryText,
    borderColor: AppColors.lightGrey,
    borderWidth: 0.7,
    borderRadius: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: AppColors.whiteColor,
  },
  input: {
    paddingHorizontal: s(5),
    textAlign: 'center',
  },
  arrowButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
});
