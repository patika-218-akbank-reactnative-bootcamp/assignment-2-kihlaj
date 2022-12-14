import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Chats from './pages/Chats';
import Status from './pages/Status';
import Calls from './pages/Calls';
import Camera from './components/Camera/Camera';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { theme } from '../utils';

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      // default options to use for the screens
      screenOptions={{
        tabBarPosition: 'top',
        // to make white thick line at the bottom of the tab
        tabBarIndicatorStyle: {
          backgroundColor: theme.colors.text,
          height: 4,
        },
        tabBarStyle: {
          backgroundColor: theme.colors.foreground,
        },
        tabBarLabelStyle: {
          fontWeight: '600',
        },
        // when it is active or not change color
        tabBarActiveTintColor: theme.colors.text,
        tabBarInactiveTintColor: theme.colors.secondaryText,
      }}
      // when app opened for the first time which tab to show
      initialRouteName="Chats">
      <Tab.Screen
        name="Camera"
        component={Camera}
        options={{
          // to show icon
          tabBarIcon: ({ color }) => (
            <AntDesign name="camera" size={24} color={color} />
          ),
          // to remove label of the tab to show only icon
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen name="Chats" component={Chats} />
      <Tab.Screen name="Status" component={Status} />
      <Tab.Screen name="Calls" component={Calls} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
