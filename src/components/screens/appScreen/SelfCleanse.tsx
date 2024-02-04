/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {StyleSheet, View, SafeAreaView, Text} from 'react-native';
import {AppColors} from '../../../utility/AppColors';
import {AppFontStyle} from '../../../styles/AppFontStyle';
import CommonButton from '../../common/CommonButton';

const SelfCleanse = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{padding: 15, alignItems: 'center', justifyContent: 'center'}}>
        <Text
          style={[
            AppFontStyle.BOLD_30,
            {
              color: AppColors.blackColor,
            },
          ]}>
          Self Cleanse
        </Text>
        <Text
          style={[
            AppFontStyle.REGULAR_14,
            {
              color: AppColors.secondaryText,
              marginTop: 15,
              marginBottom: 25,
              textAlign: 'center',
            },
          ]}>
          This exercise aims to identify negative lines of thinking to
          emancipate you from your current opinion of yourself. First, find a
          piece of paper and a writing utensil. On the paper, you will answer a
          few prompts to wash away negative thoughts and perceptions.
        </Text>
      </View>

      <CommonButton
        buttonStyle={{
          borderRadius: 15,
          width: '90%',
          position: 'absolute',
          bottom: 20,
        }}
        title={'Begin'}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: AppColors.whiteColor,
    alignItems: 'center',
    justifyContent: 'center',
    // margin: 90,
    padding: 15,
  },
  contentContainer: {
    // minHeight: FULL_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: '100%',
    backgroundColor: 'red',
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

export default SelfCleanse;
