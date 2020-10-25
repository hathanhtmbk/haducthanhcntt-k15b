import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Button} from 'react-native';

import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';
import AppetizerScreen  from '../screens/Appetizer';
import MainCourseScreen  from '../screens/MainCourse';
import DessertScreen  from '../screens/Dessert';
import DrinkScreen  from '../screens/Drink';
const HomeStack = createStackNavigator();

const HomeStackScreen=() =>(
    <HomeStack.Navigator>
        <HomeStack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerTitle: 'Home',
             // headerTitleAlign:"center",
            }}
        />
        <HomeStack.Screen
            name="Appetizer"
            component={AppetizerScreen}
            options={{
              headerTitle: 'Món khai vị',
            }}
        />
        <HomeStack.Screen
            name="MainCourse"
            component={MainCourseScreen}
            options={{
              headerTitle: 'Món chính',
              
            }}
        />
        <HomeStack.Screen
            name="Dessert"
            component={DessertScreen}
            options={{
              headerTitle: 'Món tráng miệng',
            }}
        />
        <HomeStack.Screen
            name="Drink"
            component={DrinkScreen}
            options={{
              headerTitle: 'Đồ uống',
            }}
        />
        
    </HomeStack.Navigator>
   
);
 const ProfileStack =createStackNavigator();
 const ProfileStackScreen = () => (
    <ProfileStack.Navigator>
      <ProfileStack.Screen 
        name="Profile"
        component={ProfileScreen}
        options={{
        headerTitle: 'Profile',
        }}
      />
    </ProfileStack.Navigator>
  );
  const AppTabs = createBottomTabNavigator();
  const AppTabsScreen = () => (
    <AppTabs.Navigator
    tabBarOptions={{
        labelStyle:{
          //color:'blue',
          fontSize:15,
        },
        activeTintColor:'blue',
        inactiveTintColor:'black',
       
      }}
    >
      <AppTabs.Screen name="Home" component={HomeStackScreen} />
      <AppTabs.Screen name="Profile" component={ProfileStackScreen} />
    </AppTabs.Navigator>
  );
const AppDrawer = createDrawerNavigator();
const AppDrawerScreen = () => (
  <AppDrawer.Navigator>
    <AppDrawer.Screen name="Tabs" component={AppTabsScreen} />
  
  </AppDrawer.Navigator>
);
  export default () => (
    <NavigationContainer>
       <AppDrawerScreen />
    </NavigationContainer>
  );