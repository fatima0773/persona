/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from 'react-native';
import {AppColors} from '../../../utility/AppColors';
import {AppFontStyle} from '../../../styles/AppFontStyle';
import {FULL_HEIGHT} from '../../../utility/Constant';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import CommonButton from '../../common/CommonButton';

const UploadVideo = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        {/* header */}
        <View style={styles.rowContainer}>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              position: 'absolute',
              bottom: 0,
              left: 0,
            }}>
            <AntDesign name="left" size={20} color={AppColors.appThemeColor} />
            <Text
              style={[
                AppFontStyle.BOLD_15,
                {
                  color: AppColors.appThemeColor,
                },
              ]}>
              Back
            </Text>
          </TouchableOpacity>
          <Text style={AppFontStyle.BOLD_15}>Display Profile</Text>
        </View>
        <View style={styles.contentContainer}>
          {/* camera button */}
          <TouchableOpacity style={styles.cameraIconContainer}>
            <Entypo name="camera" size={38} color={AppColors.blackColor} />
          </TouchableOpacity>
          <Text
            style={[AppFontStyle.MEDIUM_12, {color: AppColors.appThemeColor}]}>
            Select Display Picture
          </Text>
          <TextInput
            style={[styles.textInput, AppFontStyle.BOLD_48]}
            value="John"
          />

          {/* uploaded video */}
          <Text style={[AppFontStyle.SEMI_BOLD_14, {alignSelf: 'flex-start'}]}>
            Uploaded Video
          </Text>
          <ImageBackground
            style={{
              flex: 0.7,
              width: '100%',
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            resizeMode="contain"
            source={require('../../../assets/images/video.png')}>
            <Entypo
              name="controller-play"
              size={40}
              color={AppColors.whiteColor}
            />
          </ImageBackground>
          <View style={[styles.captionInput]}>
            <TextInput
              style={[AppFontStyle.REGULAR_15, {width: '100%'}]}
              placeholder="add a caption"
            />
            <AntDesign
              name="closecircle"
              size={20}
              color={AppColors.lightGrey}
              style={{position: 'absolute', right: 0}}
            />
          </View>
          <CommonButton
            buttonStyle={{borderRadius: 15, width: '100%'}}
            title={'Send'}
          />
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
    padding: 10,
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
  cameraIconContainer: {
    height: 110,
    width: 110,
    borderRadius: 1000,
    backgroundColor: 'rgba(217, 217, 217, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  textInput: {
    borderBottomColor: AppColors.lightGrey,
    borderBottomWidth: 1,
    marginVertical: 20,
    textAlign: 'center',
    paddingHorizontal: 45,
    marginBottom: 40,
  },
  captionInput: {
    borderBottomColor: AppColors.lightGrey,
    borderBottomWidth: 1,
    marginVertical: 20,
    width: '100%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default UploadVideo;
