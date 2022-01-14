import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


import {
    Search 
  } from '../Screens';
import StackRoute from './StackRoute';

const Tab = createBottomTabNavigator();

const TabRoute = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'ios-search' : 'ios-search-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarInactiveTintColor: 'gray',
        })}
        >
        <Tab.Screen name="Home" component={StackRoute} options={{ headerShown: false }}/>
        <Tab.Screen name="Search" component={Search} />
      </Tab.Navigator>
      </NavigationContainer>
  );
};

export default TabRoute;
