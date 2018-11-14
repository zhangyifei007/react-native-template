import { handleActions, createActions } from 'redux-actions';

// Actions Types

export const Types = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
}

// Actions

const { increment, decrement } = createActions({
  INCREMENT: (amount = 1) => ({amount}),
  DECREMENT: (amount = 1) => ({amount}),
});

// Action creator

export const Actions = {
  increment,
  decrement,
}

// selectors

export const CounterSelector = {
  counter: (state: any) => state.counter
}

// default state

const DEFAULTSTATE = {
  counter: 0
};

// reudcers

const inc = (state: any, {payload}: any) => {
  const { amount } = payload;
  return { ...state, counter: state.counter + amount };
}

const dec = (state: any, {payload}: any) => {
  const { amount } = payload;
  return { ...state, counter: state.counter - amount };
}

const counter = handleActions({
    [Types.INCREMENT]: inc,
    [Types.DECREMENT]: dec,
  },
  DEFAULTSTATE
);

export default counter;