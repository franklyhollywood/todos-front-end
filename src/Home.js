import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

export default class Home extends Component {
    render() {
        return (
            <div className = 'container'>
                Already have an account?  <Link to = {`SignIn`}> Sign in </Link>
                Need an account?  <Link to = {`SignUp`}> Create one... </Link>
            </div>
        )
    }
}
