import React, { useCallback } from 'react';
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
} from 'react-native';

const PopupMovieDetails = ({ state, setState }) => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      presentationStyle="fullScreen"
      visible={typeof state.selected.Title != 'undefined'}>
      <View style={styles.popup}>
        <Text style={styles.poptitle}>{state.selected.Title}</Text>
        <Text style={styles.rating}>
          Rating: {state.selected.imdbRating}
        </Text>
        <Text style={styles.plot}>{state.selected.Plot}</Text>
      </View>
      <TouchableHighlight
        onPress={() =>
          setState((prevState) => {
            return { ...prevState, selected: {} };
          })
        }>
        <Text style={styles.closeBtn}>Close</Text>
      </TouchableHighlight>
    </Modal>
  );
};

const styles = StyleSheet.create({
  popup: {
    padding: 20,
    backgroundColor: 'black',
    width: 640,
    height: 250,
  },
  poptitle: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 5,
    textDecorationColor: 'white',
    color: 'white',
  },
  closeBtn: {
    padding: 20,
    fontSize: 20,
    fontWeight: '700',
    backgroundColor: '#2484C4',
    color: 'white',
    top: 0,
  },
  plot:{
    color: 'white' ,
  },
  rating:{
    marginBottom: 20, 
    color: 'white', 
  },
});

export { PopupMovieDetails };
