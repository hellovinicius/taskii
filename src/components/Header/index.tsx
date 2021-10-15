import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>taskii</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  text: {
    color: 'black',
    fontWeight: '900',
    fontSize: 20,
    letterSpacing: 10,
  },
});
