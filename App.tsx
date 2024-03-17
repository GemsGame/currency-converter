import React from 'react';
import {ConversionScreen} from './src/components/screens/ConversionScreen';
import {NavigationContainer} from '@react-navigation/native';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {SelectScreen} from './src/components/screens/SelectScreen';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import {IListItem} from './src/interface/IListItem';

export type RootStackParamList = {
  Home: undefined;
  'Currency Select': {item: IListItem; direction: 'from' | 'to'};
};

export type CurrencySelect = NativeStackScreenProps<
  RootStackParamList,
  'Currency Select'
>;

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={ConversionScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Currency Select"
            component={SelectScreen}
            options={{
              headerShown: true,
              headerTitleStyle: {
                fontFamily: 'Inter',
                fontWeight: 'bold',
                fontSize: 20,
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
export default App;
