import React from "react";
import { View, Text, StyleSheet, SectionList } from "react-native";
import AddEntry from "./components/AddEntry";

const DATA = [
  {
    pop: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"]
  },
  {
    pop: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"]
  },
  {
    pop: "Drinks",
    data: ["Water", "Coke", "Beer"]
  },
  {
    pop: "Desserts",
    data: ["Cheese Cake", "Ice Cream"]
  }
];

const Item = ({item}) => {
  console.log(item);
  return (
    <View>
      <Text style={styles.title}>{item}</Text>
    </View>
  )
}

export default class App extends React.Component {
  state = {
    value: 0,
  };

  render() {
    return (
      <View style={styles.container}>
        <AddEntry />
        <SectionList
          sections={DATA}
          renderItem={({item})=> <Item item={item}/>}
          renderSectionHeader={({section: {pop}})=>(
            <Text style={styles.header}>{pop}</Text>
          )}
        />
      </View>
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
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  }
});
