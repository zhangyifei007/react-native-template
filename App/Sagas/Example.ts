import { take, fork, put, call } from 'redux-saga/effects';
import { Types, Actions } from '../Reducer/Example';
import * as Api from '../Services/Example';

function *watchFetchPeople() {
  while(true) {
    yield take(Types.FETCH_PEOPLE);
    yield call(fetchPeople);
  }
}

function *fetchPeople() {
  yield put(Actions.fetchPeople());
  const res = yield call(Api.getPeopleList);
  const { status, peopleList } = res;
  console.log(peopleList)
  if (status === 'ok') {
    yield put(Actions.fetchPeopleSuccess(peopleList))
  } else {
    yield put(Actions.fetchPeopleFailure())
  }
}

export default function *example() {
  yield fork(watchFetchPeople);
}
