import React, { Component } from 'react';
import {connect}  from 'react-redux';
import {FlatList } from 'react-native';
import ListItem from './ListItem';


class LibraryList extends Component {
  renderItem(library) {
    return <ListItem library={library} />;

}

render() {
  return (
      <FlatList
//props
        data={this.props.libraries}
        renderItem={this.renderItem}
        keyExtractor={(library) => library.id}

       />
    );
  }
}

//purpose of this function is to take our global state project and map it to the state object and provide them as props to our library list
const mapStateToProps = state => {
  //if I make return an object below it will show up as props to my component library list
return {libraries: state.libraries};

};

export default connect(mapStateToProps)(LibraryList);
//calls the function connect when connect is called it returns another function
//we then immediatley call the return function with the library list
