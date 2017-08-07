import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// reducers hold all the data of our app and the states
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';


// the provider tag surfaces as the glue between the
// react and the redux code. The provider can only
// have one child. flex fills up the whole screen.
const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View style={{ flex: 1 }}>
        <Header headerText="TECH STACK MO" />
        <LibraryList />
      </View>
    </Provider>
  );
};

export default App;
