import React from 'react';
import "react-native-gesture-handler"
import {StyleSheet, ImageBackground, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { TabModule } from './src/Routing';
import Authantication from './src/Helpers/Auth';
// import {  } from './src/Helpers/Auth';

const App = () => {
  return (
    <NavigationContainer>
      {/* <TabModule /> */}
      <Authantication/>
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
