import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TextInput,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import AddEntry from "./components/AddEntry";

export default class App extends React.Component {
  state = {
    input: "@cheerworld",
    showInput: false,
  };

  handleToggleSwitch = () => {
    this.setState((preState) => ({
      showInput: !preState.showInput,
    }));
  };

  handleTextChange = (input) => {
    this.setState(() => ({
      input,
    }));
  };

  render() {
    const { input, showInput } = this.state;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Image
          source={require("./headshotsmall5.png")}
          style={styles.img}
        />
        <Switch value={showInput} onValueChange={this.handleToggleSwitch} />

        {showInput === true && (
          <TextInput
            value={input}
            style={styles.input}
            onChangeText={this.handleTextChange}
          />
        )}
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "stretch",
    justifyContent: "center",
  },
  input: {
    width: 200,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: "#757575",
    margin: 50,
  },
  img: {
    width: 100,
    height: 100,
    margin: 50,
  },
});
