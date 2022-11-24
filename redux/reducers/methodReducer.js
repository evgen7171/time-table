export default function methodReducer(state = {methods: {}}, action) {
    if (!state) state = {}
    switch (action.type) {
        case 'ADD_METHOD':
            const methods = {...state.methods, ...action.method}
            return {...state, methods}
        default:
            return state
    }
}