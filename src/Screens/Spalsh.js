import React, { useEffect, useState } from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Animated,
  Dimensions,
  StatusBar,
  ActivityIndicator
} from 'react-native';
import { Colors } from '../theme/color';
import Lottie from 'lottie-react-native';
const { height } = Dimensions.get('window');

const Splash = props => {
  const navigation = props.navigation;
  const [Start, setStart] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Onboarding2');
    }, 3900);
    return () => clearTimeout(timer);
  });

  useEffect(() => {
    setTimeout(() =>
      setStart(false), 3500);
  });

  const LeftAnimate = new Animated.ValueXY({ x: -220, y: 200 })

  useEffect(() => {
    Animated.timing(
      LeftAnimate,
      {
        toValue: { x: 0, y: 0 },
        duration: 600,
        useNativeDriver: true
      }
    ).start();

  })

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.PRIMARY_1} barStyle="dark-content" />

      <View style={{ height: '100%' }}>
        {
          Start == true ?
            < Animated.Image
              source={require('../assets/images/logo.png')}
              style={{
                height: '50%',
                width: '50%',
                resizeMode: 'contain',
                alignSelf: 'center',
                top: height * 0.18,
                transform: [
                  { translateY: LeftAnimate.y }
                ]
              }}
            />
            :
            <View>

              < Animated.Image
                source={require('../assets/images/first2.jpg')}
                style={{
                  height: '100%',
                  width: '150%',
                  resizeMode: 'contain',
                  alignSelf: 'center',
                  backgroundColor: Colors.PRIMARY_2,
                  opacity: 0.6,
                  zIndex: 1,
                  transform: [
                    { translateX: LeftAnimate.x }
                  ]
                }}
              />
              <ActivityIndicator size={45} color={Colors.PRIMARY_2}
                style={{
                  height: height * 0.065,
                  width: height * 0.065,
                  backgroundColor: Colors.PRIMARY_1,
                  borderRadius: 50,
                  alignSelf: 'center',
                  position:'absolute',
                  zIndex: 2,
                  bottom: height * 0.45
                }} />
            </View>
        }
      </View>
    </SafeAreaView>
  );
};
export default Splash;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY_1,
  },


});
