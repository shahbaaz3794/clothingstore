import React,{useState,useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ListItem} from 'react-native-elements';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Avatar} from 'react-native-elements';
import {logout} from '../components/firebaseAuthentication';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomDrawerContent = ({navigation}, props) => {
  const insets = useSafeAreaInsets();
  const [displayname, setDisplayname] = useState("");

  useEffect(() => {
    getDisplayName();
  }, [])

  const userLogout = async () => {
    logout(navigation)
  };

  const getDisplayName = async() => {
    const user = await AsyncStorage.getItem('currentUser');
    let {displayName} = JSON.parse(user);
    setDisplayname(displayName);
  };

  return (
    <>
      <View style={{marginTop: insets.bottom, marginLeft: insets.left}}>
        <View style={styles.drawerHeader}>
          <View style={styles.headerContent}>
            <Avatar
              size="medium"
              icon={{name: 'user', type: 'font-awesome'}}
              rounded
              // onPress={console.log('q')}
              source={{
                uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
              }}
            />
            <Text style={styles.headerText}>{displayname}</Text>
          </View>
        </View>
        <ListItem
          bottomDivider
          onPress={() => navigation.navigate('Bottom Tab')}>
          <Ionicons name="home" size={20} color="grey" />
          <ListItem.Content>
            <ListItem.Title>Home</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem
          bottomDivider
          onPress={() => navigation.navigate('Categories')}>
          <MaterialIcons name="category" size={20} color="grey" />
          <ListItem.Content>
            <ListItem.Title>Categories</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem
          bottomDivider
          onPress={() => navigation.navigate('My Orders')}>
          <MaterialIcons name="shopping-bag" size={20} color="grey" />
          <ListItem.Content>
            <ListItem.Title>My Orders</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem
          bottomDivider
          onPress={() => navigation.navigate('Contact Us')}>
          <MaterialIcons name="support-agent" size={20} color="grey" />
          <ListItem.Content>
            <ListItem.Title>Contact Us</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem bottomDivider onPress={() => userLogout()}>
          <MaterialIcons name="logout" size={20} color="grey" />
          <ListItem.Content>
            <ListItem.Title>Logout</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  drawerHeader: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgrey',
    backgroundColor: '#c7e9fc',
  },
  headerText: {
    marginLeft: 10,
    fontSize: 18,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
});

export default CustomDrawerContent;
