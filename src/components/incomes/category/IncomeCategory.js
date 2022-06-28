import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import database from '../../../database/data.json';

const IncomeCategory = () => {
  return (
    <View>
    <FlatList
    data={database}
    renderItem={({ item, index }) => (
      <View>
        {item.incomes.map((v, i) => (
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

export default IncomeCategory

const styles = StyleSheet.create({})