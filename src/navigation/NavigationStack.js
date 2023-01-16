import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { COLORS } from '../constants/theme';
import BottomTabs from '../bottom_tabs/bottom_tabs';
import HomeScreen from '../screen/home/HomeScreen';

const Stack = createStackNavigator();
export default function NavigationStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: COLORS.button },
        gestureEnabled: true,
        backgroundColor: COLORS.button,
        gestureDirection: 'horizontal',
        ...TransitionPresets.SlideFromRightIOS,
        headerShown: false,
      }}
      initialRouteName="Root">
      <Stack.Screen name="Root" component={BottomTabs} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}
