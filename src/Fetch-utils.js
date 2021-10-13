import request from 'superagent'
// Get todo's, updateTodo, createTodo, login, signup 


const URL =  'https://morning-coast-80519.herokuapp.com'

//get all Todos:
export async function fetchAllToDos(token) {
    const response = await request
    .get(`${URL}/api/todos`)
    .set('Authorization', token)
    
    return response.body;
}

//Update one todo:
export async function updateToDos(token, id) {  
    const response = await request
    .put(`${URL}/api/todos/${id}`)
    .set('Authorization', token)
    
    return response.body;
}

//Create a todo: 
export async function createToDo(todo, token) {
    const response = await request
    .post(`${URL}/api/todos`)
    .send ({todo: todo})
    .set('Authorization', token)
    
    return response.body;
}

//login: 
export async function login(email, password) {
    const response = await request
    .post(`${URL}/auth/signin`)
    .send ({email, password})
    
    return response.body;
}

//signup: 
export async function signUp(email, password) {
    const response = await request
    .post(`${URL}/auth/signup`)
    .send ({email, password})
    
    return response.body;
}