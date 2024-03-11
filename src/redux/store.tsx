import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
} from 'redux-persist';
import settingsReducer from './slices/settingsSlice';
import userReducer from './slices/userSlice';
import messagesReducer from './slices/messagesSlice';
import purchasesReducer from './slices/purchasesSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

//AsyncStorage.clear();

const settingsPersistConfig = {
  key: 'settings',
  storage: AsyncStorage,
  timeout: 0,
};
const userPersistConfig = {
  key: 'user',
  storage: AsyncStorage,
  timeout: 0,
};
const messagesPersistConfig = {
  key: 'messages',
  storage: AsyncStorage,
  blacklist: ['loading'],
  timeout: 0,
};

const purchasesPersistConfig = {
  key: 'purchases',
  storage: AsyncStorage,
  blacklist: ['subscriptions', 'products'],
  timeout: 0,
};

const rootReducer = combineReducers({
  settings: persistReducer(settingsPersistConfig, settingsReducer),
  user: persistReducer(userPersistConfig, userReducer),
  messages: persistReducer(messagesPersistConfig, messagesReducer),
  purchases: persistReducer(purchasesPersistConfig, purchasesReducer),
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
