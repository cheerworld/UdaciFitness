
import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import AddEntry from "./components/AddEntry";

export default class App extends React.Component {
  

  render() {
    return (
      <View>
        <AddEntry />
      </View>
    );
  }
}
