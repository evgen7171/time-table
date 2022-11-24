import {reducer} from "./reducers";
import {createStore} from "./functions";

const initialState = {
    content: '',
    methods: {},
    file: null,
    processed: false
}

export const store = createStore(reducer, initialState)