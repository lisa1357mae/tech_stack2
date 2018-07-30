import {combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';
//this is a reducer - it should return some amount of data to user
export default combineReducers ({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});


//if I console.log(store.getState());
//{libraries: [{id: 1, title: 'webpack', description: '...'}]}

//the application state should now has the object key above !!!!
