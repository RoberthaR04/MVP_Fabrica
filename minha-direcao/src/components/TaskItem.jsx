export default function TaskItem({ task, toggleTask }) {
  return (
    <li className={`task-item ${task.completed ? 'completed' : 'pending'}`}>
      <div className="task-item-left">
        <span className="task-title">
          {task.title}
        </span>
        <span className="task-status-badge">
          {task.completed ? 'Concluída' : 'Pendente'}
        </span>
      </div>
      <button 
        onClick={() => toggleTask(task.id)}
        className="toggle-button"
      >
        {task.completed ? 'Desmarcar' : 'Concluir'}
      </button>
    </li>
  );
}