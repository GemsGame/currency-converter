import React from 'react';
import { ConversionScreen } from './components/screens/ConversionScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { SelectScreen } from './components/screens/SelectScreen';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ConversionScreen} />
        <Stack.Screen name="Currency Select" component={SelectScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
