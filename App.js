import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, ImageBackground, View } from "react-native";
import backgroundImage from "./assets/bg.png";
import { useFonts } from "expo-font";
import AppNavigator from "./navigation/AppNavigator";
import AppLoading from "./AppLoading";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
// const { EventEmitter } = require('events');

export default function App() {
  let [fontsLoaded] = useFonts({
    "Barlow-Regular": require("./assets/fonts/Barlow-Regular.ttf"),
    "Barlow-SemiBold": require("./assets/fonts/Barlow-SemiBold.ttf"),
    "Barlow-Bold": require("./assets/fonts/Barlow-Bold.ttf"),
  });
  // EventEmitter.defaultMaxListeners = 15;
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar style="auto" />

        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
const styles = StyleSheet.create({});
