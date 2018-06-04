/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const BoxModelDemo = () => ( 
  <View style={styles.main}> 
    <Text style={styles.content}>Column 1</Text> 
    <Text style={styles.content}>Column 2</Text> 
    <Text style={styles.content}>Column 3</Text> 
  </View> 
); 
 
const styles = StyleSheet.create({ 
  main: { 
    flex: 1, 
    paddingVertical: 20, 
    flexDirection: 'row', 
    flexWrap: 'wrap' 
  }, 
  content: { 
    padding: 20, 
    marginHorizontal: 5,
    backgroundColor: '#ef4c', 
    width: 125, 
    height: 125, 
    borderWidth: 1, 
    borderColor: 'red', 
    textAlign: 'center' 
  } 
}); 


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to my first React Native application!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <BoxModelDemo></BoxModelDemo>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 35,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#139942',
//     marginBottom: 5,
//   },
// });
