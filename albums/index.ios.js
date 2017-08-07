// place code for ios


// 1st STEP: Import a library to helo create a Component
import React from 'react';
import { Text, AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// 2nd STEP: Create a Component (one component per file!!!)
// Create a component with a thick-arrow function
const App = () => (
    <View style={{ flex: 1 }}>
      <Header headerText={'Best Albums'} />
      <AlbumList />
    </View>
  );

// 3rd STEP: Render it to the device
// Only root components use AppRegistry
//render application called albums (is folder) with component App
AppRegistry.registerComponent('albums', () => App);
