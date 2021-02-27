import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Logo from '../utils/Logo';
import { connect } from 'react-redux';
import LoginPage from './LoginPage';
import Home from './Home';
const LandingPage = ({ currentUserId }) =>
  !currentUserId ? <LoginPage /> : <Home />;

const mapStateToProps = (state) => {
  console.log('test198', state.users.currentUserId);
  return {
    users: state.users.list,
    currentUserId: state.users.currentUserId,
  };
};
export default connect(mapStateToProps, null)(LandingPage);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
    color: 'black',
  },
  login: {
    paddingTop: 40,
    alignItems: 'center',
    fontSize: 24,
    marginBottom: 50,
  },
  picker: {
    flex: 1,
    height: 50,
    width: 200,
    fontSize: 16,
    justifyContent: 'flex-start',
  },
  button: {
    flex: 1,
    padding: 'auto',
    height: 50,
    marginTop: 50,
    justifyContent: 'flex-end',
  },
  viewFlex: {
    flexDirection: 'row',
    width: '80%',
  },
});
