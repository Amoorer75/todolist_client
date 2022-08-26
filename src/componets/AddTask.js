import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Form from '../shared/Form';
import Layout from '../shared/Layout';



function AddTask() {
    const navigate = useNavigate();
    const [task,setTask] = useState({
       task:"",
       isComplete:""
    })
    const [createdTask, setCreatedTask] = useState(null)

    const handleChange = (event) => {
        const updatedField = {[
            event.target.name]: event.target.value   
        }

        const editedItem = Object.assign(task, updatedField)

        setTask(editedItem)
    }

    const handleSubmit =(event) => {
        event.preventDefault()

        axios({
            url:`https://todoli-api.herokuapp.com/api/listitems`,
            method: 'POST',
            data: task
        }).then(res => setCreatedTask(res.data.item)).catch(console.error)
    }

    useEffect(() => {
        if (createdTask) {
          return navigate(`/`)
        }
      }, [createdTask, navigate])


  return (
    <Layout>
    <div>
    <h1 style={{marginBottom:'20px'}}>Add Task</h1>

        <Form 
        
        task={task}
        handleChange={(e) => handleChange(e)}
        handleSubmit={(e) => handleSubmit(e)}
        cancelPath='/'

        />
        
    </div>
    </Layout>
  )
}

export default AddTask