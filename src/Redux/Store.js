import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from "./rootReducer";
import authReducer from "./Login/LoginReducer";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store