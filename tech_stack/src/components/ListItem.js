import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

// the 2 const variables are just for deconstructing
// where {title} is, this used to be {this.props.library.title}
class ListItem extends Component {

  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  renderDescription() {
    const { copyStyle } = styles;
    const { library, expanded } = this.props;
    if (expanded) {
      return (
        <CardSection>
        <Text style={copyStyle}>
          {library.description}
        </Text>
      </CardSection>
      );
    }
  }


  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

// add a style object
const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  copyStyle: {
    paddingLeft: 15,
    marginBottom: 20
  }
};

// function
const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return { expanded };
};

// actions mutates the actions
// and adds it to the ListItem as props
export default connect(mapStateToProps, actions)(ListItem);
