import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
  ScrollView,
  Button,
} from 'react-native';
import axios from 'axios';

const MovieBox = () => {
  const apiurl = 'http://www.omdbapi.com/?apikey=64824688';
  const [state, setState] = useState({
    s: 'Batman',
    results: [] as any,
    selected: {},
  });
  const search = () => {
    axios(apiurl + '&s=' + state.s).then(({ data }) => {
      const results = data.Search;
      setState((prevState) => {
        return { ...prevState, results: results };
      });
    });
  };
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.movieBox}
      //pagingEnabled={true}
    >
      <View>
        <Button title="Show the Movies" onPress={search}></Button>
        <TextInput
          style={styles.Input}
          value={state.s}
          onChangeText={(text) =>
            setState((prevState) => {
              return { ...prevState, s: text };
            })
          }
          onSubmitEditing={search}></TextInput>
      </View>
      {state.results.map((result) => (
        <View key={result.imdbID} style={styles.result}>
          <Image
            source={{ uri: result.Poster }}
            style={{ width: 300, height: 450 }}
            resizeMode="cover"
          />
        </View>
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  Box: {
    position: 'absolute',
    left: 20,
    bottom: 0,
    width: 180,
    height: 320,
    backgroundColor: 'red',
  },
  movieBox: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: 1920,
    height: 350,
    flex: 1,
    backgroundColor: 'red',
  },
  results: {
    flex: 1,
  },
  result: {
    flex: 1,
    height: '100%',
    marginLeft: 10,
  },
  Input: {
    position: 'absolute',
    left: 5,
    top: 45,
    width: 130,
    height: 50,
    borderRadius: 150,
    backgroundColor: '#756868',
  },
});

export { MovieBox };
