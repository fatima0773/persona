/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {StyleSheet, Text, View} from 'react-native';
import {AppColors} from '../../utility/AppColors';
import {AppFontStyle} from '../../styles/AppFontStyle';

const FlashCard = (props: any) => {
  return (
    <>
      <View style={styles.container} />
      <View style={[styles.container, {width: '85%', marginTop: -3}]} />
      <View
        style={[
          styles.container,
          {
            width: '90%',
            marginTop: -3,
            borderRadius: 10,
            padding: 40,
            height: 200,
          },
        ]}>
        <Text
          style={[
            AppFontStyle.SEMI_BOLD_23,
            {color: AppColors.blackColor, textAlign: 'center'},
          ]}>
          {props.content}
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: AppColors.whiteColor,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: AppColors.transparentBlackHard,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 10,
    width: '80%',
  },
});

export default FlashCard;
