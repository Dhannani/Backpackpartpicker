import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import axios from "axios";
import Cookie from 'js-cookie';

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import EditUser from "./User-Components/edit-user.component";
import UserList from "./User-Components/user-list.component";
import LoginWrapper from "./User-Components/login-wrapper.component";
import CreateUserWrapper from "./User-Components/create-user-wrapper.component";
import Packs from "./Packs-Components/packs.component";
import Navbar from "./Main-Components/navbar.component";
import Home from "./Main-Components/home.component";

export default class Controller extends Component {
    constructor(props) {
        super(props);

        this.isloggedin = this.isloggedin.bind(this);
        this.state = {loggedIn: false}

    }

    componentDidMount() {
        this.isloggedin()
    }



    isloggedin() {
        let accessString = Cookie.get("JWT");
        console.log(accessString);
        axios
          .get("http://localhost:4000/packs/", {
            headers: { Authorization: "JWT " + accessString },
          })
          .then((res) => {
            if(!this.loggedIn) {
                console.log("setting state")
                this.setState({loggedIn: true});
            }
            console.log("logged in");
            return true;
          })
          .catch((error) => {
            if(this.loggedIn) {
                console.log("setting state")
                this.setState({loggedIn: false});
            }
            console.log("not logged in");
            return false;
          });
        return false;
      }

    render() {
        return(
            <Router>
    
            <Navbar loggedIn={this.state.loggedIn} isloggedin={this.isloggedin}/>
            <div className="App">
              <header className="App-header">
                
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path="/packs" component={Packs} />
                  <Route path="/create-user" component={() => <CreateUserWrapper loggedIn={this.state.loggedIn} isloggedin={this.isloggedin}/>} />
                  <Route path="/log-in" component={() => <LoginWrapper loggedIn={this.state.loggedIn} isloggedin={this.isloggedin}/>} />
                  <Route path="/edit-user/:id" component={EditUser} />
                  <Route path="/user-list" component={UserList} />
                </Switch>
              </header>
            </div>
          </Router> 
        )
    }

}