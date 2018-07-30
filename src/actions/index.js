export const selectLibrary = (libraryId) => {
  //an action creator function
  return {
    type: 'select_library',
    payload: libraryId
  };
};
