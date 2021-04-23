import {combineReducers, createStore} from "redux";
import {anectodeReducer} from "./reducers/anecdoteReducer";
import {notificationReducer} from "./reducers/notificationReducer"
import {filterReducer} from "./reducers/filterReducer";

const reducer = combineReducers({
    anecdotes: anectodeReducer,
    notification: notificationReducer,
    filter: filterReducer
})

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())