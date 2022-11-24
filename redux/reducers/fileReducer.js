export default function fileReducer(state = {file: null}, action){
    switch (action.type) {
        case 'SET_FILE':
            return {...state, file: action.file}
        case 'CLEAR_FILE':
            return {...state, file: null}
        default:
            return state
    }
}