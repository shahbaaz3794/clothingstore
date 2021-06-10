import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

const BottomtabContent = ({state, descriptors, navigation}) => {
  const [activeTab, setActiveTab] = useState('home');
  const insets = useSafeAreaInsets();

  return (
    <>
      <View
        style={{
          marginBottom: insets.bottom,
          height: 50,
          backgroundColor: '#fff',
          display: 'flex',
          flexDirection: 'row',
          borderTopWidth: 1,
          borderTopColor: 'lightgrey',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: `${activeTab === 'home' ? '#05679E' : `#fff`}`,
            height: '100%',
            width: '25%',
            display: 'flex',
            justifyContent: 'center',
          }}
          onPress={() => {
            setActiveTab('home');
            navigation.navigate('Home');
          }}>
          <View style={{display: 'flex', alignItems: 'center'}}>
            <Icon
              name="home"
              size={20}
              color={activeTab === 'home' ? `#fff` : `grey`}
            />
            <Text style={{color: `${activeTab === 'home' ? `#fff` : `grey`}`}}>
              Home
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: `${activeTab === 'wishlist' ? '#05679E' : `#fff`}`,
            height: '100%',
            width: '25%',
            display: 'flex',
            justifyContent: 'center',
          }}
          onPress={() => {
            setActiveTab('wishlist');
            navigation.navigate('Wishlist');
          }}>
          <View style={{display: 'flex', alignItems: 'center'}}>
            <Icon
              name="heart"
              size={20}
              color={activeTab === 'wishlist' ? `#fff` : `grey`}
            />
            <Text
              style={{
                color: `${activeTab === 'wishlist' ? `#fff` : `grey`}`,
              }}>
              Wishlist
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: `${activeTab === 'cart' ? '#05679E' : `#fff`}`,
            height: '100%',
            width: '25%',
            display: 'flex',
            justifyContent: 'center',
          }}
          onPress={() => {
            setActiveTab('cart');
            navigation.navigate('Cart');
          }}>
          <View style={{display: 'flex', alignItems: 'center'}}>
            <Icon
              name="cart"
              size={20}
              color={activeTab === 'cart' ? `#fff` : `grey`}
            />
            <Text style={{color: `${activeTab === 'cart' ? `#fff` : `grey`}`}}>
              Cart
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: `${activeTab === 'profile' ? '#05679E' : `#fff`}`,
            height: '100%',
            width: '25%',
            display: 'flex',
            justifyContent: 'center',
          }}
          onPress={() => {
            setActiveTab('profile');
            navigation.navigate('Profile');
          }}>
          <View style={{display: 'flex', alignItems: 'center'}}>
            <Icon
              name="ios-person-circle"
              size={20}
              color={activeTab === 'profile' ? `#fff` : `grey`}
            />
            <Text
              style={{color: `${activeTab === 'profile' ? `#fff` : `grey`}`}}>
              Profile
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

// const styles = StyleSheet.create({
//   bottomTabContainer: {
//     height: 50,
//     backgroundColor: '#fff',
//     display: 'flex',
//     flexDirection: 'row',
//     borderTopWidth: 1,
//     borderTopColor: 'lightgrey',
//   },
// });

export default BottomtabContent;
