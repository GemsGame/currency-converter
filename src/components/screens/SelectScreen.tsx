import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import Input from '../common/Input';
import List from '../common/List';

const styles = StyleSheet.create({
  list: {},

  page: {
    padding: 20,
    gap: 16,
    backgroundColor: 'white'
  },
});

export const SelectScreen = () => {
  return (
    <SafeAreaView style={styles.page}>
      <Input value="0" onChange={() => {}} />
      <List />
    </SafeAreaView>
  );
};
