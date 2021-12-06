import * as React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LoginScreen from '../Screens/Login';
import HomeScreen from '../Screens/Home';
import ProfileDetails from '../Screens/Home/ProfileDetails';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';


const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

export const TabModule=()=>{
    return(
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
           <Tab.Screen name="LoginScreen"
          component={DrawerScreen} 
           options={{
            tabBarLabel: 'drawer',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
           />
        </Tab.Navigator>
    )
    }
    
    
     export const HomeStack =()=>{
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
    
     export const DrawerScreen = ()=>{
      return(
       <Drawer.Navigator>
       <Drawer.Screen name="Home" component={HomeScreen} />
       <Drawer.Screen name="profile" component={ProfileDetails} />
     </Drawer.Navigator>
      ) 
    }

