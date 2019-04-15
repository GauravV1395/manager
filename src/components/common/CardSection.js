import React from "react";
import { View } from "react-native";

const CardSection = props => {
  return (
    <View style={[styles.containerStyle, props.style]}>{props.children}</View> // this will take an array of arguments where if the second prop of style is given, then the first style prop will be overridden.
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    flexDirection: "row",
    borderColor: "#ddd",
    position: "relative"
  }
};

export { CardSection };
