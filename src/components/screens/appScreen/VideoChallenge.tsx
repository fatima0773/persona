/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import {AppColors} from '../../../utility/AppColors';
import {AppFontStyle} from '../../../styles/AppFontStyle';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {FlatList} from 'react-native';
import {AppImages} from '../../../utility/AppImages';
import {FULL_HEIGHT, FULL_WIDTH} from '../../../utility/Constant';
import Modal from 'react-native-modal';
import {useState} from 'react';
const VideoChallenge = () => {
  const [isAddVideo, setIsAddVideo] = useState(true);
  const submissionData = [
    {
      id: '1',
      name: 'John Williams',
      bg: AppImages.BG_ONE,
      profile: AppImages.PROFILE_ONE,
    },
    {
      id: '2',
      name: 'Luci Carter',
      bg: AppImages.BG_TWO,
      profile: AppImages.PROFILE_FIVE,
    },
    {
      id: '3',
      name: 'Sarena Williams',
      bg: AppImages.BG_THREE,
      profile: AppImages.PROFILE_THREE,
    },
    {
      id: '4',
      name: 'Mark Voughn',
      bg: AppImages.BG_FOUR,
      profile: AppImages.PROFILE_FOUR,
    },
    {
      id: '5',
      name: 'Steven Or',
      bg: AppImages.BG_FIVE,
      profile: AppImages.PROFILE_FIVE,
    },
    {
      id: '6',
      name: 'John Williams',
      bg: AppImages.BG_SIX,
      profile: AppImages.PROFILE_SIX,
    },
    {
      id: '7',
      name: 'Steven Or',
      bg: AppImages.BG_FIVE,
      profile: AppImages.PROFILE_FIVE,
    },
    {
      id: '8',
      name: 'John Williams',
      bg: AppImages.BG_SIX,
      profile: AppImages.PROFILE_SIX,
    },
  ];
  const Item = ({title, bg, profile}: any) => (
    <ImageBackground
      source={bg}
      style={{
        height: FULL_WIDTH / 3,
        width: FULL_WIDTH / 3,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15,
      }}
      resizeMode="contain">
      <Image source={profile} style={{width: 50}} resizeMode="contain" />
      <Text style={[AppFontStyle.BOLD_12, {color: AppColors.whiteColor}]}>
        {title}
      </Text>
    </ImageBackground>
  );

  const renderItem = ({item}: any) => (
    <Item title={item.name} bg={item.bg} profile={item.profile} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text
          style={[
            AppFontStyle.BOLD_30,
            {marginTop: 30, marginBottom: 10, color: AppColors.whiteColor},
          ]}>
          Challenge 1
        </Text>
        <Text
          style={[
            AppFontStyle.BOLD_19,
            {marginBottom: 10, color: AppColors.whiteColor},
          ]}>
          Add a Video
        </Text>
        <Text
          style={[
            AppFontStyle.BOLD_14,
            {marginBottom: 10, color: AppColors.lightGrey},
          ]}>
          Optional
        </Text>
        <View style={styles.rowContainer}>
          <TouchableOpacity
            style={styles.borderedContainer}
            onPress={() => setIsAddVideo(true)}>
            <AntDesign name="plus" color={AppColors.whiteColor} size={30} />
          </TouchableOpacity>
          <Text
            style={[
              AppFontStyle.REGULAR_14,
              {
                color: AppColors.whiteColor,
                width: '70%',
                marginHorizontal: 5,
              },
            ]}>
            Submit a video of yourself (and any friends) completing the
            challenge for a chance to be featured on the platform. Your
            submission will be reviewed by the Persona team and may or may not
            be selected to be displayed in the app.
          </Text>
        </View>
      </View>
      <FlatList
        data={submissionData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={3}
        contentContainerStyle={{
          alignItems: 'flex-start',
        }}
      />
      {isAddVideo && (
        <Modal
          isVisible={isAddVideo}
          animationIn="slideInUp"
          swipeDirection="up"
          style={{
            margin: 0,
            justifyContent: 'center',
            alignItems: 'center',
            height: FULL_HEIGHT,
          }}>
          <View style={styles.centeredContainer}>
            <TouchableOpacity style={styles.openGalleryBtn}>
              <Text
                style={[
                  AppFontStyle.BOLD_19,
                  {color: AppColors.appThemeColor},
                ]}>
                Open Gallery
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.openCameraBtn}>
              <Text
                style={[
                  AppFontStyle.BOLD_19,
                  {color: AppColors.appThemeColor},
                ]}>
                Camera
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setIsAddVideo(false)}>
              <Text
                style={[
                  AppFontStyle.BOLD_19,
                  {color: AppColors.appThemeColor},
                ]}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: AppColors.blackColor,
  },
  contentContainer: {
    padding: 25,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  borderedContainer: {
    borderRadius: 15,
    borderColor: AppColors.lightGrey,
    margin: 6,
    padding: 20,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    borderStyle: 'dashed',
    height: 150,
  },
  cancelButton: {
    backgroundColor: AppColors.whiteColor,
    width: '90%',
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  centeredContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 35,
    height: '100%',
    bottom: 0,
    position: 'absolute',
  },
  openGalleryBtn: {
    backgroundColor: AppColors.lightGrey,
    width: '90%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderBottomColor: AppColors.whiteColor,
    borderBottomWidth: 1,
  },
  openCameraBtn: {
    backgroundColor: AppColors.lightGrey,
    width: '90%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default VideoChallenge;
