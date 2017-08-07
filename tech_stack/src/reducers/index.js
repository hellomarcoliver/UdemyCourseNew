
// this index file combines the two reducers we created
import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

// we create one reducer (libraries) and by default
// this one always has an empty array
// combineReducers is a helpetr from the redux library
export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});
