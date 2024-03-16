import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Pressable,
} from 'react-native';
import Radio from './Radio';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {setCurrency} from '../../redux/slices/conversionSlice';
import {ISetCurrency} from '../../interface/ISetCurrency';
import {IListItem} from '../../interface/IListItem';
import {getBaseRate} from '../../redux/slices/ratesSlice';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
  list: {
    height: height - 180,
  },
  contentContainerStyle: {
    borderRadius: 8,
    overflow: 'hidden',
  },
});

interface MemoizedItemProps {
  item: IListItem;
  isActive: boolean;
  onPress: () => void;
}

const MemoizedItem: React.FC<MemoizedItemProps> = React.memo(
  ({item, isActive, onPress}) => {
    const styles = StyleSheet.create({
      item: {
        backgroundColor: isActive ? '#DEDEDE' : '#E7E7E7',
        flexDirection: 'row',
        gap: 8,
        justifyContent: 'space-between',
        padding: 16,
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
      img: {
        width: 30,
        height: 20,
      },
    });
    return (
      <Pressable onPress={onPress}>
        <View style={styles.item}>
          <View style={styles.nameBlock}>
            <View>
              <View>
                <Image source={{uri: item.flagSrc}} style={styles.img} />
              </View>
            </View>
            <View>
              <Text style={styles.name}>
                {item.code + ' - '}
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
            <Radio selected={isActive} onSelect={onPress} />
          </View>
        </View>
      </Pressable>
    );
  },
);

const List: React.FC<ISetCurrency> = ({direction}) => {
  const activeItem = useAppSelector(state => state.conversion[direction]);
  const list = useAppSelector(state => state.currencies.list);
  const filter = useAppSelector(state => state.currencies.filter);
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={list?.filter(currency =>
            currency.code.toLowerCase().includes(filter.toLowerCase()),
          )}
          contentContainerStyle={styles.contentContainerStyle}
          renderItem={({item}) => (
            <MemoizedItem
              onPress={() => {
                dispatch(
                  setCurrency({
                    direction,
                    item,
                  }),
                );

                if (direction === 'from') {
                  dispatch(getBaseRate(item?.code));
                }
              }}
              isActive={item?.code === activeItem?.code}
              item={item}
            />
          )}
        />
      </View>
    </View>
  );
};

export default List;
