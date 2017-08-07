// why use Redux in the first place?
// create apps that scales with reduced code
// through the action system


// this reducer is a fat-feather function that returns an array
const reducer = (state = [], action) => {
  if (action.type === 'split_string') {
  return action.payload.split('');
  } else if (action.type === 'add_character') {
    return [ ...state, action.payload ];
  }

  return state;
};

// this store contains application state and all our reducers
const store = Redux.createStore(reducer);

// test it
store.getState();

// this action is a plain js object with a type property (always a string)
const action = {
  type: 'split_string',
  payload: 'abcd'
};


// last step: push or dispatch action into the reducer(s)
store.dispatch(action);

// run it
store.getState();


// create another action and dispatch it to the above reducer
const action2 = {
  type: 'add_character',
  payload: '333'
};

store.dispatch(action2);
store.getState();
