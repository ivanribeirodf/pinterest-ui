import {View, StyleSheet, Text } from "react-native"
import { theme } from "@/theme"
import { fontFamily } from "@/theme/fontFamily"

export default function Home(){
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.black
  },
  text: {
    fontSize:22,
    color: theme.colors.white,
    fontFamily: theme.fontFamily.bold
    
  },
})