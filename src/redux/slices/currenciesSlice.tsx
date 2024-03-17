import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {vatApi} from '../../services/VatcomplyAPI';
import {IListItem} from '../../interface/IListItem';

export interface ICurrenciesState {
  list: [] | IListItem[];
  filter: string;
}

export const initialState: ICurrenciesState = {
  list: [],
  filter: '',
};

export const getCurrenciesList = createAsyncThunk<IListItem[]>(
  'rates/getCurrenciesList',
  async (_, {rejectWithValue}) => {
    try {
      return await vatApi.getCurrenciesList();
    } catch (err) {
      const error = err as Error;
      return rejectWithValue(error.message);
    }
  },
);

export const currenciesSlice = createSlice({
  name: 'currencies',
  initialState,
  reducers: {
    findCurrency(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getCurrenciesList.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});
export const {findCurrency} = currenciesSlice.actions;
export default currenciesSlice.reducer;
