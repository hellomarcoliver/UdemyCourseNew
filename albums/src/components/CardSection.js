import React from 'react';
import { View } from 'react-native';


const CardSection = (props) => {
  return (
    //add styles from bottom to this component
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

//define styles for this component
const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};


export default CardSection;
