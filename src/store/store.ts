import { createStore } from "redux";
import { middleware } from "../middleware";
import { systemAPIReducer } from '../reducer'

export const store = createStore(systemAPIReducer, middleware)