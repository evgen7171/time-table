export default function contentReducer(state = {content: 'пусто'}, action) {
    switch (action.type) {
        case 'SET_CONTENT':
            return {...state, content: action.content}
        case 'CLEAR_CONTENT':
            return {...state, content: ''}
        default:
            return state
    }
}