import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Select from './components/common/Select';
import Input from './components/common/Input';


function App(): React.JSX.Element {

  return (
    <SafeAreaView>
     <Select/>
     <Input/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
