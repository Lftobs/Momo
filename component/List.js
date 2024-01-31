import { SafeAreaView, StyleSheet, View, Text, VirtualizedList, Pressable } from "react-native";
import { SvgXml } from "react-native-svg";


const icon = `<svg width="4" height="4" stroke='rgba(61 76 94 / 1)' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.15957 10.87C9.05957 10.86 8.93957 10.86 8.82957 10.87C6.44957 10.79 4.55957 8.84 4.55957 6.44C4.55957 3.99 6.53957 2 8.99957 2C11.4496 2 13.4396 3.99 13.4396 6.44C13.4296 8.84 11.5396 10.79 9.15957 10.87Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.4103 4C18.3503 4 19.9103 5.57 19.9103 7.5C19.9103 9.39 18.4103 10.93 16.5403 11C16.4603 10.99 16.3703 10.99 16.2803 11" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.15973 14.56C1.73973 16.18 1.73973 18.82 4.15973 20.43C6.90973 22.27 11.4197 22.27 14.1697 20.43C16.5897 18.81 16.5897 16.17 14.1697 14.56C11.4297 12.73 6.91973 12.73 4.15973 14.56Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.3398 20C19.0598 19.85 19.7398 19.56 20.2998 19.13C21.8598 17.96 21.8598 16.03 20.2998 14.86C19.7498 14.44 19.0798 14.16 18.3698 14" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`

const data = [
  {
    id: 1,
    group: 'Onion Sellers',
    amount: '450,300.25',
    creator: 'Adedamolajoke',
    members: 30
  },
  {
    id: 2,
    group: 'Oil Sellers',
    amount: '450,300.25',
    creator: 'Adedamolajoke',
    members: 30
  },
  {
    id: 3,
    group: 'Tomato Sellers',
    amount: '450,300.25',
    creator: 'Adedamolajoke',
    members: 30
  },
  {
    id: 4,
    group: 'Garri Sellers',
    amount: '450,300.25',
    creator: 'Adedamolajoke',
    members: 30
  },
  {
    id: 5,
    group: 'Beans Sellers',
    amount: '450,300.25',
    creator: 'Adedamolajoke',
    members: 30
  },
  {
    id: 6,
    group: 'Orange Sellers',
    amount: '450,300.25',
    creator: 'Adedamolajoke',
    members: 30
  },
  {
    id: 7,
    group: 'Yam Sellers',
    amount: '450,300.25',
    creator: 'Adedamolajoke',
    members: 30
  },
  {
    id: 8,
    group: 'Rice Sellers',
    amount: '450,300.25',
    creator: 'Adedamolajoke',
    members: 30
  },
]

const Item = ({group, amount, creator, members, isBtn, content}) => (
  <View style={styles.container}>
    <View style={[styles.flex, styles.top]}>
      <Text style={{...styles.text, fontWeight: '500', fontSize: 15}}>{group}</Text>
      <Text style={styles.textNo}>&#8358;{amount}</Text>
    </View>
    <View style={styles.flex}>
      <View style={[ styles.flex, styles.creator]}>
        <SvgXml xml={icon} width={20} height={20} />
        <Text style={{color: 'rgba(61 76 94 / 1)'}}>Creator: {creator}</Text>
      </View>
        <Text style={styles.members}>{members} members</Text>
    </View>
    {
      isBtn && (
        <Pressable style={styles.btn}>
          <Text style={{...styles.text, fontWeight: '500'}}>{content}</Text>
        </Pressable>
      )
    }
    
  </View>
);

const items = ({item, isBtn, content}) => (
  <Item group={item.group} amount={item.amount} creator={item.creator} members={item.members} isBtn={isBtn} content={content}/>
)

const getItemCount = (data) => 8
console.log(data.length)

export default function List({isBtn, content}) {
  console.log(isBtn, 'btn')
  return (
    <>
      <SafeAreaView style={styles.items} >
        <VirtualizedList
          initialNumToRender={4}
          data={data}
          showsVerticalScrollIndicator={false} 
          renderItem={(props) => items({...props, isBtn, content})}
          keyExtractor={item => item.id}
          getItemCount={getItemCount}
          getItem={(data, index) => data[index]}
          // extraData={isBtn}
        />
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
      borderRadius: 20,
      // minHeight: 100,
      maxHeight: 150,
      justifyContent: 'center',
      paddingHorizontal: 20,
      backgroundColor: 'rgba(230 237 241 / .7)',
      marginVertical: 10,
      paddingVertical: 20,
      // backgroundColor: 'red'
  },
  items: {
    flex: 1,
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  top: {
    marginBottom: 10,
  },
  creator: {
    gap: 10,
    alignItems: 'center',
    marginLeft: 0
  },
  members: {
    backgroundColor: 'rgba(255 203 1 / .2)',
    color: 'rgba(157 129 18 / 1)',
    fontWeight: '500',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20
  },
  text: {
      color: 'rgba(2 79 111 / 1)',
  },
  textNo: {
      fontSize: 15,
      color: 'rgba(2 79 111 / 1)',
      fontWeight: '600'
  },
  btn: {
    marginTop: 10,
    borderColor: 'rgba(2 79 111 / 1)',
    borderWidth: 1.5,
    borderRadius: 20,
    width: 115,
    padding: 5,
    alignItems: 'center',
    
  }
})

