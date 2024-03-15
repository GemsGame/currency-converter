import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {vatApi} from '../../services/VatcomplyAPI';

interface ICurrencyBase {
  date: string;
  base: string;
  rates: {
    [key: string]: number;
  };
}

export interface IRatesState {
  currency: {
    [key: string]: {
      date: string;
      base: string;
      rates: {
        [key: string]: number;
      };
    };
  };
}

export const initialState: IRatesState = {
  currency: {},
};

export const getBaseRate = createAsyncThunk<ICurrencyBase, string>(
  'rates/getBaseRate',
  async base => {
    try {
      return await vatApi.getBaseRate(base);
    } catch (error) {
      throw error;
    }
  },
);

const ratesSlice = createSlice({
  name: 'rates',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getBaseRate.fulfilled, (state, action) => {
      state.currency[action.payload.base as keyof ICurrencyBase] =
        action.payload;
    });
  },
});

export default ratesSlice.reducer;
