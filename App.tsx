import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { navigationRef } from "./RootNavigation";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import NewsList from "./components/NewsList/NewsList";
import ArticleDetails from "./components/ArticleDetails";
import Navbar from "./components/Navbar";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <View style={{ marginTop: StatusBar.currentHeight, flex: 1 }}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
          <Stack.Screen name="Home">
            {(props) => <NewsList {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Sports">
            {(props) => <NewsList {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Health">
            {(props) => <NewsList {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Entertainment">
            {(props) => <NewsList {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Business">
            {(props) => <NewsList {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Technology">
            {(props) => <NewsList {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Science">
            {(props) => <NewsList {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Details">
            {(props) => <ArticleDetails {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
        <Navbar></Navbar>
      </NavigationContainer>

      {/*       <WebView source={{ uri: "https://reactnative.dev/" }} />
       */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
