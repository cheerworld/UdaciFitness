import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import AddEntry from "./components/AddEntry";

export default class App extends React.Component {

  render () {
  return (
    <View>
      <AddEntry />
      <StatusBar style="auto" />
    </View>
  );
}
}
