import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {signUp} from '../components/firebaseAuthentication';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loader, setLoader] = useState(false);

  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const userSignUp = async () => {
    if (password === confirmPassword) {
      var {user} = await signUp(email, password, name);
      if (user) {
        navigation.replace('Drawer');
      }
      setLoader(false);
    }
  };

  const signUpValidation = () => {
    if (name === '') {
      Alert.alert('Please enter a name', [{text: 'OK'}]);
    } else if (email === '') {
      Alert.alert('Please enter an email', [{text: 'OK'}]);
    } else if (reg.test(email) === false) {
      Alert.alert('Please enter a valid email', [{text: 'OK'}]);
    } else if (password === '') {
      Alert.alert("Password can't be empty", [{text: 'OK'}]);
    } else if (confirmPassword !== password) {
      Alert.alert('Confirm password and password does not match', [
        {text: 'OK'},
      ]);
    } else {
      setLoader(true);
      userSignUp();
    }
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.center}>
          <Text style={styles.loginText}>Sign Up</Text>
          <TextInput
            style={styles.inputStyle}
            selectionColor={'#fff'}
            placeholder="Name"
            placeholderTextColor={'#fff'}
            onChangeText={text => setName(text)}
            value={name}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.inputStyle}
            selectionColor={'#fff'}
            placeholder="Email"
            placeholderTextColor={'#fff'}
            onChangeText={text => setEmail(text)}
            value={email}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.inputStyle}
            selectionColor={'#fff'}
            placeholder="Password"
            placeholderTextColor={'#fff'}
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
            value={password}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.inputStyle}
            selectionColor={'#fff'}
            placeholder="Confirm Password"
            placeholderTextColor={'#fff'}
            onChangeText={text => setConfirmPassword(text)}
            secureTextEntry={true}
            value={confirmPassword}
            autoCapitalize="none"
          />
          <View style={styles.loginBtnContainer}>
            <TouchableOpacity onPress={() => signUpValidation()}>
              <View style={styles.loginButton}>
                {loader && (
                  <ActivityIndicator true size="small" color="#05679E" />
                )}
                {!loader && <Text style={styles.loginButtonText}>Sign Up</Text>}
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Already a member?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <View style={styles.signUpButton}>
                <Text style={styles.signUpButtonText}>Login</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#05679E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    width: '90%',
  },
  loginText: {
    color: '#fff',
    fontSize: 50,
    fontWeight: 'bold',
  },
  inputStyle: {
    height: 45,
    borderColor: '#fff',
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 25,
    paddingLeft: 20,
    paddingRight: 20,
    color: '#fff',
    fontSize: 15,
  },
  loginBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginButton: {
    backgroundColor: '#fff',
    height: 40,
    borderRadius: 25,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  loginButtonText: {
    color: '#05679E',
    fontSize: 22,
    fontWeight: 'bold',
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  signUpText: {
    color: '#fff',
    fontSize: 14,
    marginRight: 5,
  },
  signUpButton: {
    backgroundColor: '#075480',
    height: 30,
    borderRadius: 10,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  signUpButtonText: {
    color: '#fff',
    fontSize: 15,
  },
});

export default SignUp;
