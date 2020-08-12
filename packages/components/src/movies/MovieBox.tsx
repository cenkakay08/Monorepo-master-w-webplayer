import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
  ScrollView,
  Button,
  TouchableHighlight,
  Modal,
  Text,
  Platform,
} from 'react-native';
import axios from 'axios';
import styled from 'styled-components';
import { PopupMovieDetails } from './PopupMovieDetails';

const { height, width } = Dimensions.get('window');

const MovieBox = () => {
  const apiurl = 'http://www.omdbapi.com/?apikey=64824688';
  const [state, setState] = useState({
    searchText: 'Batman',
    results: [] as any,
    selected: {} as any,
  });
  const search = () => {
    axios(apiurl + '&s=' + state.searchText).then(({ data }) => {
      const results = data.Search;

      setState((prevState) => {
        return { ...prevState, results: results };
      });
    });
  };
  const openPopup = (id) => {
    axios(apiurl + '&i=' + id).then(({ data }) => {
      const result = data;

      console.log(result);

      setState((prevState) => {
        return { ...prevState, selected: result };
      });
    });
  };
  return (
    <View>
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
            value={state.searchText}
            onChangeText={(text) =>
              setState((prevState) => {
                return { ...prevState, searchText: text };
              })
            }
            onSubmitEditing={search}></TextInput>
        </View>
        {state.results.map((result) => (
          <TouchableHighlight
            key={result.imdbID}
            onPress={() => openPopup(result.imdbID)}>
            <View style={styles.result}>
              <Image
                source={{ uri: result.Poster }}
                style={{
                  width: Platform.OS === 'android' ? 100 : 300,
                  height: Platform.OS === 'android' ? 120 : 340,
                }}
                resizeMode="stretch"
              />
            </View>
          </TouchableHighlight>
        ))}
      </ScrollView>
      <PopupMovieDetails state={state} setState={setState} />
    </View>
  );
};
/* <Modal animationType="fade"
           transparent={false}
           presentationStyle="overFullScreen"
           visible={(typeof state.selected.Title != "undefined")}>
      <View >
        <Text >{state.selected.Title}</Text>
        <Text style={{marginBottom:20}}>Rating: {state.selected.imdbRating}</Text>
        <Text>{state.selected.Plot}</Text>
      </View>
      <TouchableHighlight
         onPress={()=> setState(prevState =>{
           return {...prevState, selected:{}}
         })}
      >
        <Text >Close</Text>
      </TouchableHighlight>
    </Modal> */
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
    width: Platform.OS === 'android' ? width : 1920,
    height: Platform.OS === 'android' ? height / 2.7 : 350,
    flex: 1,
  },
  results: {
    flex: 1,
  },
  result: {
    flex: 1,
    height: Platform.OS === 'android' ? height / 2.7 : '100%',
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
