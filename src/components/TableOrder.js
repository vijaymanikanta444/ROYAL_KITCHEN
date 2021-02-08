import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#566573' }]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#808B96' }]} />
);

const ThirdRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#D5D8DC' }]} />
);

const initialLayout = { width: Dimensions.get('window').width };

export default function TabViewExample() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Favourites' },
    { key: 'second', title: 'Selected' },
    { key: 'third', title: 'All' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  return (
    <TabView
      //   style={styles.tabViewStyle}
      renderTabBar={(props) => (
        <TabBar {...props} style={{ backgroundColor: '#000000' }} />
      )}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  //   tabViewStyle: {
  //     backgroundColor: 'black',
  //   },
});
