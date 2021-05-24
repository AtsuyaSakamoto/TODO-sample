import React from "react";
// import { connect } from "react-redux";
// import { addTask, removeTask } from "./actions";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import  TodoCreate from "./component/todoCreate";
import Home from './component/home';
import Dis from './component/Dis';


const App = () => {
  return (
    <div>
<h1>TODO</h1>
    <Router>
        <Link to='/todoCreate'>新規チケット作成</Link> |
        <Link to='/Home'>チケット一覧</Link>
        <Switch>
        <Route path='/todoCreate'><TodoCreate/></Route>
        <Route path='/Home'><Home/></Route>
        <Route path='/:index'><Dis/></Route>
        </Switch>
       
    </Router>
      </div>
  );
};

export default App;
