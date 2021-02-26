import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { withRouter } from 'react-router-native';
import { Icon, Header as NavHeader } from 'react-native-elements';

const Header = ({ title, history }) => {
  const onPress = (data) => Alert.alert(data + ' is clicked');

  return (
    <NavHeader
      leftComponent={{
        icon: 'menu',
        color: 'orange',
        size: 34,
        onPress: () => onPress('sidebar'),
      }}
      centerComponent={{
        text: title,
        style: { color: 'orange', fontSize: 24 },
      }}
      rightComponent={{
        icon: 'home',
        color: 'orange',
        size: 34,
        onPress: () => history.push('/'),
      }}
      containerStyle={{
        backgroundColor: 'black',
        justifyContent: 'space-around',
        paddingVertical: 25,
        // paddingTop: 25,
      }}
    />
  );
};

Header.defaultProps = {
  title: 'ROYAL KITCHEN',
};

export default withRouter(Header);
