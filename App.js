
import React, { useState, useEffect } from 'react';

import { SafeAreaView, Text, StyleSheet, View, FlatList, Image } from 'react-native';
import { SearchBar } from 'react-native-elements';

// use hard coded data to see the results first
const lst = [{"Title":"Batman v Superman: Dawn of Justice","Year":"2016","imdbID":"tt2975590","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{"Title":"Superman Returns","Year":"2006","imdbID":"tt0348150","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNzY2ZDQ2MTctYzlhOC00MWJhLTgxMmItMDgzNDQwMDdhOWI2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"},{"Title":"Superman","Year":"1978","imdbID":"tt0078346","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"},{"Title":"Superman II","Year":"1980","imdbID":"tt0081573","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BODk2NjgzNTEtYzZhZC00ZTBkLTllMGQtMmMxMzU1NDRkM2RlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"},{"Title":"Superman III","Year":"1983","imdbID":"tt0086393","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMzI3ZDllMTctNmI2Mi00OGQ4LTk2ZTQtYTJhMjA5ZGI2YmRkXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"},{"Title":"Superman IV: The Quest for Peace","Year":"1987","imdbID":"tt0094074","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMmIwZWY1YTYtNDlhOS00NDRmLWI4MzItNjk2NDc1N2NhYzNlXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg"},{"Title":"Superman/Batman: Apocalypse","Year":"2010","imdbID":"tt1673430","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjk3ODhmNjgtZjllOC00ZWZjLTkwYzQtNzc1Y2ZhMjY2ODE0XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"},{"Title":"Lois & Clark: The New Adventures of Superman","Year":"1993–1997","imdbID":"tt0106057","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BZTU1ZGFjNzEtZWYzZC00ZmI0LTg2NmMtN2YyNTY4YzhlODIyXkEyXkFqcGdeQXVyMjExMjk0ODk@._V1_SX300.jpg"},{"Title":"Superman/Batman: Public Enemies","Year":"2009","imdbID":"tt1398941","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZDc5NTFiMzgtZWJiOS00N2M1LWJmOGYtZmNjMzFhMzcxZjRiXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"},{"Title":"Superman and Lois","Year":"2021–","imdbID":"tt11192306","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BOTA2MDVhMWItNTYwYi00OTcyLWJjZmEtNTQ2NTAxMDQyYTQwXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg"}]

const App = () => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    fetch('http://www.omdbapi.com/?&apikey=28f4dae9&s=superman')
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      <View style={{
        flex: 1/2,
        flexDirection: 'column',
        margin: 15
      }} 
      numColumns={3}
      onPress={() => getItem(item)}>
        <Image style={styles.itemStyle} source={{uri: item.Poster}} />
        <Text style={styles.textStyle}>
          {item.Title}
        </Text>
        <Text style={styles.textStyle}>
          {item.Year}
        </Text>

      </View>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height:0.5,
          width: '50%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

// getitem is far from done, need to request for imdb ratings and use the api to get the plot
  const getItem = (item) => {
    // Function for click on an item
    <View style={{
      flex: 1/2,
      flexDirection: 'column',
      margin: 15
    }} 
    numColumns={3}
    onPress={() => getItem(item)}>
      <Image style={styles.itemStyle} source={{uri: item.Poster}} />
      <Text style={styles.textStyle}>
        {item.Title}
      </Text>
      <Text style={styles.textStyle}>
        {item.Year}
      </Text>
      <Text style={styles.textStyle}>
        {item.Genre}
      </Text>
      {/* <Text style={styles.textStyle}>
        {item.imdbID}
      </Text>
      <Text style={styles.textStyle}>
        {item.Plot} 
      </Text> */}

    </View>
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <SearchBar
          round
          searchIcon={{ size: 24 }}
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={(text) => searchFilterFunction('')}
          placeholder="Type Here..."
          value={search}
        />
        <FlatList
          data={lst}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    height: 200,
    padding: 10,
  },
  textStyle: {
  }
});

export default App;
