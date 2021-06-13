import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ItemHeader from '../components/itemHeader';
import {DATA} from '../components/wishListData';
import ItemListItem from '../components/itemListItem';

const ItemList = ({navigation}) => {
  const [dimension, setDimension] = useState(Dimensions.get('window'));

  const onChange = () => {
    setDimension(Dimensions.get('window'));
  };

  useEffect(() => {
    Dimensions.addEventListener('change', onChange);
    return () => {
      Dimensions.removeEventListener('change', onChange);
    };
  });

  return (
    <>
      <SafeAreaView>
        <ItemHeader navigation={navigation} />
        {dimension.width > dimension.height ? (
          <FlatList
            data={DATA}
            renderItem={({item}) => (
              <ItemListItem item={item} columns={'3'} navigation={navigation} />
            )}
            numColumns={3}
            keyExtractor={index => 'wide' + index}
            key={'wide'}
          />
        ) : (
          <FlatList
            data={DATA}
            renderItem={({item}) => (
              <ItemListItem item={item} columns={'2'} navigation={navigation} />
            )}
            numColumns={2}
            keyExtractor={index => 'narrow' + index}
            key={'narrow'}
          />
        )}
      </SafeAreaView>
    </>
  );
};

export default ItemList;
