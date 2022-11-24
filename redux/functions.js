import {store} from "./store";

export function createStore(reducer, initialState) {
    let state = initialState
    return {
        dispatch: action => {
            state = reducer(state, action)
        },
        getState: () => state,
    }
}

export function combineReducers(reducersMap) {
    return function combinationReducer(state, action) {
        const nextState = {}
        Object.entries(reducersMap).forEach(([key, reducer]) => {
            nextState[key] = reducer(state[key], action)
        })
        return nextState
    }
}

export function addStoreMethod(method) {
    store.dispatch({type: 'ADD_METHOD', method})
}

export function addStoreMethods(methods) {
    Object.keys(methods).forEach(key => {
        addStoreMethod({[key]: methods[key]})
    })
}