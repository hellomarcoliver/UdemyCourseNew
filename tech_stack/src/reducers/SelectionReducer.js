// this reducer makes sure that no list item
// is selected when booting the screen
export default (state = null, action) => {
  console.log(action);
  switch (action.type) {
    case 'select_library':
      return action.payload;
    default:
      return state;

  }
};


// remember: every reducer has a switch statement
