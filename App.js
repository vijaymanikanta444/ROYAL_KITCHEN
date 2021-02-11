import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import Home from './src/components/Home';
import { NativeRouter, Route, Link } from 'react-router-native';
import TableOrder from './src/components/TableOrder';
import Favourites from './src/components/menuItems/Favourites';
import Counter from './src/components/menuItems/Counter';

export default function App() {
  return (
    <View style={styles.container}>
      <NativeRouter>
        <Header title="ROYAL KITCHEN" />
        <Route exact path="/" component={Home} />
        <Route exact path="/tableOrder/:tableId" component={TableOrder} />
      </NativeRouter>
      {/* <Counter /> */}
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
