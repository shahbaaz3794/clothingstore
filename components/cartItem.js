import React, {useState, useRef, useEffect} from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import {Image} from 'react-native-elements';
import SizeBottomSheet from './sizeBottomSheet';
import QuantityBottomSheet from './quantityBottomSheet';

const CartItem = ({item, handleCartChanges}) => {
  const sizeBSheet = useRef();
  const quantityBSheet = useRef();

  const [size, setSize] = useState(item.itemSize);
  const [quantity, setQuantity] = useState(item.itemQuantity);

  return (
    <>
      <View style={{marginTop: 15, backgroundColor: '#fff'}}>
        <View style={{flexDirection: 'row', padding: 10}}>
          <Image
            style={{height: 150, width: 100, resizeMode: 'stretch'}}
            source={{uri: item.imageURL}}
          />
          <View style={{padding: 10}}>
            <Text style={{fontWeight: 'bold', color: 'black', fontSize: 15}}>
              {item.title}
            </Text>
            <Text style={{fontSize: 13, color: '#808080', marginTop: 3}}>
              {item.subTitle}
            </Text>
            <View style={{flexDirection: 'row', marginTop: 7}}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: 'lightgrey',
                  paddingHorizontal: 7,
                  paddingVertical: 2,
                  borderRadius: 5,
                }}
                onPress={() => sizeBSheet.current.open()}>
                <Text style={{fontWeight: 'bold', fontSize: 14}}>
                  Size: {size}
                </Text>
                <Text style={{fontWeight: 'bold', fontSize: 10, marginLeft: 3}}>
                  ▼
                </Text>
              </TouchableOpacity>
              <SizeBottomSheet sizeBSheet={sizeBSheet} setSize={setSize} size={size} />
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: 'lightgrey',
                  paddingHorizontal: 7,
                  paddingVertical: 2,
                  borderRadius: 5,
                  marginLeft: 10,
                }}
                onPress={() => quantityBSheet.current.open()}>
                <Text style={{fontWeight: 'bold', fontSize: 14}}>
                  Qty: {quantity}
                </Text>
                <Text style={{fontWeight: 'bold', fontSize: 10, marginLeft: 3}}>
                  ▼
                </Text>
              </TouchableOpacity>
              <QuantityBottomSheet
                quantityBSheet={quantityBSheet}
                setQuantity={setQuantity}
                quantity={quantity}
                item={item}
                handleCartChanges={handleCartChanges}
              />
            </View>
            <Text style={{marginTop: 7}}>₹ {item.price}</Text>
            <Text style={{fontSize: 13, color: '#808080', marginTop: 5}}>
              {item.deliveryDetails}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderTopColor: 'lightgrey',
            borderTopWidth: 0.5,
          }}>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: 'center',
              height: 30,
              justifyContent: 'center',
            }}>
            <Text style={{color: 'grey', fontWeight: 'bold'}}>REMOVE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: 'center',
              height: 30,
              justifyContent: 'center',
              borderLeftColor: 'lightgrey',
              borderLeftWidth: 0.5,
            }}>
            <Text style={{color: 'grey', fontWeight: 'bold'}}>
              MOVE TO WISHLIST
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default CartItem;
