import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { withRouter } from 'react-router-native';
import { Icon, Header as NavHeader } from 'react-native-elements';
import { connect } from 'react-redux';
import { logout } from '../../actions/action';

const Header = ({ title, history, logout }) => {
  const onPress = (data) => Alert.alert(data + ' is clicked');

  return (
    <NavHeader
      leftComponent={{
        icon: 'menu',
        color: 'orange',
        size: 34,
        onPress: () => logout(),
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

export default connect(null, { logout })(withRouter(Header));
