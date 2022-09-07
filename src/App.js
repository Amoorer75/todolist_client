
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import AddTask from './componets/AddTask';
import ChangeTask from './componets/ChangeTask';
import Task from './componets/Task';
import Tasks from './componets/Tasks';
import Weather from './componets/Weather';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <h3>{location.state ? location.state.msg : null}</h3>

      <Routes>
    <Route path='/' element={<Tasks />} />
    <Route path='/create-task' element={<AddTask />} />
    <Route path="/weather" element={<Weather />} />
    <Route path='/task/:id' element={<Task />} />
    <Route path='/change_task/:id/edit' element={<ChangeTask />} />

      </Routes>


     
    </div>
  );
}

export default App;
