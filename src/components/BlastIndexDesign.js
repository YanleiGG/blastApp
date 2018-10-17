import React, {Component} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default class Home extends Component {
  static navigationOptions = {
    title: '爆破参数设计'
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>
          爆破参数设计页面
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
