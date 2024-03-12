import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Select from '../common/Select';
import Input from '../common/Input';
import {
  useNavigation,
  ParamListBase,
  NavigationProp,
} from '@react-navigation/native';
import IconButton from '../common/IconButton';
import currencies from '../../configs/currencies.json';
import {useAppSelector} from '../../redux/hooks';

const styles = StyleSheet.create({
  row: {
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
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
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const from = useAppSelector(state => state.conversion.from);
  const to = useAppSelector(state => state.conversion.to);

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.row}>
        <View style={styles.button}>
          <Text style={styles.label}>From:</Text>
          <Select
            onPress={() =>
              navigation.navigate('Currency Select', {
                direction: 'from',
                item: from || currencies[0],
              })
            }
            item={from || currencies[0]}
          />
        </View>
        <View style={styles.button}>
          <Text style={styles.label}></Text>
          <IconButton onPress={() => {}} />
        </View>
        <View style={styles.button}>
          <Text style={styles.label}>To:</Text>
          <Select
            onPress={() =>
              navigation.navigate('Currency Select', {
                direction: 'to',
                item: to || currencies[1],
              })
            }
            item={to || currencies[1]}
          />
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
    </SafeAreaView>
  );
};
