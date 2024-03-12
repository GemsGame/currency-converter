import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
} from 'react-native';
import currencies from '../../configs/currencies.json';
import {IListItem} from '../../interface/IListItem';
import Radio from './Radio';
const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },

  list: {
    height: height - 150,
  },
  item: {
    backgroundColor: '#E7E7E7',
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'space-between',
    padding: 16,
  },
  contentContainerStyle: {
    borderRadius: 8,
    overflow: 'hidden',
  },

  nameBlock: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  buttonBlock: {
    alignItems: 'center',
    flexDirection: 'row',
  },

  name: {
    fontSize: 16,
    color: 'black',
  },
});

const MemoizedItem = React.memo(({item}: {item: IListItem}) => {
  return (
    <View style={styles.item}>
      <View style={styles.nameBlock}>
        <View>
          <View>
            <Image
              source={{uri: item.flagSrc}}
              style={{width: 30, height: 20}}
            />
          </View>
        </View>
        <View>
          <Text style={styles.name}>
            {item.code + " - "} 
            {(() => {
              if (item.name.length > 30) {
                return item.name.slice(0, 25) + '...';
              } else {
                return item.name;
              }
            })()}
          </Text>
        </View>
      </View>
      <View style={styles.buttonBlock}>
        <Radio />
      </View>
    </View>
  );
});

const List = () => {
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={currencies}
          contentContainerStyle={styles.contentContainerStyle}
          renderItem={({item}) => <MemoizedItem item={item} />}
        />
      </View>
    </View>
  );
};

export default List;
