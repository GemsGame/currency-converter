import React from 'react';
import {GestureResponderEvent, Image, Pressable, View} from 'react-native';

const IconButton = ({
  onPress,
}: {
  onPress: (e: GestureResponderEvent) => void;
}): React.JSX.Element => {
  return (
    <Pressable onPress={onPress}>
      <View>
        <View>
          <Image
            source={require('../../assets/images/tabler_arrows-left-right.png')}
          />
        </View>
      </View>
    </Pressable>
  );
};

export default IconButton;
