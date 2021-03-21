
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Slider,
} from "react-native";
import AddEntry from "./components/AddEntry";

export default class App extends React.Component {
  state = {
    value: 0
  }

  render() {
    return (
      <View>
        <AddEntry />
        <Slider
          value={this.state.value}
          onValueChange={(value) => this.setState(() => ({ value }))}
        />
        <Text>Value: {this.state.value}</Text>
      </View>
    );
  }
}
