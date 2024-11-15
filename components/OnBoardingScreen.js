import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {globalStyles, headingFontSize} from '../styles/globalStyles';

const OnBoardingScreen = ({navigation}) => {
  const goToMainGame = () => {
    navigation.navigate('MainGame');
  };
  return (
    <ImageBackground
      style={globalStyles.mainContainer}
      source={require('../resources/onboarding.jpeg')}>
      <Text style={styles.mainHeading}>Finding Falcone</Text>
      <TouchableOpacity onPress={goToMainGame} style={styles.playButton}>
        <Text style={styles.playText}>Play</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  mainHeading: {
    fontSize: headingFontSize,
    fontWeight: 'bold',
    color: 'white',
  },
  playButton: {
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  playText: {
    color: 'black',
  },
});
