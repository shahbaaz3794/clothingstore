import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

export const login = async (email, password) => {
  console.log(email, password, 'credentials');
  try {
    var response = await auth().signInWithEmailAndPassword(email, password);
    if (response) {
      const {user} = await response;
      await AsyncStorage.setItem('currentUser', JSON.stringify(user));
      return response;
    }
    console.log(response, 'response');
  } catch (error) {
    if (error.code === 'auth/wrong-password') {
      Alert.alert(
        `Wrong password`,
        [
          { text: "OK"}
        ]
      );
    }
    if (error.code === 'auth/user-not-found') {
      Alert.alert(
        `There is no user with this email`,
        [
          { text: "OK"}
        ]
      );
    }
    console.log(error, 'login errorrrrrrrrrrrrrrrrrr');
  }
};

export const signUp = async (email, password, name) => {
  try {
    var response = await auth().createUserWithEmailAndPassword(email, password);
    if (response) {
      var userData = await auth().currentUser;
      await userData.updateProfile({
        displayName: name,
      })
      const {user} = await response;
      await AsyncStorage.setItem('currentUser', JSON.stringify(user));
      return response;
    }
    console.log(response, 'signupResponseeeeeeee');
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      Alert.alert(
        `This email address is already in use!`,
        [
          { text: "OK"}
        ]
      );
      console.log('That email address is already in use!');
    }
    if (error.code === 'auth/invalid-email') {
      Alert.alert(
        `This email address is invalid!`,
        [
          { text: "OK"}
        ]
      );
      console.log('That email address is invalid!');
    }
  }
};

export const logout = async () => {
  try {
    var response = await auth().signOut();
    await AsyncStorage.removeItem('currentUser');
    if (response) {
      return response;
    }
    console.log('signed out');
  } catch (error) {
    Alert.alert(
      `Error signing out`,
      [
        { text: "OK"}
      ]
    );
    console.log(error, 'error signing out');
  }
};
