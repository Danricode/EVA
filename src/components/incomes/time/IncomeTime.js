import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import database from '../../../database/data.json';

const IncomeTime = () => {
  return (
    <View>
    <FlatList
    data={database}
    renderItem={({ item, index }) => (
      <View>
        {item.incomes.map((v, i) => (
          <>
            <Text>{v.time}</Text>
          </>
        ))}
      </View>
    )}
  />
  </View>
  )
}

export default IncomeTime

const styles = StyleSheet.create({})