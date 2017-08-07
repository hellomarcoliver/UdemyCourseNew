import React from 'react';
import { Text, StyleSheet, View } from 'react-native';


export default class Splash extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>InterviewPAL</Text>
        </View>
        <View>
          <Text style={styles.subtitle}>Powered by Teact Native</Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'blue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold'
  },
  subtitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    padding: 20
  },
  titleWrapper: {
    backgroundColor: 'lightblue',
    flex: 1
  }
});
