import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import { IListItem } from '../../interface/IListItem';

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

const Select = ({ onPress, item }: {onPress: any, item:IListItem }): React.JSX.Element => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.button}>
        <View>
          <Image source={{ uri: item.flagSrc }} style={{ width: 30, height: 20 }} />
        </View>
        <Text style={styles.buttonText}>{item.code}</Text>
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
