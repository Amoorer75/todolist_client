import React from 'react'
import {useEffect, useState,} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import Layout from '../shared/Layout'
import Form from '../shared/Form'
import axios from 'axios'

function ChangeTask() {
    const navigate = useNavigate()
    const { id } = useParams()  //get the id from the current object to update
    const [task, setTask] = useState({
        task:'',
    })
    const [updated, setUpdated] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
       try {
           const response = await axios(`https://todoli-api.herokuapp.com/api/listitems`)
           console.log(response)
           setTask(response.data)
       } catch (error) {
           console.log(error)
       }
      }
      fetchData()
    }, [])

    const handleChange = (event) => {
  
        const updatedField = { ...task, [event.target.name] : event.target.value }
     
        const editedItem = Object.assign(task, updatedField)
   
        setTask(editedItem)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
         axios({
             url: `https://todoli-api.herokuapp.com/api/listitems/${id}`,
             method: 'PUT',
             data: task
         }).then(() => setUpdated(true)).catch(console.error)
    }

    useEffect(() => {
        if(updated) {
            return navigate(`/`)
        }
    })




  return (
    <Layout>
    <div>
        <h1 style={{marginBottom:'20px'}}>Edit Task</h1>

        <Form 
        
        task={task}
        handleChange={(e) => handleChange(e)}
        handleSubmit={(e) => handleSubmit(e)}

        />
        
    </div>
    </Layout>
  )
}

export default ChangeTask