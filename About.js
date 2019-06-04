import React from 'react';
import { Image, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Button, Card } from 'react-native-paper';

export default class About extends React.Component {
  static navigationOptions = {
    title: 'About'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>ProFitness</Text>
        <Text style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc est magna, porta eget lorem sit amet, vulputate lobortis neque. Ut vel est in sem ornare malesuada ac in erat. Ut in nunc a tellus aliquet commodo. Sed metus elit, eleifend a congue vitae, vehicula ut metus. Duis sed tincidunt arcu, at vestibulum orci. Sed aliquet sit amet justo eu ullamcorper. Fusce ultrices massa eget leo accumsan, vel vehicula neque pellentesque. Quisque in placerat dolor. Etiam sit amet dui luctus justo iaculis viverra. Vivamus euismod nulla eu condimentum pulvinar. Duis interdum suscipit arcu. Proin at metus vitae diam auctor convallis. Nulla facilisi. Nam vel suscipit est. Cras dignissim ornare nisi. Suspendisse potenti.</Text>
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
    margin: 36,
    fontSize: 11,
    textAlign: 'justify',
    color: '#000',
  },
});