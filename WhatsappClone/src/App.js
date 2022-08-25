import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TopNavbar from './components/TopNavbar';
import ContextWrapper from '../context/ContextWrapper';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ContextWrapper>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ header: TopNavbar }}>
          <Stack.Screen name="home" component={TabNavigator} />
          {/* <Stack.Screen
            name="home"
            options={{ title: 'Whatsapp' }}
            component={Home}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </ContextWrapper>
  );
};

export default App;
