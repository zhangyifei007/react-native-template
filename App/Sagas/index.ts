import { takeLatest, all } from 'redux-saga/effects'

export default function * root () {
  yield all([
    // some sagas only receive an action
  ])
}