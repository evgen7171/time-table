export default function dataReducer(state = {processed: false}, action){
    switch (action.type) {
        case 'PROCESSED':
            return {...state, processed: true}
        case 'NOT PROCESSED':
            return {...state, processed: false}
        default:
            return state
    }
}