import React, {Component} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
// import { Item } from 'react-native-paper/lib/typescript/components/List/List';

export default class index extends Component {
  constructor(props) {
    super(props);
    // itemsArray =['IOS','Android','React-native']
    itemsArray = [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
    ];
    //  DATA = [
    //     {
    //       id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    //       title: "First Item",
    //     },
    //     {
    //       id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    //       title: "Second Item",
    //     },
    //     {
    //       id: "58694a0f-3da1-471f-bd96-145571e29d72",
    //       title: "Third Item",
    //     },
    //   ];
    // DATA=['IOS','abc','cde','efg']
  }
  renderItem = rowItem => {
    console.log('Test row item', rowItem);

    return (
      <View style={styles.item}>
        <Text style={{fontSize: 24}}>{rowItem.item.title}</Text>
        <Text>{rowItem.item.id}</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          //    data={DATA}

          data={itemsArray}
          renderItem={this.renderItem}
          keyExtractor={rowItem => rowItem.id}
          // extraData={selectedId}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderBottomColor: '#999',
    borderBottomWidth: 2,
    backgroundColor: '#f9c2ff',
  },
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
});
