import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {itemSize} from '../components/cartData';

const SizeBottomSheet = ({sizeBSheet, setSize, size}) => {
  const [selectedSize, setSelectedSize] = useState(size);

  const setItemSize = () => {
    setSize(selectedSize);
    sizeBSheet.current.close();
  };

  return (
    <RBSheet
      ref={sizeBSheet}
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
        <Text>Select Size</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 15,
          }}>
          {itemSize.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={
                  selectedSize === item
                    ? {
                        borderRadius: 25,
                        borderColor: '#05679E',
                        borderWidth: 1,
                        height: 40,
                        minWidth: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
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
                      }
                }
                onPress={() => setSelectedSize(item)}>
                <Text
                  style={
                    selectedSize === item
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
          onPress={setItemSize}>
          <Text style={{color: '#fff'}}>Done</Text>
        </TouchableOpacity>
      </View>
    </RBSheet>
  );
};

export default SizeBottomSheet;
