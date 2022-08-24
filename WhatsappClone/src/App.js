import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Chats from './pages/Chats';
import Status from './pages/Status';
import Calls from './pages/Calls';
import Context from '../context/Context';
import ContextWrapper from '../context/ContextWrapper';
import {Text} from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

const App = () => {
  const {
    theme: {colors},
  } = React.useContext(Context);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.foreground,
            shadowOpacity: 0,
            elevation: 0,
          },
          headerTintColor: colors.white,
          headerShadowVisible: false,
        }}>
        <Stack.Screen
          name="Home"
          options={{title: 'Whatsapp'}}
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function Home() {
  const {
    theme: {colors},
  } = React.useContext(Context);
  return (
    <Tab.Navigator
      screenOptions={({route}) => {
        return {
          tabBarLabel: () => {
            if (route.name === 'photo') {
              return <Ionicons name="camera" size={20} color={colors.white} />;
            } else {
              return (
                <Text style={{color: colors.white}}>
                  {route.name.toLocaleUpperCase()}
                </Text>
              );
            }
          },
          tabBarShowIcon: true,
          tabBarLabelStyle: {
            color: colors.white,
          },
          tabBarIndicatorStyle: {
            backgroundColor: colors.white,
          },
          tabBarStyle: {
            backgroundColor: colors.foreground,
          },
        };
      }}>
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
