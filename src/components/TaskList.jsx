import TaskItem from "./TaskItem.jsx";

export default function TaskList({ tasks, onToggleTask, onRemoveTask, onEditTask }) {
  if (tasks.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 p-8 text-center text-slate-500 dark:border-slate-700 dark:text-slate-400">
        Nenhuma tarefa encontrada nesse filtro.
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleTask={onToggleTask}
          onRemoveTask={onRemoveTask}
          onEditTask={onEditTask}
        />
      ))}
    </div>
  );
}
