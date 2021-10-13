import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
    NavLink,
    Redirect
} from 'react-router-dom';
import './App.css'
import SignUp from './SignUp.js'
import SignIn from './SignIn.js'
import Todos from './Todos.js'
import Home from './Home.js'

const TOKEN_KEY = 'TOKEN'
export default class App extends Component {

state = {
  token: localStorage.getItem(TOKEN_KEY) || ''
}

  tokenToLocalStorage = token => {
    localStorage.setItem(TOKEN_KEY, token)
    this.setState({ token: token })
  }

  logout = () => {
    localStorage.clear()
    this.setState({ token: ''})
    
  }


    render() {
        return (
            <div>
                <Router>
                <header>
                    <NavLink exact activeClassName='active-link' to="/">Home</NavLink>
                    <NavLink exact activeClassName='active-link' to="/todos">To Dos</NavLink>
                    {this.state.token && <button onClick={this.logout}>Logout</button>}
                  </header>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <Home {...routerProps} />} 
                        />
                        <Route 
                            path="/signup" 
                            exact
                            render={(routerProps) => <SignUp 
                              tokenToLocalStorage = {this.tokenToLocalStorage}
                              {...routerProps} />} 
                        />
                         <Route 
                            path="/signin" 
                            exact
                            render={(routerProps) => <SignIn
                            tokenToLocalStorage = {this.tokenToLocalStorage} 
                            {...routerProps} />} 
                        />
                        <Route 
                          path="/todos" 
                          exact
                          render={(routerProps) => 
                          this.state.token
                          ? <Todos 
                          token = {this.state.token}  
                          {...routerProps} />
                          : <Redirect to = "/signin" />
                        }
                         

                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}
