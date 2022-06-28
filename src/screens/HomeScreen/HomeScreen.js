import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Greeting from '../../components/greeting/greeting';


const HomeScreen = () => {
  return (
    <View>
      <Greeting/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})