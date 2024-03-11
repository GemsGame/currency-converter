import React, {Dispatch, SetStateAction} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  ImageSourcePropType,
  Image,
} from 'react-native';

type InputTypes = {
  value: string;
  onChange: Dispatch<SetStateAction<string | undefined>>;
  placeholder?: string;
  icon?: ImageSourcePropType;
};

const Input = ({
  value,
  onChange,
  placeholder,
  icon,
}: InputTypes): React.JSX.Element => {
  const styles = StyleSheet.create({
    input: {
      borderWidth: 1,
      paddingTop: 9,
      paddingBottom:9,
      paddingLeft: icon ? 40 : 16,
      paddingRight: 16,
      borderRadius: 8,
      fontSize: 16,
      fontFamily: 'Inter',
      color: '#000000',
      backgroundColor: "#FFFFFF"
    },

    icon: {
      position: 'relative',
      top: 37,
      left: 15,
    },
  });

  return (
    <View>
      {icon && (
        <View style={styles.icon}>
          <Image source={icon} />
        </View>
      )}
      <TextInput
        style={styles.input}
        onChange={e => onChange(e.nativeEvent.text)}
        value={value}
        placeholder={placeholder}
      />
    </View>
  );
};

export default Input;
