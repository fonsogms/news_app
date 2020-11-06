import React from "react";
import { Image, Text, View } from "react-native";
import { Icon } from "react-native-elements";

const Navbar = () => {
  return (
    <View
      style={{
        height: "10%",
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Image
          style={{ width: "16%", height: 50, resizeMode: "cover" }}
          source={require("../assets/business1600.png")}
        />
        <Image
          style={{ width: "16%", height: 50, resizeMode: "cover" }}
          source={require("../assets/business1600.png")}
        />
        <Image
          style={{ width: "16%", height: 50, resizeMode: "cover" }}
          source={require("../assets/business1600.png")}
        />
        <Image
          style={{ width: "16%", height: 50, resizeMode: "cover" }}
          source={require("../assets/business1600.png")}
        />
        <Image
          style={{ width: "16%", height: 50, resizeMode: "cover" }}
          source={require("../assets/business1600.png")}
        />
        <Image
          style={{ width: "16%", height: 50, resizeMode: "cover" }}
          source={require("../assets/business1600.png")}
        />
      </View>
    </View>
  );
};

export default Navbar;
