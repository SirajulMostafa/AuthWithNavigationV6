import React, {Component} from 'react';
import {Text, StyleSheet, View, FlatList,TouchableOpacity} from 'react-native';
// import { Item } from 'react-native-paper/lib/typescript/components/List/List';
import { Avatar } from 'react-native-paper';
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state ={userList:[]}
    // itemsArray =['IOS','Android','React-native']
    DATA = [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
      },
      {
        id: 'bd7acbea-e1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item 2',
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
   
  }
  renderItem = rowItem => {
    // console.log('Test row item', rowItem);

    return (
      <View style={styles.item}>
        <View style={{flexDirection: 'row',}}>

       
        <Avatar.Image size={100} source={require('../../Images/logo.png')} />
        <View style={{alignSelf: 'center',marginLeft: '5%',}}>
        <Text style={{fontSize: 24}}>{rowItem.item.name}</Text>
        <Text>{rowItem.item.email}</Text>
        <Text>{rowItem.item.id}</Text>
        </View>
         </View>
         </View>
    );
  };
  componentDidMount (){
   fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json =>{
     console.log(json)
    this.setState({
      userList:json
    })
  } )

      }

//GetUsersList=()=>{
  // return console.log('hello console 1')
  // fetch('https://jsonplaceholder.typicode.com/users')
  // .then((response) => response.json())
  // .then((responsJson) =>
  // { return console.log("Response is...",responsJson)}) 
  //  .catch((error)=>{
  //   console.error(error);
  // });

// }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          //    data={DATA}

          // data={DATA}
          data={this.state.userList}
        renderItem={this.renderItem}
          keyExtractor={(rowItem) => rowItem.id}
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
