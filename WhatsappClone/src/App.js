import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import TopNavbar from './components/TopNavbar';
import Chats from './pages/Chats';
import Status from './pages/Status';
import Calls from './pages/Calls';
import Context from '../context/Context';
import ContextWrapper from '../context/ContextWrapper';
import { Text, View } from 'react-native';

const Tab = createMaterialTopTabNavigator();

const App = () => {
  const {
    theme: { colors },
  } = React.useContext(Context);
  return (
    <NavigationContainer>
      <TopNavbar />
      <Home />
    </NavigationContainer>
  );
};

function Home() {
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
}

function Main() {
  return (
    <ContextWrapper>
      <App />
    </ContextWrapper>
  );
}

export default Main;
