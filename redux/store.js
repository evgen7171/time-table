import {reducer} from "./reducers";
import {createStore} from "./functions";

const initialState = {
    content: '',
    methods: {},
    file: null,
    processed: false,
    table: {}
}

export const store = createStore(reducer, initialState)