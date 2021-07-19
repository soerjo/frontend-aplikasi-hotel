import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";
import checkInReducer from "./reducers/checkInReducer";
import checkOutReducer from "./reducers/checkOutReducer";

const reducer = combineReducers({
  auth: authReducer,
  checkIn: checkInReducer,
  checkOut: checkOutReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
