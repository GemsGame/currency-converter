import React from 'react';
import {View, StyleSheet, TextInput, ImageSourcePropType} from 'react-native';

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 8,
    fontSize: 16,
    fontFamily: 'Inter',
    color: '#000000',
  },
});

type InputTypes = {
  value: string;
  onChangeText: () => {};
  placeholder?: string;
  icon?: ImageSourcePropType
};


const Input = (
  { value, onChangeText, placeholder }: InputTypes,
): React.JSX.Element => {
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
      />
    </View>
  );
};

export default Input;
