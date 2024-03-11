import React, {useState} from 'react';
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
  },
  buttonBg: {
    backgroundColor: 'black',
    height: 8,
    width: 8,
    borderRadius: 4,
  },
});

const Radio = (): React.JSX.Element => {
  const [active, setActive] = useState(false);
  return (
    <TouchableOpacity onPress={e => setActive(!active)}>
      <View style={styles.button}>
        {active && <View style={styles.buttonBg}></View>}
      </View>
    </TouchableOpacity>
  );
};

export default Radio;
