import React from 'react';
import { SafeAreaView, StyleSheet, Text, StatusBar } from 'react-native';
import { withRouter } from 'react-router-native';
const SelectedItems = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Table Number :{' '}
        <Text style={styles.TableNumber}>{props.match.params.tableId}</Text>
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
  },
  TableNumber: {
    color: 'black',
  },
});

export default withRouter(SelectedItems);
