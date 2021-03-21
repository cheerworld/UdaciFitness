import React from "react";
import { View, Text } from "react-native";
import Slider from "@react-native-community/slider";

export default function UdaciSlider({ max, unit, step, value, onChange }) {
  //console.log(props)
  return (
    <View>
      <Slider
        minimumValue={0}
        maximumValue={max}
        step={step}
        value={value}
        onValueChange={onChange}
      />
      <View>
        <Text>{value}</Text>
        <Text>{unit}</Text>
      </View>
    </View>
  );
}
