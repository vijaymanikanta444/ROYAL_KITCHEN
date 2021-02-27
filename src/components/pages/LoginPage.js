import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Logo from '../utils/Logo';
import { connect } from 'react-redux';
import users from '../../reducers/users';
import { login } from '../../actions/action';
const LoginPage = ({ users, currentUserId, login }) => {
  const [selectedValue, setSelectedValue] = useState(users[0].id);
  return (
    <View style={styles.container}>
      <Logo />

      <Text style={styles.login}>LOGIN AS</Text>
      <View style={styles.viewFlex}>
        <Picker
          selectedValue={selectedValue}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          {/* <Picker.Item label="Login As" value="null" /> */}
          {users.map((user) => (
            <Picker.Item label={user.userName} value={user.id} key={user.id} />
          ))}
        </Picker>
        <Button
          style={styles.button}
          onPress={() => login(selectedValue)}
          title="Proceed"
          color="black"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  // console.log('test198', state);
  return {
    users: state.users.list,
    currentUserId: state.users.currentUserId,
  };
};
export default connect(mapStateToProps, { login })(LoginPage);
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
