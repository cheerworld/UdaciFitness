import React from "react";
import { View, Text, StyleSheet, Platform, StatusBar } from "react-native";
import AddEntry from "./components/AddEntry";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import History from "./components/History";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { purple, white } from "./utils/colors";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Constants from "expo-constants";
import EntryDetail from "./components/EntryDetail";
import { createStackNavigator } from "@react-navigation/stack";
import Live from "./components/Live";
import { setLocalNotification } from './utils/helpers';

function UdaciStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

const Tab =
  Platform.OS === "ios"
    ? createBottomTabNavigator()
    : createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="History"
      tabBarOptions={{
        activeTintColor: Platform.OS === "ios" ? purple : white,
        style: {
          height: 56,
          backgroundColor: Platform.OS === "ios" ? white : purple,
          shadowColor: "rgba(0, 0, 0, 0.24)",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowRadius: 6,
          shadowOpacity: 1,
        },
      }}
    >
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarLabel: "History",
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-bookmarks" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="AddEntry"
        component={AddEntry}
        options={{
          tabBarLabel: "Add Entry",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="plus-square" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Live"
        component={Live}
        options={{
          tabBarLabel: "Live",
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-speedometer" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MyTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EntryDetail"
          component={EntryDetail}
          options={{
            headerTintColor: white,
            headerStyle: {
              backgroundColor: purple,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
          <MainNavigator />
        </View>
      </Provider>
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
});
