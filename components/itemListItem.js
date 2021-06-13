import React from 'react';
import {Text, View, FlatList, TouchableOpacity, Dimensions} from 'react-native';
import {Image} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

const ItemListItem = ({item, columns, navigation}) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.navigate('ItemDescriptionPage')}
        style={{
          flex: columns === '3' ? 0.33 : 0.5,
          flexDirection: 'column',
          borderBottomColor: 'grey',
          borderBottomWidth: 0.5,
          borderRightColor: 'grey',
          borderRightWidth: 0.7,
        }}>
        <Image
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 250,
            resizeMode: 'stretch',
          }}
          source={{uri: item.imageURL}}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{margin: 5}}>
            <Text style={{fontWeight: 'bold', color: '#696969'}}>
              {item.title}
            </Text>
            <Text style={{fontSize: 12, color: '#808080'}}>
              {item.subTitle}
            </Text>
            <Text style={{}}>₹{item.price}</Text>
          </View>
          <View style={{}}>
            <Icon
              name="ios-heart"
              size={22}
              color="grey"
              style={{marginTop: 3, marginRight: 10}}
            />
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default ItemListItem;
