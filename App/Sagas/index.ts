import { all, fork } from "redux-saga/effects";
import example from '../Sagas/Example'

export default function* root() {
  yield all([
    yield fork(example)
  ]);
}