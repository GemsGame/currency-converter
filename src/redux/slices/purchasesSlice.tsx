import {createSlice} from '@reduxjs/toolkit';
import {
  Product, Subscription,
} from 'react-native-iap';

interface State {
  subscriptions: Subscription[];
  products: Product[];
}

export const initialState: State = {
  subscriptions: [],
  products: [],
};

export const purchasesSlice = createSlice({
  name: 'purchases',
  initialState,
  reducers: {
    setSubscriptions(state, action) {
      state.subscriptions = action.payload;
    },
    setProducts(state, action) {
      state.products = action.payload;
    },
  },
});

export const { setSubscriptions, setProducts } = purchasesSlice.actions;
export default purchasesSlice.reducer;
