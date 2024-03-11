import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import currencies from "../../configs/currencies.json";

const styles = StyleSheet.create({
  container: {},
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    backgroundColor: '#E7E7E7'
  },
  contentContainerStyle: {
    borderRadius: 8, 
    overflow: 'hidden'
  }
});

const List = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={currencies}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={({ item }) => <View style = {styles.item}><Text>{item.code}</Text></View>}
      />
    </View>
  );
};

export default List;