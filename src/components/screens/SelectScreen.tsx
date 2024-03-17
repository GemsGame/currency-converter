import React from 'react';
import {
  StyleSheet,
  View,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import Input from '../common/Input';
import List from '../common/List';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {findCurrency} from '../../redux/slices/currenciesSlice';
import {CurrencySelect} from '../../../App';

const styles = StyleSheet.create({
  page: {
    padding: 20,
    paddingTop: 0,
    gap: 16,
    backgroundColor: 'white',
  },
});

export const SelectScreen = ({route}: CurrencySelect) => {
  const {direction, item} = route.params;
  const dispatch = useAppDispatch();
  const filter = useAppSelector(state => state.currencies.filter);
  return (
    <View style={styles.page}>
      <Input
        value={filter}
        icon={require('../../assets/images/tabler_search.png')}
        onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => {
          dispatch(findCurrency(e.nativeEvent.text));
        }}
        placeholder="USD"
      />
      <List direction={direction} item={item} />
    </View>
  );
};
