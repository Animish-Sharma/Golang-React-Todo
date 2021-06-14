import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
const Detail = (props) => {
    const [todo,setTodo] = useState({})
    useEffect(()=>{
        const fetchData = async () =>{
            const res = await axios.get(`http://localhost:3000/${props.match.params.id}`)
            console.log(res.data)
            setTodo(res.data)
        }
        fetchData()   
    },[props])
    const onDelete = async e => {
        let { id } = todo;
        const body = JSON.stringify({ id })
        const config = {
            headers:{
                "Content-Type": "application/json"
            }
        }
        console.log(body)
        await axios.delete(`http://localhost:3000/${todo.id}`);
        props.history.push("/")
    }
    return (
        <div>
            <h1 className="display-4 text-center mt-4">Todo: Detail</h1>
            <div class="card">
                <div class="card-header">
                    Detailed
                </div>
                <div class="card-body">
                    <h5 class="card-title">{todo.title}</h5>
                    <p class="card-text">{todo.description}</p>
                    <Link to={`/${todo.id}/update`} class="btn btn-outline-info ml-5">Update</Link>
                    <button onClick={onDelete} className="btn btn-outline-danger float-right mr-5">Delete</button>
                </div>
            </div> 
        </div>
    )
}

export default Detail
