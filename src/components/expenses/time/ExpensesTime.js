import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import database from '../../../database/data.json';

const ExpensesTime = () => {
  return (
    <View>
      <FlatList
      data={database}
      renderItem={({ item, index }) => (
        <View>
          {item.expenses.map((v, i) => (
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

export default ExpensesTime

const styles = StyleSheet.create({})