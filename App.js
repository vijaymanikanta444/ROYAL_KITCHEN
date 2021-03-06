import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/layout/Header';
import Home from './src/components/pages/Home';
import { NativeRouter, Route, Link } from 'react-router-native';
import TableOrder from './src/components/pages/TableOrder';
import LoginPage from './src/components/pages/LoginPage';
// import Favourites from './src/components/menuItems/Favourites';
// import Counter from './src/components/menuItems/Counter';
import { Provider } from 'react-redux';
import store from './src/store';
import LandingPage from './src/components/pages/LandingPage';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <NativeRouter>
          <Header title="ROYAL KITCHEN" />

          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/tableOrder/:tableId" component={TableOrder} />
        </NativeRouter>
        {/* <Counter /> */}
        <StatusBar style="auto" />
      </View>
    </Provider>
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
