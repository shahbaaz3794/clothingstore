import React from 'react';
import 'react-native-gesture-handler';
import Routes from './routes/mainRoutes';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';

FontAwesome.loadFont();
Ionicons.loadFont();
MaterialIcons.loadFont();
Fontisto.loadFont();


export default function App() {
  return <Routes />;
}