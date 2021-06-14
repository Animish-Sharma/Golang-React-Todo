import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
const Update = (props) => {
    const [todo,setTodo] = useState({});
    const [formData,setFormData] = useState({
        title:'',
        description:'',
    });
    const { title, description} = formData
    let { id } = todo;
    useEffect(()=>{
        const fetchData = async () =>{
            const res = await axios.get(`http://localhost:3000/${props.match.params.id}`)
            console.log(res.data)
            setTodo(res.data)
        }
        fetchData()   
    },[props]);

    const onSubmit =async e=>{
        e.preventDefault();
        try {
            id = String(id)
            const body = ({ title,description,id });
            console.log(body)
            await axios.put(`http://localhost:3000`,body);
            props.history.push("/")
            console.log("Successfully done")
        } catch (e) {
            console.log(e)
        }
    }
    const onChange = e => setFormData({...formData,[e.target.name]:e.target.value});

    return (
        <div>
            <h1 className="display-4 text-center mt-5">Todo:Update</h1>

            <form onSubmit={e=>onSubmit(e)}>
            <div class="form-group">
                <label for="title">Title</label>
                <input required onChange={e=>onChange(e)} type="text" name="title" class="form-control" id="title"/>
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <textarea required onChange={e=>onChange(e)} name="description" type="text" class="form-control" id="description"/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        </div>
    )
}

export default Update
