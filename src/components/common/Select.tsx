import { NavigationAction, NavigationState } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#DEDEDE',
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
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
    color: '#000000',
  },
});

const Select = ({ onPress }: { onPress: any}): React.JSX.Element => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.button}>
        <View>
          <Image source={require('../../assets/images/flag.png')} />
        </View>
        <Text style={styles.buttonText}>USD</Text>
        <View>
          <Image
            source={require('../../assets/images/tabler_chevron-down.png')}
          />
        </View>
      </View>
    </Pressable>
  );
};

export default Select;
