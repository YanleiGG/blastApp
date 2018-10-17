import React, {Component} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default class Home extends Component {
  static navigationOptions = {
    title: '历史记录'
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>
          历史记录页面
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
