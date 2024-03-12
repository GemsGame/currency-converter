import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  button: {
    
  },
});

const IconButton = ({onPress}: {onPress: any}): React.JSX.Element => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.button}>
        <View>
          <Image source={require('../../assets/images/tabler_arrows-left-right.png')} />
        </View>
      </View>
    </Pressable>
  );
};

export default IconButton;
