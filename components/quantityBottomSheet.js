import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {quantity} from '../components/cartData';

const QuantityBottomSheet = ({quantityBSheet, setQuantity}) => {
  const [selectedQuantity, setSelectedQuantity] = useState('');

  const setItemQuantity = item => {
    setSelectedQuantity(item);
    setQuantity(item);
  };

  return (
    <RBSheet
      ref={quantityBSheet}
      closeOnPressBack={true}
      closeOnPressMask={true}
      height={200}
      customStyles={{
        wrapper: {
          backgroundColor: 'transparent',
        },
      }}>
      <View
        style={{
          backgroundColor: '#fff',
          marginHorizontal: 10,
          marginVertical: 20,
        }}>
        <Text>Select Quantity</Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 15,
          }}>
          {quantity.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={
                  selectedQuantity === item
                    ? {
                        borderRadius: 25,
                        borderColor: '#05679E',
                        borderWidth: 1,
                        height: 40,
                        minWidth: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: 20,
                        backgroundColor: '#05679E',
                      }
                    : {
                        borderRadius: 25,
                        borderColor: 'grey',
                        borderWidth: 1,
                        height: 40,
                        minWidth: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: 20,
                      }
                }
                onPress={() => setItemQuantity(item)}>
                <Text
                  style={
                    selectedQuantity === item
                      ? {color: '#fff', paddingHorizontal: 10}
                      : {paddingHorizontal: 10}
                  }>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <TouchableOpacity
          style={{
            width: '100%',
            backgroundColor: '#05679E',
            justifyContent: 'center',
            alignItems: 'center',
            height: 40,
            borderRadius: 8,
            marginTop: 15,
          }}
          onPress={() => quantityBSheet.current.close()}>
          <Text style={{color: '#fff'}}>Done</Text>
        </TouchableOpacity>
      </View>
    </RBSheet>
  );
};

export default QuantityBottomSheet;
