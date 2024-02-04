/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {AppColors} from '../../../utility/AppColors';
import {AppFontStyle} from '../../../styles/AppFontStyle';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CommonButton from '../../common/CommonButton';
import Modal from 'react-native-modal';
import {useState} from 'react';
import {FULL_HEIGHT} from '../../../utility/Constant';
const Challenge = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const challenges = [
    {
      title: 'Stare Down',
      content:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    },
    {
      title: 'Pre-game Confidence Boost',
      content:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    },
    {
      title: 'Ice Breakers',
      content:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    },
    {
      title: 'Try a Self-Exploration',
      content:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    },
  ];
  const [challengeIndex, setChallengeIndex] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.contentContainer}>
          <Text
            style={[AppFontStyle.BOLD_30, {marginTop: 30, marginBottom: 10}]}>
            Challenge 2
          </Text>
          <Text style={AppFontStyle.SEMI_BOLD_18}>
            Say hello to your second challenge.
          </Text>
          <View style={{marginTop: 10}}>
            {/* Stare Down */}
            <View style={styles.rowContainer}>
              <Text
                style={[
                  AppFontStyle.SEMI_BOLD_18,
                  {backgroundColor: '#00FFFF', padding: 3},
                ]}>
                Stare Down
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(true);
                  setChallengeIndex(0);
                }}>
                <AntDesign name="plus" color={AppColors.blackColor} size={22} />
              </TouchableOpacity>
            </View>

            {/* Pre-game Confidence Boost */}
            <View style={styles.rowContainer}>
              <Text
                style={[
                  AppFontStyle.SEMI_BOLD_18,
                  {backgroundColor: '#00FFFF', padding: 3},
                ]}>
                Pre-game Confidence Boost
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(true);
                  setChallengeIndex(1);
                }}>
                <AntDesign name="plus" color={AppColors.blackColor} size={22} />
              </TouchableOpacity>
            </View>

            {/* Ice Breakers */}
            <View style={styles.rowContainer}>
              <Text
                style={[
                  AppFontStyle.SEMI_BOLD_18,
                  {backgroundColor: '#00FFFF', padding: 3},
                ]}>
                Ice Breakers
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(true);
                  setChallengeIndex(2);
                }}>
                <AntDesign name="plus" color={AppColors.blackColor} size={22} />
              </TouchableOpacity>
            </View>

            {/* Try a Self-Exploration */}
            <View style={styles.rowContainer}>
              <Text
                style={[
                  AppFontStyle.SEMI_BOLD_18,
                  {backgroundColor: '#00FFFF', padding: 3},
                ]}>
                Try a Self-Exploration
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(true);
                  setChallengeIndex(3);
                }}>
                <AntDesign name="plus" color={AppColors.blackColor} size={22} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <CommonButton
        title={'Continue'}
        buttonStyle={{
          borderRadius: 15,
          alignSelf: 'center',
          width: '90%',
        }}
      />
      <Modal
        isVisible={isModalVisible}
        animationIn="slideInUp"
        // animationOut="slideOutDown"
        swipeDirection="up"
        style={{
          margin: 0,
          justifyContent: 'center',
          alignItems: 'center',
          height: FULL_HEIGHT,
        }}>
        <View
          style={{
            backgroundColor: AppColors.whiteColor,
            width: '100%',
            padding: 15,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            paddingVertical: 35,
            height: '90%',
            bottom: 0,
            position: 'absolute',
          }}>
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
            }}>
            <AntDesign name="left" size={20} color={AppColors.appThemeColor} />
            <Text
              style={[
                AppFontStyle.BOLD_15,
                {color: AppColors.appThemeColor, marginHorizontal: 5},
              ]}>
              Back
            </Text>
          </TouchableOpacity>
          <Text
            style={[
              AppFontStyle.BOLD_36,
              {color: AppColors.primaryText, textAlign: 'center'},
            ]}>
            {challenges[challengeIndex].title}
          </Text>
          <Text
            style={[
              AppFontStyle.REGULAR_16,
              {textAlign: 'center', lineHeight: 25, marginVertical: 25},
            ]}>
            {challenges[challengeIndex].content}
          </Text>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: AppColors.whiteColor,
  },
  backgroundContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  contentContainer: {
    padding: 25,
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
    marginVertical: 8,
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

export default Challenge;
