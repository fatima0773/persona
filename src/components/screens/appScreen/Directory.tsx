/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {AppColors} from '../../../utility/AppColors';
import {AppFontStyle} from '../../../styles/AppFontStyle';
import {FULL_HEIGHT} from '../../../utility/Constant';
import {AppImages} from '../../../utility/AppImages';
const Directory = () => {
  const courseDirectory = [
    {
      id: 0,
      content: [
        'Intro',
        'The Chemistry of Confidence',
        'Pre-game Confidence Boost',
        'Create your Pre-game',
        'Self-Exploration',
        'Challenge 1',
        'Intrinsic vs Extrinsic',
      ],
    },
    {
      id: 1,
      content: [
        'Eye Contact',
        'Challenge 2',
        'Universal Principle of Self-Perception',
        'Challenge 3',
        'Confident Habits',
      ],
    },
    {
      id: 2,
      content: [
        'Hypnosis',
        'Self Cleanse',
        'Challenge 4',
        'Aura',
        'Anti-Confident Habits',
      ],
    },
    {
      id: 3,
      content: ['Journal', 'Challenge 5', 'Reflection', 'Epilogue'],
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.contentContainer}>
          <Text
            style={[AppFontStyle.BOLD_30, {marginTop: 30, marginBottom: 20}]}>
            Directory
          </Text>
          {courseDirectory[0].content.map((item, index) => (
            <TouchableOpacity key={index}>
              <Text style={[AppFontStyle.SEMI_BOLD_18, {marginTop: 10}]}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
          <Image
            style={styles.icon}
            resizeMode="contain"
            source={AppImages.IMG_DIRECTORY_ONE}
          />
          {courseDirectory[1].content.map((item, index) => (
            <TouchableOpacity key={index}>
              <Text style={[AppFontStyle.SEMI_BOLD_18, {marginTop: 10}]}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
          <Image
            style={styles.icon}
            resizeMode="contain"
            source={AppImages.IMG_DIRECTORY_TWO}
          />
          {courseDirectory[2].content.map((item, index) => (
            <TouchableOpacity key={index}>
              <Text style={[AppFontStyle.SEMI_BOLD_18, {marginTop: 10}]}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
          <Image
            style={styles.icon}
            resizeMode="contain"
            source={AppImages.IMG_DIRECTORY_THREE}
          />
          {courseDirectory[3].content.map((item, index) => (
            <TouchableOpacity key={index}>
              <Text style={[AppFontStyle.SEMI_BOLD_18, {marginTop: 10}]}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
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
  },
  contentContainer: {
    padding: 20,
    minHeight: FULL_HEIGHT,
  },
  icon: {height: 30, marginVertical: 15},
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
});

export default Directory;
