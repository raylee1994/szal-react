import {createStore, combineReducers} from "redux";
import {currentNav, visibleSubNav, init} from "./reducer";

let store = createStore(combineReducers({
    currentNav,
    visibleSubNav,
    init
}))

export default store;