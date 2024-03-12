import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {ISetCurrency} from '../../interface/ISetCurrency';
import { IListItem } from '../../interface/IListItem';
export interface IConversionState {
  from: null | IListItem;
  to: null | IListItem;
}

export const initialState: IConversionState = {
  from: null,
  to: null,
};

export const conversionSlice = createSlice({
  name: 'conversion',
  initialState,
  reducers: {
    setCurrency(state, action: PayloadAction<ISetCurrency>) {
      state[action.payload.direction] = action.payload.item;
    },
  },
});

export const {setCurrency} = conversionSlice.actions;
export default conversionSlice.reducer;
