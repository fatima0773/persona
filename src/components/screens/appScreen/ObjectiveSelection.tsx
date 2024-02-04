/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {AppColors} from '../../../utility/AppColors';
import {AppFontStyle} from '../../../styles/AppFontStyle';
import {FULL_HEIGHT} from '../../../utility/Constant';
import {AppImages} from '../../../utility/AppImages';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CommonButton from '../../common/CommonButton';

const ObjectiveSelection = () => {
  const objectives = [
    'HBOT',
    'Cryotherapy',
    'Sensory Deprivation',
    'Animal Assisted Therapy',
    'Cry',
    'Barefoot Walking',
    'Laughter Yoga',
    'Mindful Eating',
    'Acupressure / Massage',
  ];
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={{alignItems: 'flex-start', width: '100%'}}>
            <Image
              source={AppImages.IMG_DIRECTORY_ONE}
              style={{marginVertical: 10, height: 32}}
              resizeMode="contain"
            />
            <Text
              style={[
                AppFontStyle.BOLD_30,
                {
                  color: AppColors.blackColor,
                },
              ]}>
              Peaceful Pursuits
            </Text>
            <Text
              style={[
                AppFontStyle.REGULAR_14,
                {
                  color: AppColors.secondaryText,
                  marginTop: 15,
                  marginBottom: 25,
                },
              ]}>
              Over the course of this confidence journey we will try different
              cortisol reduction techniques. The techniques are called peaceful
              pursuits At the end, you will rank them based on how effective
              they were for you. The first few pursuits on this list are the
              most difficult, expensive and time consuming to arrange. Engaging
              in challenging self-care activities reinforces the message to
              yourself that you prioritize personal well-being. This act rewires
              the neural circuitry of the brain and reshapes one's perception of
              self-worth, affirming their inherent value and entitlement to
              attention and care. Feel free to hide any pursuits by tapping the
              minus icon on the right side.
            </Text>
            <Text
              style={[
                AppFontStyle.SEMI_BOLD_14,
                {
                  color: AppColors.blackColor,
                  alignSelf: 'center',
                },
              ]}>
              Objectives
            </Text>
            <Text
              style={[
                AppFontStyle.REGULAR_14,
                {
                  color: AppColors.secondaryText,
                  marginTop: 10,
                  marginBottom: 25,
                },
              ]}>
              Please select any 3 peaceful pursuits from this list and give them
              a try:
            </Text>
            {objectives.map((item, index) => (
              <TouchableOpacity style={styles.optionContainer}>
                <View
                  key={index}
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <MaterialIcons
                    name="add"
                    size={30}
                    color={AppColors.blackColor}
                  />
                  <Text
                    style={[AppFontStyle.REGULAR_15, {marginHorizontal: 10}]}>
                    {item}
                  </Text>
                </View>
                <MaterialIcons
                  name="hide-source"
                  size={30}
                  color={AppColors.cancelColor}
                />
              </TouchableOpacity>
            ))}
            <View
              style={{
                marginBottom: 40,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <CommonButton
                buttonStyle={{borderRadius: 15, width: '100%'}}
                title={'Continue'}
              />
              <Text
                style={[
                  AppFontStyle.BOLD_15,
                  {color: AppColors.appThemeColor},
                ]}>
                View Hidden Pursuits
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: AppColors.whiteColor,
    padding: 15,
  },
  contentContainer: {
    minHeight: FULL_HEIGHT,
    alignItems: 'center',
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

export default ObjectiveSelection;
