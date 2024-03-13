import {ImageSourcePropType, NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';

export type InputTypes = {
  value: string;
  onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  placeholder?: string;
  icon?: ImageSourcePropType;
};
