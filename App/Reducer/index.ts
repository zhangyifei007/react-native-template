import { combineReducers } from "redux";
import configureStore from "./CreateStore";
import rootSaga from "../Sagas";
import example from "./Example";

const rootReducer = combineReducers({
  ...example
});

export default () => {
  const finalReducers = rootReducer;

  let { store, sagasManager, sagaMiddleware } = configureStore(
    finalReducers,
    rootSaga
  );

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require("./").reducers;
      store.replaceReducer(nextRootReducer);

      const newYieldedSagas = require("../Sagas").default;
      sagasManager.cancel();
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware.run(newYieldedSagas);
      });
    });
  }

  return store;
};
