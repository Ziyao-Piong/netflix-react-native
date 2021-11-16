import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  state = {
    images: [
      {title: "Batman v Superman: Dawn of Justice", year:2016, imdbID: "tt2975590", type: "movie", poster: "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},
      {title: "Superman Returns", year:2006, imdbID: "tt0348150", type: "movie", poster: 	"https://m.media-amazon.com/images/M/MV5BNzY2ZDQ2MTctYzlhOC00MWJhLTgxMmItMDgzNDQwMDdhOWI2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"},
      {title: "Superman", year:1978, imdbID: "tt2975590", type: "movie", poster: "https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"},
      {title: "Superman II", year:1980, imdbID: "tt2975590", type: "movie", poster: 	"https://m.media-amazon.com/images/M/MV5BODk2NjgzNTEtYzZhZC00ZTBkLTllMGQtMmMxMzU1NDRkM2RlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"},
      {title: "Superman III", year:1983, imdbID: "tt2975590", type: "movie", poster: "https://m.media-amazon.com/images/M/MV5BMzI3ZDllMTctNmI2Mi00OGQ4LTk2ZTQtYTJhMjA5ZGI2YmRkXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"},
      {title: "Superman IV: The Quest for Peace", year:1987, imdbID: "tt2975590", type: "movie", poster: 	"https://m.media-amazon.com/images/M/MV5BMmIwZWY1YTYtNDlhOS00NDRmLWI4MzItNjk2NDc1N2NhYzNlXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg"},
      {title: "Superman/Batman: Apocalypse", year:2010, imdbID: "tt2975590", type: "movie", poster: "https://m.media-amazon.com/images/M/MV5BMjk3ODhmNjgtZjllOC00ZWZjLTkwYzQtNzc1Y2ZhMjY2ODE0XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"}
    ],
    imagesReferences:[],
    text: ''
  }

  componentDidMount() {
    this.setState({imagesReference: this.state.images});
  }

  search(text) {
    this.setState({ text:text });
    let imgArr = this.state.images;

    for (var i=0; i > imgArr.length; i++) {
      if (text === imgArr[i].title) {
        this.setState({images: [imgArr[i]]})
      }
      if (!text) {
        this.setState({images: this.state.imagesReference})
      }
    }

  }

  return (
    let images = this.state.images.map((key, val) => {
      return <View key={key} style={styles.imagewrap}>
        <ImageElement imgsource={val.img} />
      </View>
    })
    
    <View style={styles.container}>
      <View style={styles.photogrid}>
        {images}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photogrid: {
    flex:1,
    padding:2,
    flexDirection: 'row',
    flexiWrap: 'wrap'
  },
  imagewrap: {
    padding: 2,
    height: 120,
    width: (Dimensions.get('window').width / 2) - 2,
  }
});
