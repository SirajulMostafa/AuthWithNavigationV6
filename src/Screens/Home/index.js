import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';
import {ActivityIndicator, Avatar} from 'react-native-paper';
import axios from "axios";
import index from '../Login';
const Index = () => {

  const [userList, setUserList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  
  const renderItem = rowItem => {
    // console.log('Test row item', rowItem);

    return (
      <View style={styles.item}>
        <View style={{flexDirection: 'row'}}>
          <Avatar.Image size={100} source={require('../../Images/logo.png')} />
          <View style={{alignSelf: 'center'}}>
            <Text style={{fontSize: 20}}>{rowItem.item.title}</Text>
            <Text>{rowItem.item.email}</Text>
            <Text>{rowItem.item.name.title}</Text>
          </View>
        </View>
      </View>
    );
  };
const renderLoader=()=>{
  return(
    <View style={styles.renderLoader}>
      <ActivityIndicator size="large" color="#aaa"/>
    </View>
  )
}
const loadMoreItem = () =>{
  console.log('load more items')
  setCurrentPage(currentPage+1)
}

  useEffect(() => {
    getUsersList()
  }, [currentPage])
   const getUsersList=()=>{
    // fetch('https://jsonplaceholder.typicode.com/posts')
    axios.get(`https://randomuser.me/api/?page=${currentPage}&results=10`)
   // .then(response => response.json())
    .then(responsJson => {

      // setUserList(responsJson.data.results)
      setUserList([...userList, ...responsJson.data.results])
      //return console.log('Response is...', responsJson.data);
    })
    .catch(error => {
      console.error(error);
    });
}

    

  return (
    <View style={styles.container}>
      <FlatList
        //    data={DATA}
        data={userList}
        renderItem={renderItem}
        keyExtractor={rowItem => rowItem.email}
        // extraData={selectedId}
        ListFooterComponent={renderLoader}
        onEndReached={loadMoreItem}
        onEndReachedThreshold={0.3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    // padding: 20,
    marginVertical: 8,
    // marginHorizontal: 16,
    borderBottomColor: '#999',
    // borderBottomWidth: 2,
    backgroundColor: '#f9c2ff',
  },
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  renderLoader:{
    marginHorizontal: 10,
  }
  ,loaderStyle:{
    marginVertical:16,
    alignItems: 'center',
  }
});
export default Index;
