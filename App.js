import React from 'react';
import {StyleSheet, ImageBackground, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TabModule } from './src/Routing';
const App = () => {
  return (
    <NavigationContainer>
      <TabModule />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
