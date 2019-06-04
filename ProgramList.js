import React from 'react';
import { Image, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Button, Card } from 'react-native-paper';

export default class ProgramList extends React.Component {
  static navigationOptions = {
    title: 'Training Programs',
  };

  render() {
    const { navigation } = this.props;
    var now = new Date().toString();
    const userName = navigation.getParam('userName', '...');

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{now}</Text>
        <Text style={styles.title}>Welcome, {JSON.stringify(userName)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    margin: 36,
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2274f7',
  },
});