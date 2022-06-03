import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Navigation from './src/Screen/Navigation';
import LogIn from './src/Screen/LogIn';
import SignUp from './src/Screen/SignUp';
import AuthNavigation from './src/Screen/AuthNavigation';

const App = () => {
  return (
    <View style={styles.Container}>
      <AuthNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    flex: 1,
    backgroundColor: 'black',
  },
});

export default App;
