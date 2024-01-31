import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import Stats from '../component/home/Stats';
import List from '../component/List';


export default function Home({navigation}) {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Hello, <Text style={{...styles.text, fontWeight: '600'}}>Adedamolajoke</Text></Text>
      </View>
      <View style={styles.accountSection}>
        <Text style={[styles.accText, styles.Text]}>Total Balance</Text>
        <Text style={[styles.Text, styles.balance]}>&#8358;450,300.25</Text>
        <View style={styles.accContainer}>
          <Pressable style={styles.withdraw}>
            <Text style={styles.withdrawText}>Withdraw</Text>
            <Feather name="send" size={22} color="rgba(2 79 111 / 1)" />
          </Pressable>
          <Pressable style={styles.withdraw}>
            <Text style={styles.withdrawText}>Fund Account</Text>
            <Ionicons name="add-circle-outline" size={24} color="rgbargba(2 79 111 / 1)" />
          </Pressable>
        </View> 
      </View>

      <View style={styles.statsContainer}>
          <Stats />
      </View>

      <View style={styles.recent}>
        <Text style={styles.recentTxt}>Recent Groups</Text>
        <List isBtn={false} />
        {/* <Recent /> */}
      </View>
      
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    // flexDirection: 'row',
    marginHorizontal: 17,
    marginTop: 50,
    alignItems: 'center',
  },
  text: {
    textAlign: 'left',
    width: '100%',
    fontSize: 17,
    color: 'rgba(61 76 94 / 1)'
  },
  accountSection : {
    backgroundColor: 'rgba(2 79 111 / 1)',
    marginHorizontal: 16,
    marginTop: 10,
    borderRadius: 10,
  },
  accContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
  },
  Text: {
    color: 'white',
    marginLeft: 20,
  },
  accText: {
    marginTop: 20,
    marginBottom: 5,
    fontSize: 15,
  },
  balance: {
    fontWeight: 600,
    fontSize: 20
  },
  withdraw: {
    height: 40,
    flexDirection: 'row',
    gap: 6,
    backgroundColor: 'white',
    width: '49%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  withdrawText: {
    fontSize: 14,
    fontWeight: '500',
    color: 'rgba(2 79 111 / 1)'
  },
  statsContainer: {
    marginTop: 10,
    flexDirection: 'row',
    marginHorizontal: 16,
    justifyContent: 'space-between'
  },
  recent: { 
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 17,
  },
  recentTxt: {
    color: 'rgba(61 76 94 / 1)',
    fontWeight: '500',
    fontSize: 15,
  }
});
