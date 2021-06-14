import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
const Home = (props) => {
    const [todo,setTodo] = useState([])
    useEffect(()=>{
        const fetchData= async() =>{
            const res = await axios.get("http://localhost:3000/")
            console.log(res.data)
            setTodo(res.data)
        }
        fetchData()
    },[props])

    const noTodo = (
        <div className="jumbotron d-flex flex-column align-items-center">
            <h1 className="display-4">No Todo(s) Found</h1>
            <Link to="/create" className="btn btn-outline-info mt-3">Create Some</Link>
        </div>
    )
    const home = (
        <div>
            {todo.map(todos=>{
            return <div key={todo.id} className="card">
                <div className="card-header display-4">
                  {todos.title}
                </div>
                <div className="card-body">
                  <h4 className="card-title">{todos.description}</h4>
                  <Link to={`/${todos.id}`} className="btn btn-outline-success">Details</Link>
                </div>
            </div>
            })}
        </div>
    )
    return (
        <div className="d-flex flex-column mt-4">
            <Link to="/create" className="display-3 text-center text-decoration-none text-dark">Todo List</Link>
            {todo.length ? home : noTodo}
        </div>
    )
}

export default Home
