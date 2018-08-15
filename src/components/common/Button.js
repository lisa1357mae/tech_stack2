import React from 'react';
import ReactNative from 'react-native';
import {Text, TouchableOpacity} from 'react-native';


const Button = ({ onPress, children }) => {


const {buttonStyle, textStyle} = styles;

  return (
<TouchableOpacity onPress={onPress} style={buttonStyle}>
<Text style ={textStyle}>
{children}
</Text>
</TouchableOpacity>
  );
};



const styles =  {


  textStyle: {

alignSelf: 'center',
color: 'black',
fontSize: 16,
fontWeight: '600',
paddingTop: 10,
paddingBottom: 10

},
  buttonStyle: {

    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'purple',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#add',
    marginLeft: 5,
    barginRight: 5
  }
}

export default Button;
