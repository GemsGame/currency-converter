import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
} from 'redux-persist';
import conversionReducer from './slices/conversionSlice';
import ratesReducer from './slices/ratesSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import currenciesSlice from './slices/currenciesSlice';

const conversionPersistConfig = {
  key: 'conversion',
  storage: AsyncStorage,
  blacklist: ['conversion']
};
const ratesPersistConfig = {
  key: 'rates',
  storage: AsyncStorage,
};
const currenciesPersistConfig = {
  key: 'currencies',
  storage: AsyncStorage,
};
const rootReducer = combineReducers({
  conversion: persistReducer(conversionPersistConfig, conversionReducer),
  currencies: persistReducer(currenciesPersistConfig, currenciesSlice),
  rates: persistReducer(ratesPersistConfig, ratesReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});


export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
