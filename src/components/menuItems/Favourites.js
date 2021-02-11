import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import Counter from './Counter';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Dum Biriyani',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Fry Biriyani',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Dragon chicken',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <View style={styles.alignment}>
      <Text style={styles.title}>{title}</Text>
      <Counter />
    </View>
  </View>
);

const Favourites = () => {
  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#000000',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  alignment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: 'orange',
  },
});

export default Favourites;
