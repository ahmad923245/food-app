import React, { Component } from 'react';
import { View, Text,ActivityIndicator } from 'react-native';
import {Spinner} from 'native-base'
import * as firebase from 'firebase'

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
      firebase.auth().onAuthStateChanged((user)=>{
          if(user){
            this.props.navigation.replace('Home')
          }else{
            this.props.navigation.replace('Login')
          }
      })
  }
  render() {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
       <ActivityIndicator
       size="large"
       color="#8F2209"
       />
      </View>
    );
  }
}

export default Loading;
