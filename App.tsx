import React from 'react';
import { ConversionScreen } from './src/components/screens/ConversionScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SelectScreen } from './src/components/screens/SelectScreen';
import { store } from './src/redux/store';
import { Provider } from 'react-redux'

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={ConversionScreen} />
          <Stack.Screen name="Currency Select" component={SelectScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
export default App;
