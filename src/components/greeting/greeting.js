import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import database from '../../database/data.json'

const greeting = () => {
  return (
    <View>
      <Image style={styles.profile} source={require('../../../assets/profile.png')} />
      <FlatList
      data={database}
      renderItem={({item}) => <Text style={styles.greeting}>Welcome back{" "}<Text style={styles.greetUser}>{item.user}</Text></Text>}
      />
    </View>
  )
}

export default greeting

const styles = StyleSheet.create({
  profile:{
    width:100,
    height:100,
    alignSelf:"center",
    margin:10,
  },
  
  greeting:{
    fontSize:20,
  },
  greetUser:{
    fontSize:20,
    color:"#a55eaf",
    fontStyle:"italic"
  },

})