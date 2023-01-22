import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import LoginScreen from '../screen/auth/LoginScreen';
import RegisterScreen from '../screen/auth/RegisterScreen';
import { COLORS } from '../constants/theme';
import HomeScreen from '../screen/home/HomeScreen';
import BottomTabs from '../bottom_tabs/bottom_tabs';
import CategoryScreen from '../screen/category/CategoryScreen';
import SingleVisitCleaning from '../cleaning/SingleVisitCleaning';
import DeepCleaning from '../cleaning/DeepCleaning';
import FurnitureMovingCleaning from '../cleaning/FurnitureMovingCleaning';
import ElectricianCleaning from '../cleaning/ElectricianCleaning';
import CarWashPremium from '../cleaning/CarWashPremium';
import ACRepair from '../cleaning/ACRepair';
import CarWashRegular from '../cleaning/CarWashRegular';
import ACCleaningGasFilling from '../cleaning/ACCleaningGasFilling';
import GeneralPestControl from '../cleaning/GeneralPestControl';
import FacialCleaning from '../cleaning/FacialCleaning';
import CarpetCleaningService from '../screen/service_screens/CarpetCleaningService';
import CarpetCleaning from '../cleaning/CarpetCleaning';
import DeepCleaningService from '../screen/service_screens/DeepCleaningService';
import FurnitureServices from '../screen/service_screens/FurnitureServices';
import ElectricianService from '../screen/service_screens/ElectricianService';
import PestControlService from '../screen/service_screens/PestControlService';
import HealingMassages from '../cleaning/HealingMassages';
import RelaxingMassages from '../cleaning/RelaxingMassages';
import CurtainsCleaningService from '../screen/service_screens/CurtainsCleaningService';
import ACService from '../screen/service_screens/ACService';
import FacialService from '../screen/service_screens/FacialService';
import MatressService from '../screen/service_screens/MatressService';
import MassagesService from '../screen/service_screens/MassagesService';
import ManiPediService from '../screen/service_screens/ManiPediService';

const Stack = createStackNavigator();

export default function AuthenticationStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: "#fff" },
        gestureEnabled: true,
        backgroundColor: COLORS.button,
        gestureDirection: 'horizontal',
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
      initialRouteName="Root"
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Root" component={BottomTabs} />
      <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
      <Stack.Screen name="SingleVisitCleaning" component={SingleVisitCleaning} />
      <Stack.Screen name="CurtainsCleaningService" component={CurtainsCleaningService} />
      <Stack.Screen name="DeepCleaning" component={DeepCleaning} />
      <Stack.Screen name="DeepCleaningService" component={DeepCleaningService} />
      <Stack.Screen name="FurnitureMovingCleaning" component={FurnitureMovingCleaning} />
      <Stack.Screen name="ElectricianCleaning" component={ElectricianCleaning} />
      <Stack.Screen name="CarWashPremium" component={CarWashPremium} />
      <Stack.Screen name="CarWashRegular" component={CarWashRegular} />
      <Stack.Screen name="ACRepair" component={ACRepair} />
      <Stack.Screen name="ACService" component={ACService} />
      <Stack.Screen name="ACCleaningGasFilling" component={ACCleaningGasFilling} />
      <Stack.Screen name="GeneralPestControl" component={GeneralPestControl} />
      <Stack.Screen name="FacialCleaning" component={FacialCleaning} />
      <Stack.Screen name="FacialService" component={FacialService} />
      <Stack.Screen name="CarpetCleaning" component={CarpetCleaning} />
      <Stack.Screen name="CarpetCleaningService" component={CarpetCleaningService} />
      <Stack.Screen name="FurnitureServices" component={FurnitureServices} />
      <Stack.Screen name="ElectricianService" component={ElectricianService} />
      <Stack.Screen name="PestControlService" component={PestControlService} />
      <Stack.Screen name="HealingMassages" component={HealingMassages} />
      <Stack.Screen name="RelaxingMassages" component={RelaxingMassages} />
      <Stack.Screen name="MatressService" component={MatressService} />
      <Stack.Screen name="MassagesService" component={MassagesService} />
      <Stack.Screen name="ManiPediService" component={ManiPediService} />
    </Stack.Navigator>
  );
}
