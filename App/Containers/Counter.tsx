import React from "react";
import { Button, Text, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styles from "./Styles/Counter";
import { Actions } from "../Reducer/Counter";

interface Props {
  counter: any;
  increment: (num: Number) => void;
  decrement: (num: Number) => void;
}

const mapStateToProps = (state: any) => {
  const { counter } = state;
  return {
    counter
  };
};

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(Actions, dispatch);

class Counter extends React.Component<Props> {
  render() {
    const { counter, increment, decrement } = this.props;

    return (
      <View style={styles.root}>
        <Text style={styles.greeting}>{counter.counter}</Text>

        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button
              title="-"
              onPress={_e => decrement(1)}
              accessibilityLabel="decrement"
              color="red"
            />
          </View>

          <View style={styles.button}>
            <Button
              title="+"
              onPress={_e => increment(1)}
              accessibilityLabel="increment"
              color="blue"
            />
          </View>
        </View>
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
