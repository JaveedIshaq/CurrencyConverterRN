import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import EStyleSheet from "react-native-extended-stylesheet";
import Home from "./screens/Home";

EStyleSheet.build({
   $primaryBlue: '#4F6D7A',
   $white: '#FFFFFF'
});

export default class App extends Component {
  render() {
    return (
      <View>
         <Text>Javeed</Text>
         <Home />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
