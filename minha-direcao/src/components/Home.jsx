import TaskForm from './TaskForm';
import TaskList from './TaskList';

export default function Home({ tasks, addTask, toggleTask }) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;

  return (
    <div className="container-geral">
      {}
      <header className="home-header-externo">
        <h1>Minha Direção</h1>
        <p className="task-counter-externo">
          {totalTasks === 0 
            ? 'Nenhuma tarefa ainda. Adicione uma!' 
            : `${completedTasks} de ${totalTasks} concluídas`}
        </p>
      </header>

      {}
      <main className="home-content">
        <div className="content-container">
          <TaskForm addTask={addTask} />
          <TaskList tasks={tasks} toggleTask={toggleTask} />
        </div>
      </main>
    </div>
  );
}