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
import {login} from '../components/firebaseAuthentication';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loader, setLoader] = useState(false);

  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const userLogin = async () => {
    var {user} = await login(email, password);
    if (user) {
      setLoader(false);
      navigation.replace('Drawer');
    }
  };

  const loginValidation = () => {
    if (email === '') {
      Alert.alert('Please enter an email', [{text: 'OK'}]);
    } else if (reg.test(email) === false) {
      Alert.alert('Please enter a valid email', [{text: 'OK'}]);
    } else if (password === '') {
      Alert.alert("Password can't be empty", [{text: 'OK'}]);
    } else {
      setLoader(true);
      userLogin();
    }
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.center}>
          <Text style={styles.loginText}>Login</Text>
          <TextInput
            onChangeText={text => setEmail(text)}
            placeholder="Email"
            placeholderTextColor="#fff"
            style={styles.inputStyle}
            selectionColor={'#fff'}
            autoCapitalize="none"
            value={email}
          />
          <TextInput
            onChangeText={text => setPassword(text)}
            placeholder="Password"
            placeholderTextColor="#fff"
            style={styles.inputStyle}
            selectionColor={'#fff'}
            autoCapitalize="none"
            value={password}
          />
          <View style={styles.loginBtnContainer}>
            <TouchableOpacity onPress={() => loginValidation()}>
              <View style={styles.loginButton}>
                {loader && (
                  <ActivityIndicator true size="small" color="#05679E" />
                )}
                {!loader && <Text style={styles.loginButtonText}>Login</Text>}
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>First time here?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <View style={styles.signUpButton}>
                <Text style={styles.signUpButtonText}>Sign Up</Text>
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

export default Login;
