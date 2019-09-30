import * as types from "./action-types";

export function setCurrentNav(currentNav) {
    return {
        type: types.SET_CURRENTNAV,
        currentNav
    }
}

export function setVisibleSubNav(visibleSubNav) {
    return {
        type: types.SET_VISIBLESUBNAV,
        visibleSubNav
    }
}

export function setInit(init) {
    return {
        type: types.SET_INIT,
        init
    }
}