import initialState from "./state";
import * as types from "./action-types";

export function currentNav(state = initialState, action) {
    switch (action.type) {
        case types.SET_CURRENTNAV:
            return Object.assign({}, state, {
                currentNav: action.currentNav
            })
        default:
            return state
    }
}

export function visibleSubNav(state = initialState, action) {
    switch (action.type) {
        case types.SET_VISIBLESUBNAV:
            return Object.assign({}, state, {
                visibleSubNav: action.visibleSubNav
            })
        default:
            return state
    }
}

export function init(state = initialState, action) {
    switch (action.type) {
        case types.SET_INIT:
            return Object.assign({}, state, {
                init: action.init
            })
        default:
            return state
    }
}