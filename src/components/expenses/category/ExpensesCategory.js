import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import database from '../../../database/data.json';

const ExpensesCategory = () => {
  return (
    <View>
    <FlatList
    data={database}
    renderItem={({ item, index }) => (
      <View>
        {item.expenses.map((v, i) => (
          <>
            <Text>{v.category}</Text>
          </>
        ))}
      </View>
    )}
  />
  </View>
  )
}

export default ExpensesCategory

const styles = StyleSheet.create({})