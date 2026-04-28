import { useState } from 'react';
import Home from './components/Home';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  // RF_001: Cadastro de tarefas
  const addTask = (title) => {
    const newTask = {
      id: Math.random(),
      title,
      completed: false // RF_004: Status inicial pendente
    };
    setTasks([...tasks, newTask]);
  };

  // RF_003: Marcar como concluída
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