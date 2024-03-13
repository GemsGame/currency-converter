import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {ISetCurrency} from '../../interface/ISetCurrency';
import {IListItem} from '../../interface/IListItem';
export interface IConversionState {
  from: null | IListItem;
  to: null | IListItem;
  amount: null | string;
}

export const initialState: IConversionState = {
  from: null,
  to: null,
  amount: null,
};

export const conversionSlice = createSlice({
  name: 'conversion',
  initialState,
  reducers: {
    setCurrency(state, action: PayloadAction<ISetCurrency>) {
      state[action.payload.direction] = action.payload.item;
    },
    invertCurrencies(state) {
      const to = state.to;
      const from = state.from;

      state.from = to;
      state.to = from;
    },
    setAmount(state, action: PayloadAction<string>) {
      state.amount = action.payload;
    },
  },
});

export const {setCurrency, invertCurrencies, setAmount} =
  conversionSlice.actions;
export default conversionSlice.reducer;
