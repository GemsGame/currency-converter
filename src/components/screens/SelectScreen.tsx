import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import Input from '../common/Input';
import List from '../common/List';
import { Route } from '@react-navigation/native';

const styles = StyleSheet.create({
  page: {
    padding: 20,
    gap: 16,
    backgroundColor: 'white'
  },
});

export const SelectScreen = ({ route }: { route: any  }) => {
  console.log(route)
  return (
    <SafeAreaView style={styles.page}>
      <Input value="0" onChange={() => {}} />
      <List />
    </SafeAreaView>
  );
};
