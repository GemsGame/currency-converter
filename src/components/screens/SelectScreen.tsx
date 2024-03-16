import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import Input from '../common/Input';
import List from '../common/List';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { findCurrency } from '../../redux/slices/currenciesSlice';

const styles = StyleSheet.create({
  page: {
    padding: 20,
    gap: 16,
    backgroundColor: 'white',
  },
});

export const SelectScreen = ({route}: {route: any}) => {
  const {direction, item} = route.params;
  const dispatch = useAppDispatch();
  const filter = useAppSelector(state => state.currencies.filter);
  return (
    <SafeAreaView style={styles.page}>
      <Input
        value={filter}
        icon={require('../../assets/images/tabler_search.png')}
        onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => {
          dispatch(findCurrency(e.nativeEvent.text))
        }}
        placeholder="USD"
      />
      <List direction={direction} item={item} />
    </SafeAreaView>
  );
};
