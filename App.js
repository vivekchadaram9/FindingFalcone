import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoardingScreen from './components/OnBoardingScreen';
import Results from './components/Results';
import MainGame from './components/mainGame/Component';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="OnBoardingScreen"
          component={OnBoardingScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="MainGame" component={MainGame} />
        <Stack.Screen name="Results" component={Results} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
