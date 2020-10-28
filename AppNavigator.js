import React,{useState,useEffect} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './srceens/Auth/Login'
import * as firebase from 'firebase'
import SignUp from './srceens/Auth/SignUp'
import Home from './srceens/Dashboard/Home';
import Loading from './srceens/Loading';
import AddFood from './srceens/Admin/AddFood';
import PortFolio from './srceens/Dashboard/PortFolio'
import AdminStack from './AdminStack'

const Stack = createStackNavigator();

const AppNavigator = () => {
  const [loggedIn, setLoggedIn] = useState(null);
  const [isAdmin, setisAdmin] = useState(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) setLoggedIn(true);
      else setLoggedIn(false);
    });
  });
  // useEffect(() => {
  //   if (loggedIn) {
  //     firebase
  //       .database()
  //       .ref("users")
  //       .on('value',(user)=>{

  //       })
      
  //   }
  // });
  return (
    <NavigationContainer >
      <Stack.Navigator headerMode="screen">
        <Stack.Screen options={{headerShown:false}} name="Loading" component={Loading} />
        <Stack.Screen options={{headerTintColor:'#fff',headerStyle:{backgroundColor:'#8F2209'}}} name="SignUp" component={SignUp} />
        <Stack.Screen options={{headerTintColor:'#fff',headerStyle:{backgroundColor:'#8F2209'}}} name="Login" component={Login} />
        <Stack.Screen  options={{headerShown:false}} name="Home" component={Home} />
        <Stack.Screen  options={{headerShown:false}} name="AddFood" component={AddFood} />
        <Stack.Screen  options={{headerShown:false}} name="PortFolio" component={PortFolio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
