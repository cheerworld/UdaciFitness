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
        <Image source={require("./headshotsmall5.png")} style={styles.img} />
        <View style={{ margin: 50 }} />
        <Image
          style={styles.img}
          source={{
            uri:
              "https://scontent-bos3-1.cdninstagram.com/v/t51.2885-19/s320x320/71526816_951098961915006_5073972027308638208_n.jpg?tp=1&_nc_ht=scontent-bos3-1.cdninstagram.com&_nc_ohc=q7TFmANx9bQAX9rCfet&ccb=7-4&oh=0c835fc508170585e8a270fc07381191&oe=60821C7A&_nc_sid=7bff83",
          }}
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
