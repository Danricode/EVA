import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import database from '../../../database/data.json';

const ExpensesAmount = () => {
  return (
    <View>
      <FlatList
      data={database}
      renderItem={({ item, index }) => (
        <View>
          {item.expenses.map((v, i) => (
            <>
              <Text>{v.amount}</Text>
            </>
          ))}
        </View>
      )}
    />
    </View>
  )
}

export default ExpensesAmount

const styles = StyleSheet.create({})