/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  FlatList,
  Text,
} from 'react-native';
import {AppColors} from '../../../utility/AppColors';
import CommonButton from '../../common/CommonButton';
import {Logo} from '../../common/Logo';
import {AppImages} from '../../../utility/AppImages';
import {useState} from 'react';
import {AppFontStyle} from '../../../styles/AppFontStyle';
import {s} from 'react-native-size-matters';
import {FULL_HEIGHT, FULL_WIDTH} from '../../../utility/Constant';
const Intro = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const renderComponents = ({item}: any) => {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: FULL_HEIGHT - 400,
        }}>
        <Image
          style={{
            width: s(200),
          }}
          source={item.image}
          resizeMode="contain"
        />
        {item.id === 5 ? (
          <Text
            style={[
              AppFontStyle.REGULAR_13,
              {color: AppColors.secondaryText, marginVertical: 5},
            ]}>
            COMING SOON
          </Text>
        ) : null}
        <Text style={[AppFontStyle.BOLD_30, {color: AppColors.blackColor}]}>
          {item.title}
        </Text>
        <View
          style={{
            width: FULL_WIDTH,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={[
              AppFontStyle.REGULAR_16,
              {
                color: AppColors.blackColor,
                textAlign: 'center',
                marginVertical: 10,
                width: '90%',
              },
            ]}>
            {item.content}
          </Text>
        </View>
      </View>
    );
  };
  const renderDot = (index: any) => {
    const dotStyle = [styles.dot, activeIndex === index && styles.activeDot];
    return <View style={dotStyle} key={index} />;
  };

  const step = [
    {
      id: 1,
      image: AppImages.IMG_LIVE_LIBRARY,
      title: 'Live Library',
      content:
        'Lifetime access to the content library with all future updates and new discoveries.',
    },
    {
      id: 2,
      image: AppImages.IMG_CHALLENGES,
      title: 'Challenges',
      content:
        'Step outside your comfort zone and overcome anxiety with real-world challenges.',
    },
    {
      id: 3,
      image: AppImages.IMG_LESSONS,
      title: 'Fun-size lessons',
      content: 'Concise, to the point, no filler text.',
    },
    {
      id: 4,
      image: AppImages.IMG_COMMUNITY,
      title: 'Community Videos',
      content:
        'Watch your peers fearlessly embrace new challenges and feel encouraged to try for yourself.',
    },
    {
      id: 5,
      image: AppImages.IMG_VIDEO_LESSONS,
      title: 'Exclusive Video Lessons',
      content: 'Learn from the most confident individuals in the world.',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <View style={styles.contentContainer}>
            <View style={styles.rowContainer}>
              <Logo />
              <CommonButton title={'SIGN UP'} />
            </View>
          </View>
          <View
            style={{
              width: FULL_WIDTH,
              // height: '100%',
              alignItems: 'center',
            }}>
            <FlatList
              data={step}
              renderItem={renderComponents}
              keyExtractor={(_, index) => index.toString()}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              onMomentumScrollEnd={event => {
                const offsetX = event.nativeEvent.contentOffset.x;
                const index = Math.round(offsetX / FULL_WIDTH);
                setActiveIndex(index);
              }}
            />
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={styles.dotContainer}>
          {step.map((_, index) => renderDot(index))}
        </View>
        <CommonButton
          title={'Log In'}
          buttonStyle={{width: FULL_WIDTH - 10, borderRadius: 15}}
        />
      </View>
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
    marginTop: 10,
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
    justifyContent: 'space-between',
  },
  errorMessage: {
    color: AppColors.errorMsgText,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 5,
    marginHorizontal: 3,
    backgroundColor: AppColors.lightText,
    opacity: 0.6,
  },
  activeDot: {
    backgroundColor: AppColors.appThemeColor,
    opacity: 1,
  },
  dotContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginBottom: 10,
    // position: 'absolute',
    // bottom: 0,
  },
});

export default Intro;
