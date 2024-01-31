import { View, StyleSheet, Text } from "react-native";


export default function Stats() {
  return (
    <>
    <View style={[styles.container, styles.groups]}>
        <Text style={styles.text}>No of groups</Text>
        <Text style={styles.textNo}>5</Text>
    </View>
    <View style={[styles.container, styles.port]}>
        <Text style={styles.text}>No of portfolios</Text>
        <Text style={styles.textNo}>6</Text>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        height: 100,
        justifyContent: 'center',
        paddingHorizontal: 20,
        width: '47%',
        borderColor: 'rgba(151 183 196 / 1)',
        borderWidth: 1
    },
    groups: {
        backgroundColor: 'rgba(230 237 241 / 1)',  
    },
    port: {
        backgroundColor: 'rgba(255 203 1 / .2)', 
    },
    text: {
        color: 'rgba(61 76 94 / 1)',
        marginBottom: 5
    },
    textNo: {
        fontSize: 19,
        color: 'rgba(61 76 94 / 1)',
        fontWeight: '600'
    }
})
