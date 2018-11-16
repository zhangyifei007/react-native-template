import React, { Component } from "react";
import { View } from "react-native";
import Example from "./Example";
import styles from "./Styles/App";
import createStore from "../Reducer/index";
import { Provider } from "react-redux";

// create our store
const store = createStore();
class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Example />
        </View>
      </Provider>
    );
  }
}

export default App;
