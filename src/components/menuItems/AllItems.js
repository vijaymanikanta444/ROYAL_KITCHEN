import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
} from 'react-native';
import { connect } from 'react-redux';
import Counter from './Counter';

// const DATA = [
//   {
//     title: 'Main dishes',
//     data: ['Pizza', 'Burger', 'Risotto'],
//   },
//   {
//     title: 'Sides',
//     data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
//   },
//   {
//     title: 'Drinks',
//     data: ['Water', 'Coke', 'Beer'],
//   },
//   {
//     title: 'Desserts',
//     data: ['Cheese Cake', 'Ice Cream'],
//   },
// ];

const Item = ({ title }) => (
  <View style={styles.item}>
    <View style={styles.alignment}>
      <Text style={styles.title}>{title}</Text>
      <Counter />
    </View>
  </View>
);

const AllItems = (props) => (
  <SafeAreaView style={styles.container}>
    <SectionList
      sections={props.items}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
    marginVertical: 8,
    // alignItems: 'center',
  },
  alignment: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  item: {
    backgroundColor: '#000000',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
  },
  header: {
    fontSize: 32,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    color: 'orange',
  },
  headerWrapper: {
    borderRadius: 10,
  },
});

const mapStateToProps = (state) => {
  console.log('test98', state);
  return {
    items: state.items,
  };
};

export default connect(mapStateToProps, null)(AllItems);
