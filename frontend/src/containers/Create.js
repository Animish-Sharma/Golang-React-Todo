import React, { useState } from 'react';
import axios from 'axios';
const Create = (props) => {
    const [todo,setTodo] = useState({
        title:'',
        description:''
    });
    const { title, description} = todo;
    const onChange = e => setTodo({...todo,[e.target.name]:e.target.value});

    const submit = async e=>{
        e.preventDefault();
        try {
            const body = JSON.stringify({title:title, description:description})
            console.log(body)
            const config={
                headers: {
                    "Content-Type": "application/json"
                }
            }
            const res = await axios.post("http://localhost:3000",body,config)
            console.log(res.data)
            props.history.push("/")
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <div className="d-flex flex-column mt-4">
            <h2 className="text-center display-4">Create a Todo</h2>
            <form onSubmit={submit}>
                <div class="form-group">
                    <label for="titleCreate">Title</label>
                    <input onChange={e=>onChange(e)} name="title" type="text" class="form-control" id="titleCreate" aria-describedby="emailHelp"/>
                </div>
                <div class="form-group">
                    <label for="descriptionCreate">Description</label>
                    <textarea onChange={e=>onChange(e)} name="description" type="text" class="form-control" id="descriptionCreate"/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Create
