import React from 'react';
import {StyleSheet,ImageBackground,Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LoginScreen from './//src/Screens/Login';
import HomeScreen from './/src/Screens/Home'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileDetails from './src/Screens/Home/ProfileDetails';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const App = () => {
  // return <LoginScreen />;
const Stack= createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

 const HomeStack =()=>{
   return(
    <Stack.Navigator>
    <Stack.Screen name="HomeStack" 
    component={HomeScreen}
    options={{
      title:'Home'
    }} 
     />
    <Stack.Screen name="ProfileDetails"
     component={ProfileDetails}
     options={{
      title:'Profile'
    }} 
     />
  </Stack.Navigator>
   )
 }

  return (

  
    // <ImageBackground source={image} resizeMode="cover" style={styles.image}>
         
    <NavigationContainer>
    <Tab.Navigator
     initialRouteName="Home"
     activeColor="orange"
     inactiveColor="gray"
     
     barStyle={{ backgroundColor: 'red' }}
    // barStyle={{ paddingBottom: 48 }}
    >
      <Tab.Screen name="Home" 
      component={HomeStack}
      options={{
        tabBarLabel: 'Home',
        tabBarBadge:10,
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),

      }}
      />
      <Tab.Screen name="Login"
       component={LoginScreen} 
       options={{
        tabBarLabel: 'login',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}
       />
    </Tab.Navigator>
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
