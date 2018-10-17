import React, {Component} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { connect } from "react-redux"

class Home extends Component {
  static navigationOptions = {
    title: '主页'
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.button}>露天矿垂直深孔爆破</Text>
        <View style={styles.button}>
          <Button
            onPress={() => this.props.navigation.navigate('HoleIndex')}
            title="测孔参数"
            color="#0D47A1"
          />
        </View>
        <View style={styles.button}>
          <Button
            onPress={() => this.props.navigation.navigate('BlastIndexDesign')}
            title="爆破参数设计"
            color="#0D47A1"
          />
        </View>
        <View style={styles.button}>
          <Button
            onPress={() => this.props.navigation.navigate('GridIndexDesign')}
            title="起爆网络设计"
            color="#0D47A1"
          />
        </View>
        <View style={styles.button}>
          <Button
            onPress={() => this.props.navigation.navigate('HistoryRecords')}
            title="历史记录"
            color="#0D47A1"
          />
        </View>
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
  },
  button: {
    width: 400,
    height: 80,
    marginBottom: 50,
    fontSize: 20,
    textAlign: 'center'
  }
});

let mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(Home)