import { useState } from "react";
import axios from 'axios';
import {API_URL} from './config.js';


export const GetAndSearchMovies= () =>{
 const [state, setState] = useState({
    searchText: 'Batman',
    results: [] ,
    selected: {} ,
  });
  const search = () => {
    axios(API_URL + '&s=' + state.searchText).then(({ data }) => {
      const results = data.Search;

      setState((prevState) => {
        return { ...prevState, results: results };
      });
    });
  };
  const openPopup = (id) => {
    axios(API_URL + '&i=' + id).then(({ data }) => {
      const result = data;

      setState((prevState) => {
        return { ...prevState, selected: result };
      });
    });
  };
return [{state,setState}, search, openPopup];
}


