import React from 'react';
import {Text, View, FlatList, TouchableOpacity, Dimensions} from 'react-native';
import {Image} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

function WishListItem({item, columns}) {
  return (
    <>
      <View
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
        <Icon
          name="ios-close-circle-outline"
          size={30}
          color="grey"
          style={{position: 'absolute', top: 10, right: 10}}
        />
        <View style={{margin: 5}}>
          <Text style={{fontWeight: 'bold', color: '#696969'}}>
            {item.title}
          </Text>
          <Text style={{fontSize: 12, color: '#808080'}}>{item.subTitle}</Text>
          <Text style={{}}>₹{item.price}</Text>
        </View>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            borderTopColor: 'grey',
            borderTopWidth: 0.5,
          }}>
          <Text style={{color: 'red', paddingVertical: 5}}>MOVE TO BAG</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default WishListItem;
