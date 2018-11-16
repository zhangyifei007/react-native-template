import React from "react";
import { Button, Text, View, FlatList } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styles from "./Styles/Example";
import { Actions } from "../Reducer/Example";

interface Props {
  counter: any;
  people: any;
  increment: (num: Number) => void;
  decrement: (num: Number) => void;
  fetchPeople: () => void;
}

const mapStateToProps = (state: any) => {
  const { counter, people } = state;
  return {
    counter,
    people,
  };
};

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(Actions, dispatch);

class Example extends React.Component<Props> {
  render() {
    const { counter, increment, decrement, fetchPeople, people } = this.props;
    const { peopleList } = people;
    console.log(peopleList)

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
        <View style={styles.fetchButton}>
          <Button
            title="获取数据"
            onPress={_e => fetchPeople()}
            accessibilityLabel="increment"
            color="blue"
          />
        </View>
        <FlatList
          keyExtractor={(_item, index) => `${index}`}
          data={peopleList}
          renderItem={({item}: any) => (
            <View style={styles.people}>
              <Text>{item.name}</Text>
              <Text>{item.age}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Example);
