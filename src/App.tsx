import React, {Component} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Switch } from 'react-router-dom';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Task from './pages/task';
import Viewtask from './pages/viewTask';
import Jokes from './pages/jokes';

class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <PublicRoute component={Login} path="/" exact />
          <PrivateRoute component={Dashboard} path="/dashboard" />
          <PrivateRoute component={Task} path="/task" />
          <PrivateRoute component={Viewtask} path="/view-task" />
          <PrivateRoute component={Jokes} path="/jokes" />
        </Switch>
      </BrowserRouter>
    )
  }
}
export default App;
