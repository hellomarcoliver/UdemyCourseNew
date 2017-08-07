import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

// here we initialize a data source for our component "ListView"
class LibraryList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

// what particular element to we want to render
// the word 'library' is a prop and I can use any name
renderRow(library) {
  return <ListItem library={library} />;
}

// create a ListView component where we pass in the dataSource
  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}


// take state and provide it as props, the word 'libraries' is random
// it could be anything here, really
const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
