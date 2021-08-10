import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { logout, isLogin } from '../utils';
import '../App.css'

class Navigation extends Component{
    constructor(props: {} | Readonly<{}>){
        super(props);
        this.state={
            isLogin: isLogin()
        }
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout= () => {
        logout();
        this.setState({
            isLogin: false
        });
    }

    render(){
        return(
            <div className="App">
                <nav className="navbar navbar-expand-lg navbar-light fixes-top">
                    <div className="container">
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav m1-auto">
                                <li className="nav-link">
                                    <Link className="nav-link" to={"/task"}><h4>Tasks</h4></Link>
                                </li>
                                <li className="nav-link">
                                    <Link className="nav-link" to={"/jokes"}><h4>Jokes</h4></Link>
                                </li>
                                <li className="nav-link">
                                    <Link className="nav-link" to={"/"} onClick={this.handleLogout}><h4>logout</h4></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navigation;