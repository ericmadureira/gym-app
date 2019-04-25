import React from 'react';
import { Image, StyleSheet, Text, View, ImageBackground } from 'react-native';
// import { Button, Card } from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./assets/dead-lift.jpg')} style={{width: '100%', height: '100%', padding: 0, margin: 0}}>
          <Text style={styles.title}>ProFitness</Text>
          <Text style={styles.paragraph}>Not a member?</Text>
          <Text style={styles.paragraph}>A ProFusion product ®2019</Text>
        </ImageBackground>
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
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
