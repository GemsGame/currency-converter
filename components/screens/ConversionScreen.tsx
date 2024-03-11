import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Select from '../common/Select';
import Input from '../common/Input';
import { useNavigation } from '@react-navigation/native';
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

export const ConversionScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.page}>
      <View style={styles.row}>
        <View style={styles.button}>
          <Text style={styles.label}>From:</Text>
          <Select onPress={() => navigation.navigate("Currency Select" as never)} />
        </View>
        <View style={styles.button}>
          <Text style={styles.label}>To:</Text>
          <Select onPress={() => navigation.navigate("Currency Select" as never)} />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.input}>
          <Text style={styles.label}>Amount:</Text>
          <Input value="0" onChange={() => {}} />
        </View>
      </View>
      <View style={styles.calculation}>
        <Text style={styles.subtitle}>1$ =</Text>
        <Text style={styles.title}>3,98 zl</Text>
      </View>
    </View>
  );
};
