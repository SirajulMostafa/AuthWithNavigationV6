import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';
import {ActivityIndicator, Avatar} from 'react-native-paper';
import index from '../Login';
const Index = () => {

  const [userList, setUserList] = useState([]);
  const [currentPage, setCurrentPage] = useState([])
  
  const renderItem = rowItem => {
    // console.log('Test row item', rowItem);

    return (
      <View style={styles.item}>
        <View style={{flexDirection: 'row'}}>
          <Avatar.Image size={100} source={require('../../Images/logo.png')} />
          <View style={{alignSelf: 'center'}}>
            <Text style={{fontSize: 20}}>{rowItem.item.title}</Text>
            <Text>{rowItem.item.body}</Text>
            <Text>{rowItem.item.id}</Text>
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

  useEffect(() => {
    getUsersList()
  }, [])
   const getUsersList=()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(responsJson => {
      setUserList(responsJson)
      return console.log('Response is...', responsJson);
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
        keyExtractor={rowItem => rowItem.id}
        // extraData={selectedId}
        ListFooterComponent={renderLoader}
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
});
export default Index;
