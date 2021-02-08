import { createStore } from 'redux'
import {notesReducer} from "./test/notesReducer";


export const store = createStore(notesReducer)