import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default class Home extends Component {
  static navigationOptions = {
    title: '测孔参数'
  }

  state = {
    text: ''
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.inputTitle}>坡顶线测点处GPS数据：</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textInput: {
    fontSize: 20,
    height: 50, 
    borderColor: 'gray', 
    borderWidth: 1,
    width: 400
  },
  inputTitle: {
    fontSize: 20,
    textAlign: "left",
    marginBottom: 20,
    marginTop: 20
  }
});
