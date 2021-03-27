/**
 * Email: duongnq27.98@gmail.com
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Login, HrDashboard, VendorDashboard} from './src/containers';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
        <Stack.Screen name="HrDashboad" component={HrDashboard} />
        <Stack.Screen name="VendorDashboad" component={VendorDashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
