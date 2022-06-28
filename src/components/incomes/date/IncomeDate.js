import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import database from '../../../database/data.json';

const IncomeDate = () => {
  return (
    <View>
    <FlatList
    data={database}
    renderItem={({ item, index }) => (
      <View>
        {item.incomes.map((v, i) => (
          <>
            <Text>{v.date}</Text>
          </>
        ))}
      </View>
    )}
  />
  </View>
  )
}

export default IncomeDate

const styles = StyleSheet.create({})