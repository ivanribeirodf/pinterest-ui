import  { Slot }  from "expo-router"
import { StatusBar } from "react-native"
import { GestureHandlerRootView }from "react-native-gesture-handler"
import * as Splashscreen from "expo-splash-screen"

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto"

Splashscreen.preventAutoHideAsync()

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  })

  if(!fontsLoaded){
    Splashscreen.hideAsync()
  }

  return (
    <GestureHandlerRootView style={{flex:1}}>
      <StatusBar barStyle={"light-content"} />
      {fontsLoaded && <Slot />}
    </GestureHandlerRootView>
  )
}