import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { 
    Detail,
    Home 
  } from '../Screens';

const Stack = createNativeStackNavigator();

const StackRoute = () => {
  return (
    
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
  );
};

export default StackRoute;
