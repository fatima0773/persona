/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect} from 'react';
import {Animated, Easing, StyleSheet} from 'react-native';
import {AppColors} from '../../utility/AppColors';

const AnimatedLoaderDot = ({delay}: {delay: any}) => {
  const translateY = new Animated.Value(0);

  useEffect(() => {
    const animatedSequence = Animated.sequence([
      Animated.delay(delay),
      Animated.loop(
        Animated.sequence([
          Animated.timing(translateY, {
            toValue: -15,
            duration: 600,
            easing: Easing.ease,
            useNativeDriver: true,
          }),
          Animated.timing(translateY, {
            toValue: 0,
            duration: 600,
            easing: Easing.ease,
            useNativeDriver: true,
          }),
        ]),
      ),
    ]);

    animatedSequence.start();
  }, [delay, translateY]);

  return (
    <Animated.View
      style={[
        styles.loaderDot,
        {
          transform: [{translateY}],
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  loaderDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: AppColors.whiteColor,
    marginHorizontal: 5,
  },
});

export default AnimatedLoaderDot;
