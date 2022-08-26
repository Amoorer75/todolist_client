import { useState, useEffect } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Layout from '../shared/Layout'
import { Button } from '@mui/material';


function Task() {
    const [task,setTask] = useState([])
    const [deleted, setDeleted] = useState(false)
    const { id } = useParams();
    let navigate = useNavigate()

    const fetchData = async () => {
        try {
            const response = await axios(`https://todoli-api.herokuapp.com/api/listitems/${id}`)
            console.log(response.data.item)
            const result = response.data.item
            setTask(result)
        }catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchData()
    },[])

    useEffect(() => {
        if (!task) {
          return <p>Loading...</p>
        }
      }, [task])
    
      const destroy = () => {
       axios({
          url: `https://todoli-api.herokuapp.com/api/listitems/${id}`,
          method: 'DELETE'
        }).then(() => setDeleted(true)).catch(console.error)
      }
    
      useEffect(() => {
        if (deleted) {
          return navigate("/")
        }
      }, [deleted, navigate])
      
    

  return (
    <Layout>
    <div>

    <h3>{task.task}</h3>
          <Button variant="outlined"  sx={{padding:'15px'}} onClick={(e) => destroy(e)} >Delete Item</Button>
    
          <NavLink to={`/change_task/${id}/edit`} >
            <Button variant="outlined" sx={{padding:'15px'}}>Edit</Button>
          </NavLink>

    </div>
    </Layout>
  )
}

export default Task