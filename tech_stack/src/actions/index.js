// this is the first action creator
// an action creator is a JS function
// inside you return the action (update data)
// which is an object with a type property

export const selectLibrary = (libraryId) => {
  return {
    type: 'select_library',
    payload: libraryId
  };
};
