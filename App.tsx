import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Select from './components/common/Select';
import Input from './components/common/Input';
import Radio from './components/common/Radio';

function App(): React.JSX.Element {
  const [value, setValue] = useState<string>();
  return (
    <SafeAreaView>
      <Select />
      <Input onChange={setValue} value={''} />
      <Input onChange={setValue} value={''} placeholder='USD'/>
      <Input onChange={setValue} value={''} placeholder='USD' icon={require("./assets/images/tabler_search.png")}/>
      <Radio/>
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
