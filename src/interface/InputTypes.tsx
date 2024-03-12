import {Dispatch, SetStateAction} from 'react';
import {ImageSourcePropType} from 'react-native';

export type InputTypes = {
  value: string;
  onChange: Dispatch<SetStateAction<string | undefined>>;
  placeholder?: string;
  icon?: ImageSourcePropType;
};
