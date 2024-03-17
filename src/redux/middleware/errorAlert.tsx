import {
  Middleware,
  isRejectedWithValue,
} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {RootState} from '../store';

const errorAlert: Middleware<{}, RootState> = () => next => action => {
  if (isRejectedWithValue(action)) {
    const payload = action.payload as string;
    Alert.alert(payload, 'The application in offline mode');
  }

  return next(action);
};

export default errorAlert;
