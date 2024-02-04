/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {AppColors} from '../../../utility/AppColors';
import {AppFontStyle} from '../../../styles/AppFontStyle';
import CommonButton from '../../common/CommonButton';
import FlashCard from '../../common/FlashCard';
import {useState} from 'react';
import {FULL_WIDTH} from '../../../utility/Constant';

const Journal = () => {
  const [step, setStep] = useState(0);
  const ranking = [
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
      <ScrollView>
        <View style={[styles.container, {padding: 15}]}>
          <Text
            style={[
              AppFontStyle.BOLD_30,
              {
                color: AppColors.blackColor,
                marginTop: 30,
              },
            ]}>
            Journal
          </Text>
          <Text
            style={[
              AppFontStyle.REGULAR_15,
              {
                color: AppColors.blackColor,
                marginTop: 10,
                textAlign: 'center',
                marginBottom: 20,
              },
            ]}>
            Rank all peaceful pursuits you have{'\n'}tried based on how
            effective they were for you.
          </Text>
          {ranking.map((item, index) => (
            <TouchableOpacity style={styles.optionContainer} key={index}>
              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '100%',
                }}>
                <View
                  style={{
                    height: 25,
                    width: 25,
                    borderRadius: 100,
                    backgroundColor: AppColors.blackColor,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={[
                      AppFontStyle.REGULAR_15,
                      {color: AppColors.whiteColor},
                    ]}>
                    {index + 1}
                  </Text>
                </View>
                <Text style={[AppFontStyle.REGULAR_15, {marginHorizontal: 10}]}>
                  {item}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
          <CommonButton
            title={'Done'}
            buttonStyle={{borderRadius: 15, width: '50%'}}
          />
          <Text
            style={[AppFontStyle.BOLD_15, {color: AppColors.appThemeColor}]}>
            Complete Ranking Later
          </Text>
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
    alignItems: 'center',
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: '100%',
    width: FULL_WIDTH,
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
    backgroundColor: 'rgba(243, 241, 248, 1)',
    borderRadius: 13,
    width: '100%',
    flexDirection: 'row',
    padding: 15,
    marginVertical: 5,
    justifyContent: 'space-between',
  },
});

export default Journal;
