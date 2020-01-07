import React, {Component} from 'react';
import {View,Text} from 'react-native';
export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Text>{'Hello1'}</Text>
      </View>
    );
  }
}
