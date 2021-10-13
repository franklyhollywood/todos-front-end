import React, { Component } from 'react'
import { fetchAllToDos, createToDo, updateToDos } from './Fetch-utils.js'
import './App.css'


export default class Todos extends Component {

    state = {
        todos: [],
        todo: ''
    }
// when page loads - token matches user - gets that users todo's
//todos are displayed on the page 
// when a user adds a new todo, that to do shows up on the page, and is added to taht users todos in DB
// when a user clicks on that todo, it is crossed out.
//if there is no token, no access to this page: Redirect to login/signup

//when page loads, get the users todo's, that match that token:
    componentDidMount = async() => {
        const todosArray = await fetchAllToDos(this.props.token)
        
        this.setState({ todos: todosArray })
    }

    submit = async e => {
        e.preventDefault()

        await createToDo(this.state.todo, this.props.token)
        const todosArray = await fetchAllToDos(this.props.token)
        this.setState({ todos: todosArray })
    }

    complete = async (id, completedStatus) => {
        // calling update todo
        await updateToDos(this.props.token, id, completedStatus)
        // fetching all to do's with new information
        const todosArray = await fetchAllToDos(this.props.token)
        // updating state with new information
        this.setState({ todos: todosArray })
    }

    render() {
        console.log(this.state.todos)
        return (
            <div> 
            <form onSubmit = {this.submit}>
                <label>
                    Todo:
                <input value = {this.state.todo} onChange = {(e) => this.setState({todo: e.target.value })} type = 'text'></input>
                </label>
                <button>To Do</button>
            </form>
            <ul>
                {this.state.todos.map(todo => <li className = {todo.completed ? 'completed' : 'not-completed'}onClick = {() => this.complete(todo.id, !todo.completed)}>{todo.todo}</li>)}
            </ul>
            </div>
        )
    }
}

