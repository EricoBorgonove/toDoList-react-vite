export function addNewTask(tasks, text) {
  const newTask = {
    id: Date.now(),
    text,
    done: false,
  };

  return [newTask, ...tasks];
}

export function toggleTaskById(tasks, id) {
  return tasks.map((task) =>
    task.id === id ? { ...task, done: !task.done } : task
  );
}

export function removeTaskById(tasks, id) {
  return tasks.filter((task) => task.id !== id);
}

export function editTaskById(tasks, id, newText) {
  return tasks.map((task) =>
    task.id === id ? { ...task, text: newText } : task
  );
}

export function clearCompletedTasks(tasks) {
  return tasks.filter((task) => !task.done);
}
