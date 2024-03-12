import {createSlice} from '@reduxjs/toolkit';

export interface IConversionState {
  from: string | null | number,
  to: string | null | number,
  amount: string | number | null,
}

export const initialState: IConversionState = {
  from: 0,
  to: 1,
  amount: null,
};

export const conversionSlice = createSlice({
  name: 'conversion',
  initialState,
  reducers: {
    setTo(state, action) {
      state.to = action.payload;
    },
    setFrom(state, action) {
      state.from = action.payload;
    },
    setAmount(state, action) {
      state.amount = action.payload;
    },
  },
});

export const { setTo, setFrom, setAmount } = conversionSlice.actions;
export default conversionSlice.reducer;
