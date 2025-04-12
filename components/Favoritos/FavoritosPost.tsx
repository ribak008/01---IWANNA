import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FavoritosPost() {
  return (
    <View style={styles.container}>
      <Text>Lista los post favoritos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});