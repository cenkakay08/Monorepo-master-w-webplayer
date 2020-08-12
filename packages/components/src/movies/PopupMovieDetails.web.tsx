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
  Text,
} from 'react-native';
import axios from 'axios';
import styled from 'styled-components';
import Modal from 'modal-enhanced-react-native-web';

const PopupMovieDetails = ({ state, setState }) => {
  return (
    <Modal
      animationType="slide"
      presentationStyle="fullScreen"
      visible={typeof state.selected.Title != 'undefined'}
      transparent={true}
      backdropOpacity={0.5}>
      <View style={styles.popup}>
        <Text style={styles.poptitle}>{state.selected.Title}</Text>
        <Text style={{ marginBottom: 20, color: 'white' }}>
          Rating: {state.selected.imdbRating}
        </Text>
        <Text style={{ color: 'white' }}>{state.selected.Plot}</Text>
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
});

export { PopupMovieDetails };
