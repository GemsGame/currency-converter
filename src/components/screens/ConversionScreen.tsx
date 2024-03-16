import React, {useEffect} from 'react';
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
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {
  setCurrency,
  invertCurrencies,
  setAmount,
} from '../../redux/slices/conversionSlice';
import {getBaseRate} from '../../redux/slices/ratesSlice';
import {getCurrenciesList} from '../../redux/slices/currenciesSlice';

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
  const amount = useAppSelector(state => state.conversion.amount);
  const currency = useAppSelector(state => state.rates.currency);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (from?.code) {
      dispatch(getBaseRate(from.code));
    }
  }, [from, to, amount]);

  useEffect(() => {
    if (from === null) {
      dispatch(
        setCurrency({
          direction: 'from',
          item: currencies[0],
        }),
      );
      dispatch(getBaseRate(currencies[0].code));
    }

    if (to === null) {
      dispatch(
        setCurrency({
          direction: 'to',
          item: currencies[1],
        }),
      );
    }

    dispatch(getCurrenciesList());
  }, []);

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
          <IconButton onPress={() => dispatch(invertCurrencies())} />
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
          <Input
            value={amount || ''}
            onChange={e => dispatch(setAmount(e.nativeEvent.text))}
          />
        </View>
      </View>
      <View style={styles.calculation}>
        <Text style={styles.subtitle}>
          {amount}
          {from?.symbol} =
        </Text>
        <Text style={styles.title}>
          {(() => {
            if (from?.code && to?.code && amount) {
              const rate = currency[from?.code]?.rates[to?.code] || '0';
              return (
                (Number(rate) * Number(amount)).toFixed(2) + ' ' + to?.symbol
              );
            }
          })()}
        </Text>
      </View>
    </SafeAreaView>
  );
};
