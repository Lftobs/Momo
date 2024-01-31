import { View, StyleSheet, Text } from "react-native";
import List from "../component/List";


export default function Portfolio() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.txt}>Portfolio</Text> 
      </View>
      <View style={styles.box}>
        <List isBtn={true} content={`View Group`}/>
      </View>
    </>
  )
}


export const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginHorizontal: 17,
    // flex:1,
    // height: '100%'
  },
  box: {
    marginHorizontal: 14,
    flex:1,
  },
  txt: {
    color: 'rgba(61 76 94 / 1)',
    fontWeight: '500',
    fontSize: 17,
  }
})