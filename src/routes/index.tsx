import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Screens } from './constants';
import HomeScreen from '../screens/Home';
import SearchScreen from '../screens/Search';
import SensorScreen from '../screens/Sensor';

const Stack = createStackNavigator();

const Router: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={Screens.HOME} component={HomeScreen} />
        <Stack.Screen name={Screens.SEARCH} component={SearchScreen} />
        <Stack.Screen name={Screens.SENSOR} component={SensorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
