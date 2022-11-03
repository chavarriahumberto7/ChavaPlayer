import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home, Profile,Player,Onboarding, Library } from 'Screens';

const Stack = createStackNavigator();

const Stacks = ({ params }) => (
  <Stack.Navigator initialRouteName="Onboarding">
    <Stack.Screen
      name="Onboarding"
      component={Onboarding}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Player"
      component={Player}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Library"
      component={Library}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default Stacks;
