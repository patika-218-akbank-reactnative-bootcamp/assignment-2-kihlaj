import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TopNavbar from './components/TopNavbar';
import ContextWrapper from '../context/ContextWrapper';
import TabNavigator from './TabNavigator';
import Chat from './components/Chat';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ContextWrapper>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ header: () => <TopNavbar text="WhatsApp" /> }}>
          <Stack.Screen name="home" component={TabNavigator} />
          <Stack.Screen
            name="chat"
            component={Chat}
            // options={{ headerTitle: props => <ChatHeader {...props} /> }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextWrapper>
  );
};

export default App;
