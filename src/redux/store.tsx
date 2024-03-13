import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
} from 'redux-persist';
import settingsReducer from './slices/conversionSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const conversionPersistConfig = {
  key: 'conversion',
  storage: AsyncStorage,
  blacklist: ['conversion']
};

const rootReducer = combineReducers({
  conversion: persistReducer(conversionPersistConfig, settingsReducer),
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
