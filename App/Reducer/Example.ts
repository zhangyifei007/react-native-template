import { handleActions, createActions } from 'redux-actions';

// Actions Types

export const Types = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  FETCH_PEOPLE: 'FETCH_PEOPLE',
  FETCH_PEOPLE_SUCCESS: 'FETCH_PEOPLE_SUCCESS',
  FETCH_PEOPLE_FAILURE: 'FETCH_PEOPLE_FAILURE',
}

// Actions

const { increment, decrement } = createActions({
  INCREMENT: (amount = 1) => ({amount}),
  DECREMENT: (amount = 1) => ({amount}),
});

const {fetchPeople, fetchPeopleSuccess, fetchPeopleFailure} = createActions({
  FETCH_PEOPLE: () => {},
  FETCH_PEOPLE_SUCCESS: (peopleList: any[]) => ({peopleList}),
  FETCH_PEOPLE_FAILURE: (error: any) => {error}
});

// Action creator

export const Actions = {
  increment,
  decrement,
  fetchPeople,
  fetchPeopleSuccess,
  fetchPeopleFailure,
}

// selectors

export const CounterSelector = {
  counter: (state: any) => state.counter.counter,
  peopleList: (state: any) => state.people.peopleList,
}

// default state

const COUNTERSTATE = {
  counter: 0
};

const PEOPLESTATE = {
  peopleList: []
}

// reudcers

const inc = (state: any, {payload}: any) => {
  const { amount } = payload;
  return { ...state, counter: state.counter + amount };
}

const dec = (state: any, {payload}: any) => {
  const { amount } = payload;
  return { ...state, counter: state.counter - amount };
}

const fetchPeopleSuccessReducer = (state: any, {payload}: any) => {
  return {...state, ...payload };
}

const fetchPeopleFailureReducer = (state: any, {payload}: any) => {
  return {...state, ...payload };
}

const counter = handleActions({
    [Types.INCREMENT]: inc,
    [Types.DECREMENT]: dec,
  },
  COUNTERSTATE
);

const people = handleActions({
  [Types.FETCH_PEOPLE_SUCCESS]: fetchPeopleSuccessReducer,
  [Types.FETCH_PEOPLE_FAILURE]: fetchPeopleFailureReducer
}, PEOPLESTATE);

export default {
  counter: counter,
  people: people,
};