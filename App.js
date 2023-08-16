import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CodePush from 'react-native-code-push';

const App = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <Text style={{color:'black'}}>App</Text>
    </SafeAreaView>
  );
};

export default CodePush(App);

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});
