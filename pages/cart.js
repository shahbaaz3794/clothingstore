import React, {useState, useRef} from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import HomeHeader from '../components/homeHeader';
import {cartData} from '../components/cartData';
import CartItem from '../components/cartItem';

const Cart = ({navigation}) => {
  
  const [cartAmount, setCartAmount] = useState();

  return (
    <SafeAreaView>
      <HomeHeader navigation={navigation} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
          marginHorizontal: 10,
        }}>
        <Text>1 ITEM</Text>
        <Text>Total: ₹{cartAmount}</Text>
      </View>
      <FlatList
        data={cartData}
        renderItem={({item}) => (
          <CartItem item={item} setCartAmount={setCartAmount} cartAmount={cartAmount} />
        )}
      />
      <TouchableOpacity
        style={{
          backgroundColor: '#05679E',
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
          marginHorizontal: 8,
          marginTop: 15,
        }}>
        <Text style={{color: '#fff'}}>Place Order</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Cart;
