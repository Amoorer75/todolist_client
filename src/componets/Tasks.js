import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Layout from '../shared/Layout';
import { Checkbox } from '@mui/material';


function Tasks() {
    const [taskItems,setTaskItems] = useState([])
    const [updated, setUpdated] = useState(false)

    const fetchData = async () => {
        try {
            const response = await axios('https://todoli-api.herokuapp.com/api/listitems')

            console.log(response.data.items)

            setTaskItems(response.data.items)

        }catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
       
        fetchData()
        
    },[])

    const handleUpdate = (id) => {
        axios({
            url: `https://todoli-api.herokuapp.com/api/listitems/${id}`,
            method: 'PUT',
            
        }).then(() => setUpdated(true)).catch(console.error)
    }
    // useEffect(() => {
    //     if(updated) {
    //         return navigate(`/`)
    //     }
    // })
    const check = (checked) => {
        if (checked === true) {
            return (    
            <Checkbox
            checked
           color="primary"
       />
        )} else {
            <Checkbox
           color="primary"
       />
            }
        }
    


    const tasks = taskItems.map((item) => {
        
        return (
        
            <div>
           <NavLink className="link-Nav" to={`/task/${item._id}`}>
            <li key={item._id} >
             {item.task}
             {check(item.isComplete)}
             </li>
           </NavLink>
            
        </div>
        )
    })

  return (
    <Layout>
    

        <h1>Tasks to do</h1>
    <div className="list">
    <ul>
        {tasks}
    </ul>
    </div>
    
    </Layout>
  )
}

export default Tasks;