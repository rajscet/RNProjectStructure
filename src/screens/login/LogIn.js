import React, {Component} from 'react';
import {View,Text} from 'react-native';
export default class LogIn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Text onPress={()=>{this.props.navigation.navigate("Home")}} >{'Hello0'}</Text>
      </View>
    );
  }
}
