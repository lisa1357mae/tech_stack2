import React from 'react';
import ReactNative from 'react';
import { View, Text }  from 'react-native';




const CardSection = (props) => {

  return (
    <View style= {styles.containerStyle}>
    {props.children}
  </View>
  );
};

const styles = {
    containerStyle: {
      height: 75,

    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#c4af25',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  }
};

export {CardSection};
