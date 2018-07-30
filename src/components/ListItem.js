import React, { Component } from 'react';
import {Text, TouchableWithoutFeedback, View, LayoutAnimation} from 'react-native';
import {connect} from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }
renderDescription() {
  const {library, selectedLibraryId} = this.props;
  const { item } = library;

  if (item.id === selectedLibraryId)  {
    return (
      <CardSection>
    <Text>{item.description}</Text>
    </CardSection>
    );
  }
}
  render() {
    const {titleStyle} = styles;
    const { id, title } = this.props.library.item;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
        >
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

const styles = {

    titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = (state, ownProps) => {

  return {selectedLibraryId: state.selectedLibraryId };
};
// the first argument must be mapState to props function, the second is to bind action creators to the component
export default connect(mapStateToProps, actions) (ListItem);
