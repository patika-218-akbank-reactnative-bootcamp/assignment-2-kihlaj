import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ContextWrapper from '../context/ContextWrapper';
import TabNavigator from './TabNavigator';
import Chat from './pages/Chat';
import { theme } from '../utils';
import TopNavbar from './components/TopNavbar/TopNavbar';
import ChatNavbar from './components/ChatNavbar';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ContextWrapper>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            // to remove shadow between tab navigation and header
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: theme.colors.foreground,
            },
            headerTintColor: theme.colors.text,
            headerTitleAlign: 'left',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen
            name="Home"
            component={TabNavigator}
            options={{
              title: 'WhatsApp',
              headerRight: () => (
                <TopNavbar
                  firstIcon="search1"
                  secondIcon="dots-three-vertical"
                />
              ),
            }}
          />
          <Stack.Screen
            name="Chat"
            component={Chat}
            options={({ route }) => ({
              // to display the title by passing parameters to the route
              headerTitle: route.params.name,
              headerRight: () => (
                <ChatNavbar
                  firstIcon="videocamera"
                  secondIcon="phone"
                  thirdIcon="dots-three-vertical"
                />
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextWrapper>
  );
};

export default App;
