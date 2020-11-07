import React from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Navbar = () => {
  return (
    <View
      style={{
        height: "8%",
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,

        borderTopColor: "#e8e8e8",
        borderTopWidth: 1,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            flex: 1,
            margin: 10,
          }}
        >
          <TouchableOpacity>
            <Image
              style={{ width: "100%", height: 40, resizeMode: "contain" }}
              source={require("../assets/business.png")}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 0.1,
            borderRightColor: "#e8e8e8",
            borderRightWidth: 2,
            height: "70%",
          }}
        ></View>
        <View
          style={{
            flex: 1,
            margin: 10,
          }}
        >
          <TouchableOpacity>
            <Image
              style={{
                width: "100%",
                height: 40,
                resizeMode: "contain",
              }}
              source={require("../assets/img_534831.png")}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 0.1,
            borderRightColor: "#e8e8e8",
            borderRightWidth: 2,
            height: "70%",
          }}
        ></View>
        <View style={{ flex: 1, margin: 10 }}>
          <TouchableOpacity>
            <Image
              style={{
                width: "100%",
                height: 40,
                resizeMode: "contain",
              }}
              source={require("../assets/iconfinder_Soccer_2138356.png")}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 0.1,
            borderRightColor: "#e8e8e8",
            borderRightWidth: 2,
            height: "70%",
          }}
        ></View>
        <View style={{ flex: 1, margin: 10 }}>
          <TouchableOpacity>
            <Image
              style={{
                width: "100%",
                height: 40,
                resizeMode: "contain",
              }}
              source={require("../assets/home.png")}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 0.1,
            borderRightColor: "#e8e8e8",
            borderRightWidth: 2,
            height: "70%",
          }}
        ></View>
        <View style={{ flex: 1, margin: 10 }}>
          <TouchableOpacity>
            <Image
              style={{
                width: "100%",
                height: 40,
                resizeMode: "contain",
              }}
              source={require("../assets/health.png")}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 0.1,
            borderRightColor: "#e8e8e8",
            borderRightWidth: 2,
            height: "70%",
          }}
        ></View>
        <View style={{ flex: 1, margin: 10 }}>
          <TouchableOpacity>
            <Image
              style={{
                width: "100%",
                height: 40,
                resizeMode: "contain",
              }}
              source={require("../assets/star.png")}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 0.1,
            borderRightColor: "#e8e8e8",
            borderRightWidth: 2,
            height: "70%",
          }}
        ></View>
        <View style={{ flex: 1, margin: 10 }}>
          <TouchableOpacity>
            <Image
              style={{
                width: "100%",
                height: 40,
                resizeMode: "contain",
              }}
              source={require("../assets/tech.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Navbar;
