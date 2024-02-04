/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import {AppColors} from '../../utility/AppColors';
import {s} from 'react-native-size-matters';
import {AppFontStyle} from '../../styles/AppFontStyle';
import SelectDropdown from 'react-native-select-dropdown';
import PropTypes from 'prop-types';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default function CommonDropDown(props: any) {
  const {
    data,
    title,
    onSelectItem,
    buttonStyle,
    dropdownStyle,
    disabled = false,
    selectedRowStyle,
    iconColor,
    height = 50,
  } = props;

  return (
    <SelectDropdown
      data={data}
      disabled={disabled}
      onSelect={onSelectItem}
      buttonStyle={[
        {
          backgroundColor: AppColors.whiteColor,
          borderColor: AppColors.lightGrey,
          borderWidth: 0.7,
          borderRadius: s(6),
          height: s(height),
          width: '100%',
          marginVertical: 10,
        },
        buttonStyle,
      ]}
      renderCustomizedButtonChild={(selectedItem, index) => {
        return (
          <View key={index}>
            {selectedItem ? (
              <Text
                style={[
                  AppFontStyle.REGULAR_15,
                  {color: AppColors.secondaryText},
                ]}>
                {selectedItem}
              </Text>
            ) : (
              <Text
                style={[AppFontStyle.REGULAR_15, {color: AppColors.lightGrey}]}>
                {title}
              </Text>
            )}
          </View>
        );
      }}
      selectedRowTextStyle={{color: AppColors.whiteColor}}
      selectedRowStyle={[
        {backgroundColor: AppColors.lightGrey},
        selectedRowStyle,
      ]}
      dropdownStyle={[
        {
          borderColor: AppColors.whiteColor,
          borderWidth: 1,
          backgroundColor: AppColors.whiteColor,
          borderBottomEndRadius: s(6),
          borderBottomStartRadius: s(6),
        },
        dropdownStyle,
      ]}
      renderDropdownIcon={isOpened => {
        return isOpened ? (
          <MaterialIcon
            size={20}
            name="keyboard-arrow-up"
            color={AppColors.lightGrey}
          />
        ) : (
          <MaterialIcon
            size={20}
            name="keyboard-arrow-down"
            color={iconColor ? AppColors.whiteColor : AppColors.lightGrey}
          />
        );
      }}
      dropdownIconPosition={'right'}
      rowStyle={{borderBottomColor: '#cccccc94', height: s(34)}}
      renderCustomizedRowChild={(item, index) => {
        return (
          <View
            key={index}
            style={{
              paddingHorizontal: s(10),
              gap: s(8),
              justifyContent: 'flex-start',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={[AppFontStyle.REGULAR_15, {flex: 1}]}>{item}</Text>
          </View>
        );
      }}
      dropdownOverlayColor={AppColors.transparent}
    />
  );
}

CommonDropDown.propType = {
  data: PropTypes.array,
  title: PropTypes.string,
  onSelectItem: PropTypes.func,
  arrowIconStyle: PropTypes.any,
  buttonStyle: PropTypes.any,
  dropdownStyle: PropTypes.any,
};

CommonDropDown.defaultProps = {
  data: [],
  title: '',
  onSelectItem: () => {},
};
