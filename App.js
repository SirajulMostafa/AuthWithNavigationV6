import React from 'react';
import {StyleSheet,ImageBackground,Image} from 'react-native';

import LoginScreen from './//src/Screens/Login';
import HomeScreen from './/src/Screens/Home'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileDetails from './src/Screens/Home/ProfileDetails';
const App = () => {
  // return <LoginScreen />;
const Stack= createNativeStackNavigator();

  return (

  
    // <ImageBackground source={image} resizeMode="cover" style={styles.image}>
         
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ProfileDetails" component={ProfileDetails} />
    </Stack.Navigator>
  </NavigationContainer>
  
        //  {/* <HomeScreen/> */}
        //  </ImageBackground>
  )
  

};

const styles = StyleSheet.create({
  
  image: {
    flex: 1,
    justifyContent: "center"
  },
  // sectionContainer: {
  //   marginTop: 32,
  //   paddingHorizontal: 24,
  // },
  // sectionTitle: {
  //   fontSize: 24,
  //   fontWeight: '600',
  // },
  // sectionDescription: {
  //   marginTop: 8,
  //   fontSize: 18,
  //   fontWeight: '400',
  // },
  // highlight: {
  //   fontWeight: '700',
  // },
});

export default App;
