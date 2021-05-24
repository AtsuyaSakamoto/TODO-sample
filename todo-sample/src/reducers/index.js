import { combineReducers } from "redux";
import todo from "./todo";
// import task from "./task";
import routetodo from './routetodo'
// export default combineReducers({ todo:todo});

const routereducer=combineReducers({
    todo:todo,
    routetodo:routetodo
})

export default routereducer;