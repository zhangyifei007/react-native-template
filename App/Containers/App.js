import React, { Component } from 'react';
import { View } from 'react-native';
import Counter from './Counter';
import styles from './Styles/App';
import createStore from '../Redux';
import { Provider } from 'react-redux';

// create our store
const store = createStore();
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Counter />
        </View>
      </Provider>
    );
  }
}

