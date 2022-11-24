import contentReducer from "./contentReducer";
import methodReducer from "./methodReducer";
import fileReducer from "./fileReducer";
import {combineReducers} from "../functions";
import dataReducer from "./dataReducer";

export const reducer = combineReducers({
    contentReducer,
    methodReducer,
    fileReducer,
    dataReducer
})