import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Input from '../common/Input';
import List from '../common/List';

const styles = StyleSheet.create({
  page: {
    padding: 20,
    gap: 16,
    backgroundColor: 'white',
  },
});

export const SelectScreen = ({route}: {route: any}) => {
  const {direction, item} = route.params;
  return (
    <SafeAreaView style={styles.page}>
      <Input
        value={''}
        icon={require('../../assets/images/tabler_search.png')}
        onChange={() => {}}
        placeholder="USD"
      />
      <List direction={direction} item={item} />
    </SafeAreaView>
  );
};
