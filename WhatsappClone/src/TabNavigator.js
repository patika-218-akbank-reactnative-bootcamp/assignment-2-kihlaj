import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Chats from './pages/Chats';
import Status from './pages/Status';
import Calls from './pages/Calls';
import Context from '../context/Context';

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  const {
    theme: { colors },
  } = React.useContext(Context);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: colors.text,
          height: 4,
        },
        tabBarStyle: {
          backgroundColor: colors.foreground,
        },
        tabBarLabelStyle: {
          fontWeight: '600',
        },
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: colors.secondaryText,
      }}
      initialRouteName="chats">
      <Tab.Screen name="Chats" component={Chats} />
      <Tab.Screen name="Status" component={Status} />
      <Tab.Screen name="Calls" component={Calls} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
