import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

export const login = async (email, password) => {
  try {
    var response = await auth().signInWithEmailAndPassword(email, password);
    if (response) {
      const {user} = await response;
      await AsyncStorage.setItem('currentUser', JSON.stringify(user));
      return response;
    }
  } catch (error) {
    if (error.code === 'auth/wrong-password') {
      Alert.alert(`Wrong password`, [{text: 'OK'}]);
    }
    if (error.code === 'auth/user-not-found') {
      Alert.alert(`There is no user with this email`, [{text: 'OK'}]);
    }
  }
};

export const signUp = async (email, password, name) => {
  try {
    var response = await auth().createUserWithEmailAndPassword(email, password);
    if (response) {
      var userData = await auth().currentUser;
      await userData.updateProfile({
        displayName: name,
      });
      const {user} = await response;
      await AsyncStorage.setItem('currentUser', JSON.stringify(user));
      return response;
    }
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      Alert.alert(`This email address is already in use!`, [{text: 'OK'}]);
    }
    if (error.code === 'auth/invalid-email') {
      Alert.alert(`This email address is invalid!`, [{text: 'OK'}]);
    }
  }
};

export const logout = async (navigation) => {
  try {
    await auth().signOut();
    await AsyncStorage.clear();
    navigation.replace('Login');
    return true;
  } catch (error) {
    AsyncStorage.clear();
    Alert.alert(`Error signing out`, [{text: 'OK'}]);
  }
};
