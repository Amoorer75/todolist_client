import React from 'react'
import { TextField, Button } from '@mui/material';


function Form({task, handleChange, handleSubmit, }) {
  return (
    <div>

<form onSubmit={(e) => handleSubmit(e)} >

           
<TextField
    id="outlined"
    label="Task"
    placeholder="Enter Task"
    name="task"
    defaultValue={task.task}
    onChange={(e) => handleChange(e)}
    variant="outlined"
/>
<TextField
    id="outlined"
    label="is it completed"
    placeholder="true or false"
    name="isComplete"
    defaultValue={task.isComplete}
    onChange={(e) => handleChange(e)}
    variant="outlined"
/>

<Button variant="outlined" type="submit" sx={{padding:'15px'}}>Submit</Button>


</form>

    </div>
  )
}

export default Form