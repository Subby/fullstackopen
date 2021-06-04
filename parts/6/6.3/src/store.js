import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {anectodeReducer} from "./reducers/anecdoteReducer";
import {notificationReducer} from "./reducers/notificationReducer"
import {filterReducer} from "./reducers/filterReducer";

const reducer = combineReducers({
    anecdotes: anectodeReducer,
    notification: notificationReducer,
    filter: filterReducer
})

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))