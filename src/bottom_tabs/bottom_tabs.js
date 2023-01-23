import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screen/home/HomeScreen';
import { COLORS, SIZES } from '../constants/theme';
import CategoryScreen from '../screen/category/CategoryScreen';
import ProfileScreen from '../screen/auth/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        showLabel: false,
        tabBarLabel: '',
        tabBarStyle: {
          position: 'absolute',
          borderRadius: 0,
          height: 54,
          justifyContent: 'center',
          alignItems: 'center',
          borderTopStartRadius: 8,
          borderTopEndRadius: 8,
          elevation: 20,
          shadowColor: '#000',
          width: SIZES.width,
          backgroundColor: '#fff',
        },
      }}>
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <BuildTabComponent
                image={require('../assets/home.png')}
                focused={focused}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="ChatsTab"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <BuildTabComponent
                image={require('../assets/chat.png')}
                focused={focused}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <BuildTabComponent
                image={require('../assets/avatar.png')}
                focused={focused}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const BuildTabComponent = ({ image, text, focused }) => {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: '#fff',
        width: SIZES.width / 4,
      }}>
      <View style={{ width: 60, alignItems: 'center', paddingBottom: 5 }}>
        <Image
          source={image}
          resizeMode="contain"
          style={{
            width: 23,
            height: 23,
            tintColor: focused ? COLORS.primary : '#000',
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: SIZES.width / 6,
    width: SIZES.width / 4,
    marginBottom: -15,
    backgroundColor: '#dcdcdc',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BottomTabs;
