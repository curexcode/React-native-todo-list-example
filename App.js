/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';


const App: () => React$Node = () => {
  return (
    <View>
      <Text style={styles.text}>Hello React!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text:{
    color: 'blue',
    fontSize: 50
  }
})

export default App;
