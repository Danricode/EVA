import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import database from '../../../database/data.json';

const IncomeAmount = () => {
  return (
    <View>
      <FlatList
      data={database}
      renderItem={({ item, index }) => (
        <View>
          {item.incomes.map((v, i) => (
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

export default IncomeAmount

const styles = StyleSheet.create({})