import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import Home from './src/components/Home';
// import Routes from './src/Routes';
import { NativeRouter, Route, Link } from 'react-router-native';
import TableOrder from './src/components/TableOrder';

export default function App() {
  return (
    <View style={styles.container}>
      <NativeRouter>
        <Header title="ROYAL KITCHEN" />
        {/* <Home /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/tableOrder/:tableId" component={TableOrder} />
      </NativeRouter>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ABB2B9',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
