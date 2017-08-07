import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDOaEyJAqoK_gZNoqPCSajBVV09gdCRJU8',
      authDomain: 'authentication-one.firebaseapp.com',
      databaseURL: 'https://authentication-one.firebaseio.com',
      storageBucket: 'authentication-one.appspot.com',
      messagingSenderId: '209735110682'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
      return (
        <View style={styles.topWrapper}>
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        </View>
      );
      case false:
      return <LoginForm />;
      default:
      return (
        <View style={styles.spinnerWrapper}>
          <Spinner size="large" />
        </View>
      );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = ({
  topWrapper: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  spinnerWrapper: {
    marginTop: 100
  }
});

export default App;
