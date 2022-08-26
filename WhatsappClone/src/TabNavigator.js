import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Chats from './pages/Chats';
import Status from './pages/Status';
import Calls from './pages/Calls';
import Context from '../context/Context';
import Camera from './components/Camera/Camera';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  const {
    theme: { colors },
  } = React.useContext(Context);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarPosition: 'top',
        tabBarIndicatorStyle: {
          backgroundColor: colors.text,
          height: 4,
        },
        tabBarStyle: {
          backgroundColor: colors.foreground,
        },
        tabBarContentContainerStyle: {
          // flexDirection: 'row',
          // flex: 1,
          // justifyContent: 'space-between',
          // alignItems: 'center',
        },
        tabBarLabelStyle: {
          fontWeight: '600',
        },
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: colors.secondaryText,
      }}
      initialRouteName="Chats">
      <Tab.Screen
        name="Camera"
        component={Camera}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="camera" size={24} color={color} />
          ),
          tabBarLabel: () => null,
          // tabBarItemStyle: { width: 50 },
          // tabBarIconStyle: { width: 75 },
        }}
      />
      <Tab.Screen
        name="Chats"
        component={Chats}
      />
      <Tab.Screen
        name="Status"
        component={Status}
      />
      <Tab.Screen
        name="Calls"
        component={Calls}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
