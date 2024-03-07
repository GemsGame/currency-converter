import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#DEDEDE',
    borderRadius: 8,
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 12,
    paddingRight: 16,
    paddingBottom: 12,
    paddingLeft: 16,
    width: 130,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'Inter',
    color: '#000000'
  },
});


const Select = (): React.JSX.Element => {
  return (
    <View style={styles.button}>
      <View>
        <Image source={require("../../assets/images/flag.png")}/>
      </View>
      <Text style={styles.buttonText}>
        USD
      </Text>
      <View>
        <Image source={require("../../assets/images/tabler_chevron-down.png")} />
      </View>
    </View>
 );
};


export default Select;
