import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Example from './Example';
import styles from './Styles/App';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Example enthusiasmLevel={10} name={'123'} />
      </View>
    );
  }
}

