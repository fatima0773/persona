/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {TextInput, StyleSheet, TouchableOpacity, View} from 'react-native';
import {AppColors} from '../../utility/AppColors';
import {AppFontStyle} from '../../styles/AppFontStyle';
import Icon from 'react-native-vector-icons/Entypo';
import {s} from 'react-native-size-matters';

export function CommonInputBox({
  placeholder,
  text,
  style,
  secureTextEntry,
  onChangeText,
  onBlur,
  onFocus,
  editable,
  height = 50,
}: any) {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(secureTextEntry);

  const handleBlur = () => {
    if (onBlur) {
      onBlur();
    }
  };

  const toggleSecureEntry = () => {
    setIsSecureTextEntry(!isSecureTextEntry);
  };

  const styles = StyleSheet.create({
    inputContainer: {
      color: AppColors.primaryText,
      borderColor: AppColors.lightGrey,
      borderWidth: 0.7,
      paddingLeft: 10,
      borderRadius: 10,
      height,
      width: '100%',
      marginVertical: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: AppColors.whiteColor,
    },
    input: {
      paddingHorizontal: s(5),
      width: '80%',
    },
  });

  return (
    <View style={[styles.inputContainer, style, AppFontStyle.REGULAR_15]}>
      <TextInput
        style={[styles.input, style, AppFontStyle.REGULAR_15]}
        placeholder={placeholder}
        placeholderTextColor={AppColors.lightGrey}
        value={text}
        onChangeText={onChangeText}
        onFocus={onFocus}
        onBlur={handleBlur}
        secureTextEntry={isSecureTextEntry}
        editable={editable}
      />
      {secureTextEntry ? (
        <TouchableOpacity onPress={toggleSecureEntry} style={{width: '10%'}}>
          {isSecureTextEntry ? (
            <Icon name="eye" color={AppColors.lightGrey} size={20} />
          ) : (
            <Icon name="eye-with-line" color={AppColors.blackColor} size={20} />
          )}
        </TouchableOpacity>
      ) : null}
    </View>
  );
}
