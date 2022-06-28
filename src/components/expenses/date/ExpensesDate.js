import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import database from '../../../database/data.json';

const ExpensesDate = () => {
  return (
    <View>
    <FlatList
    data={database}
    renderItem={({ item, index }) => (
      <View>
        {item.expenses.map((v, i) => (
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

export default ExpensesDate

const styles = StyleSheet.create({})