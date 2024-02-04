/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {Image, Text, TouchableOpacity} from 'react-native';
import {AppColors} from '../../utility/AppColors';
import {s} from 'react-native-size-matters';
import {AppFontStyle} from '../../styles/AppFontStyle';
import PropTypes from 'prop-types';

export default function CommonButton(props: any) {
  const {
    isInactive = false,
    title,
    iconStyle,
    prefixIconVisibility,
    buttonStyle,
    textStyle,
    onTap,
    prefixImage,
  } = props;
  return (
    <TouchableOpacity
      disabled={isInactive}
      activeOpacity={0.5}
      style={[
        {
          marginVertical: 10,
          backgroundColor: isInactive
            ? AppColors.inactiveThemeColor
            : AppColors.appThemeColor,
          borderRadius: s(23),
          paddingVertical: s(15),
          paddingHorizontal: s(15),
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: s(8),
        },
        buttonStyle,
      ]}
      onPress={onTap}>
      {prefixIconVisibility ? (
        <Image
          source={prefixImage}
          style={[
            {
              width: s(20),
              height: s(20),
            },
            iconStyle,
          ]}
          resizeMode="contain"
        />
      ) : null}

      <Text
        style={[
          AppFontStyle.SEMI_BOLD_14,
          {color: AppColors.whiteColor},
          textStyle,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

CommonButton.propType = {
  title: PropTypes.string,
  iconStyle: PropTypes.any,
  prefixIconVisibility: PropTypes.bool,
  buttonStyle: PropTypes.any,
  textStyle: PropTypes.any,
  onTap: PropTypes.any,
  prefixImage: PropTypes.string,
};

CommonButton.defaultProps = {
  title: '',
  prefixIconVisibility: false,
  onTap: () => {},
};
