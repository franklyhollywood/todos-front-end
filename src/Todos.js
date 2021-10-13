import React, { Component } from 'react'
import { fetchAllToDos } from './Fetch-utils.js'

export default class Todos extends Component {

    state = {
        todos: []
    }

    componentDidMount = async() => {
        const todos = await fetchAllToDos(this.props.token)
        
        console.log(todos);
    }

    render() {
        return (
            <div> {this.state.todos.map(todo => <div>{todo.todo}</div>)}
                <label>
                    Todo:
                <input type = 'text'></input>
                </label>
                <button>To Do</button>

            </div>
        )
    }
}

// when page loads - token matches user - gets that users todo's
//todos are displayed on the page 
// when a user adds a new todo, that to do shows up on the page, and is added to taht users todos
// when a user clicks on that todo, it is crossed out.
//if there is no token, no access to this page: Redirect to login/signup