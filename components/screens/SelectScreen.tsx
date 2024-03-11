import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Select from '../common/Select';
import Input from '../common/Input';

const styles = StyleSheet.create({
  row: {
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
  },

  label: {
    fontFamily: 'Inter',
    fontSize: 16,
    color: 'black',
  },
  button: {
    gap: 8,
  },
  page: {
    padding: 20,
    gap: 16,
  },
  input: {
    width: '100%',
    gap: 8,
  },

  calculation: {
    paddingTop: 8,
  },
  subtitle: {
    fontFamily: 'Inter',
    fontSize: 16,
    color: 'black',
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 42,
    color: 'black',
  },
});

export const SelectScreen = () => {
  return (
    <View style={styles.page}>
      
    </View>
  );
};
