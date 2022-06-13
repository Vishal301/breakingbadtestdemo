/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import CustomText from './src/components/CustomText';

const App = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <CustomText text="just Text" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
