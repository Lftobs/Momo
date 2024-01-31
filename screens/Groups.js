import { View, StyleSheet, Text } from "react-native";
import List from "../component/List";
import { styles } from "./Portfolio";


export default function Groups() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.txt}>Groups</Text> 
      </View>
      <View style={styles.box}>
        <List isBtn={true} content={`Join Group`}/>
      </View>
    </>
  )
}