import { applyMiddleware, combineReducers, createStore } from "redux";
import { mealsReducer } from "./meals";
import thunk from "redux-thunk";
import { basketReducer } from "./basket";

const rootReducer = combineReducers({
  basket: basketReducer,
  meals: mealsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
