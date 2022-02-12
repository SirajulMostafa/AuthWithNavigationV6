import * as React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LoginScreen from '../Screens/Login';
import HomeScreen from '../Screens/Home';
import ProfileScreen from '../Screens/Home/ProfileDetails';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
        createDrawerNavigator,
        DrawerContentScrollView,
        DrawerItemList,
        DrawerItem
      } from '@react-navigation/drawer';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native-paper'; 
const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();
import { AuthContext }  from '../Helpers/Auth/AuthContext';
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

 <Stack.Screen name="Login"
        component={LoginScreen}
        options={{
         title:'Login'
       }} 
        />
     </Stack.Navigator>
      )
    }

    export const CustomDrawerContent=(props) =>{ 
      const  { signOut } = React.useContext(AuthContext);  
      return (
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem label="logout" onPress={() => alert('Link to help')} />
          <DrawerItem label="logout" onPress={() =>(signOut())} />
          
        </DrawerContentScrollView>
      );
    }
    
     export const DrawerScreen = ()=>{
      return(
       <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
       <Drawer.Screen name="Home" component={HomeScreen} />
       <Drawer.Screen name="profile" component={ProfileScreen} />
     </Drawer.Navigator>
      ) 
    }

