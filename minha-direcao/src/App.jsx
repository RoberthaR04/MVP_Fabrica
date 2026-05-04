import { useState } from 'react';
import Home from './components/Home';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (title) => {
    const newTask = {
      id: Math.random(),
      title,
      completed: false 
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="app-container">
      <Home 
        tasks={tasks} 
        addTask={addTask} 
        toggleTask={toggleTask} 
      />
    </div>
  );
}

export default App;