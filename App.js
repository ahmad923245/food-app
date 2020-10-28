import React, { Component } from 'react'
import { Text, View } from 'react-native'
import * as firebase from 'firebase'
import {firebaseConfig} from './firebase/config'
import Login from './srceens/Auth/Login'
import AppNavigator from './AppNavigator'

firebase.initializeApp(firebaseConfig)

export class App extends Component {
  render() {
    return (
    <AppNavigator/>
    )
  }
}

export default App
