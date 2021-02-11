import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Button,
} from 'react-native';

const Counter = () => {
  const [count, setCount] = useState(0);
  const onIncrement = () => setCount((prevCount) => prevCount + 1);
  const onDecrement = () =>
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 0));
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* <Text style={styles.text}>hi</Text> */}
        <Button
          style={styles.button}
          color="#566573"
          title="-"
          onPress={onDecrement}
        />
        <Text style={styles.countText}>{count}</Text>
        <Button
          style={styles.button}
          color="#566573"
          title="+"
          onPress={onIncrement}
        />
      </View>
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
  content: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  text: {
    textAlign: 'right',
    color: 'orange',
  },
  button: {
    color: 'black',
  },
  countText: {
    fontSize: 24,
    // backgroundColor: 'white',
    color: 'white',
    paddingHorizontal: 2,
  },
});

export default Counter;
