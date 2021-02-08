import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: 'ROYAL KITCHEN',
};

const styles = StyleSheet.create({
  header: {
    marginTop: 50,
    height: 60,
    padding: 15,
    backgroundColor: 'black',
  },
  text: {
    color: 'orange',
    fontSize: 23,
    textAlign: 'center',
  },
});

export default Header;
