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
  async (base, {rejectWithValue}) => {
    try {
      return await vatApi.getBaseRate(base);
    } catch (err) {
      const error = err as Error;
      return rejectWithValue(error.message);
    }
  },
);

const ratesSlice = createSlice({
  name: 'rates',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getBaseRate.fulfilled, (state, action) => {
      state.currency[action.payload.base] = action.payload;
    });
  },
});

export default ratesSlice.reducer;
