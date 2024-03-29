import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";

import { cartreducer } from "./addtocart/reducer";
import { productreducer } from "./prodcutPages/reducer";

const middleware = (store) => (next) => (action) => {
  next(action);
};

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(middleware)
  // other store enhancers if any
);

const rootreducer=combineReducers({
  cart:cartreducer,
  products:productreducer
})

export const store = createStore(rootreducer, enhancer);
