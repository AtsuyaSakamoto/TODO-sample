import { combineReducers } from "redux";
import todo from "./todo";
import routetodo from './routetodo'


const routereducer=combineReducers({
    todo:todo,
    routetodo:routetodo
})

export default routereducer;