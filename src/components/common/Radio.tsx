import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  button: {
    height: 16,
    width: 16,
    borderColor: 'black',
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonBg: {
    backgroundColor: 'black',
    height: 8,
    width: 8,
    borderRadius: 4,
  },
});

interface RadioButtonProps {
  selected: boolean;
  onSelect: () => void;
}

const Radio: React.FC<RadioButtonProps> = ({
  selected,
  onSelect,
}): React.JSX.Element => {
  return (
    <TouchableOpacity onPress={onSelect}>
      <View style={styles.button}>
        {selected && <View style={styles.buttonBg}></View>}
      </View>
    </TouchableOpacity>
  );
};

export default Radio;
