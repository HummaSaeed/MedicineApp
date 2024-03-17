import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, ImageBackground, View } from "react-native";
import backgroundImage from "./assets/bg.png";
import { useFonts } from "expo-font";
// import LoginScreen from "./screens/LoginScreen";
import AppNavigator from "./navigation/AppNavigator";
import AppStack from "./navigation/AppStack";
import AppLoading from "./AppLoading";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/LoginScreen";
// import DrawerNavigator from "./navigation/DrawerNavigator";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Barlow-Regular": require("./assets/fonts/Barlow-Regular.ttf"),
    "Barlow-SemiBold": require("./assets/fonts/Barlow-SemiBold.ttf"),
    "Barlow-Bold": require("./assets/fonts/Barlow-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="auto" />
      {/* <LoginScreen /> */}
      <NavigationContainer>
       <AppNavigator/>
     </NavigationContainer>
    </>
  );
}
const styles = StyleSheet.create({});
