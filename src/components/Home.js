import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';

const data = [
  // { key: 'TABLE-1' },
  // { key: 'TABLE-2' },
  // { key: 'TABLE-3' },
  // { key: 'TABLE-4' },
  // { key: 'TABLE-5' },
  // { key: 'TABLE-6' },
  // { key: 'TABLE-7' },
  // { key: 'TABLE-8' },
  // { key: 'TABLE-9' },
  // { key: 'TABLE-10' },
  // { key: 'K' },
  // { key: 'L' },
  { key: '1' },
  { key: '2' },
  { key: '3' },
  { key: '4' },
  { key: '5' },
  { key: '6' },
  { key: '7' },
  { key: '8' },
  { key: '9' },
  { key: '10' },
];

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};

const numColumns = 2;
export default class Home extends React.Component {
  renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <Link to={`/tableOrder/${item.key}`} style={styles.item}>
        <TouchableOpacity
        // onPress={() => Alert.alert(`TABLE - ${item.key} is selected`)}
        >
          <Link to={`/tableOrder/${item.key}`}>
            <Text style={styles.itemText}>{item.key}</Text>
          </Link>
        </TouchableOpacity>
      </Link>
    );
  };

  render() {
    return (
      <FlatList
        data={formatData(data, numColumns)}
        style={styles.container}
        renderItem={this.renderItem}
        numColumns={numColumns}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  item: {
    backgroundColor: 'black',
    alignItems: 'center',
    // justifyContent: 'space-evenly',
    justifyContent: 'center',

    flex: 1,
    margin: 10,
    height: Dimensions.get('window').width / numColumns, // approximate a square
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: 'orange',
    fontSize: 70,
  },
});
