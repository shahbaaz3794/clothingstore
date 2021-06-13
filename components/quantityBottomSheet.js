import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {quantityList} from '../components/cartData';

const QuantityBottomSheet = ({
  quantityBSheet,
  setQuantity,
  quantity,
  item,
  handleCartChanges,
}) => {
  const [selectedQuantity, setSelectedQuantity] = useState(quantity);

  const setItemQuantity = () => {
    setQuantity(selectedQuantity);
    handleCartChanges(item, selectedQuantity);
    quantityBSheet.current.close();
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
          {quantityList.map((quantityCount, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={
                  selectedQuantity === quantityCount
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
                onPress={() => setSelectedQuantity(quantityCount)}>
                <Text
                  style={
                    selectedQuantity === quantityCount
                      ? {color: '#fff', paddingHorizontal: 10}
                      : {paddingHorizontal: 10}
                  }>
                  {quantityCount}
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
          onPress={setItemQuantity}>
          <Text style={{color: '#fff'}}>Done</Text>
        </TouchableOpacity>
      </View>
    </RBSheet>
  );
};

export default QuantityBottomSheet;
