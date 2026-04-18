import { useMemo } from "react";
import Header from "./components/Header";
import Stats from "./components/Stats";
import TaskForm from "./components/TaskForm";
import FilterButtons from "./components/FilterButtons";
import TaskList from "./components/TaskList";
import ThemeToggle from "./components/ThemeToggle";
import { initialTasks } from "./data/initialTasks";
import useLocalStorage from "./hooks/useLocalStorage";
import useTheme from "./hooks/useTheme";
import {
  addNewTask,
  toggleTaskById,
  removeTaskById,
  editTaskById,
  clearCompletedTasks,
} from "./utils/taskHelpers";
import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useLocalStorage("tasks", initialTasks);
  const [filter, setFilter] = useState("all");
  const { theme, toggleTheme } = useTheme();

  function addTask(text) {
    setTasks((current) => addNewTask(current, text));
  }

  function toggleTask(id) {
    setTasks((current) => toggleTaskById(current, id));
  }

  function removeTask(id) {
    setTasks((current) => removeTaskById(current, id));
  }

  function editTask(id, newText) {
    setTasks((current) => editTaskById(current, id, newText));
  }

  function clearCompleted() {
    setTasks((current) => clearCompletedTasks(current));
  }

  const filteredTasks = useMemo(() => {
    if (filter === "pending") return tasks.filter((task) => !task.done);
    if (filter === "done") return tasks.filter((task) => task.done);
    return tasks;
  }, [tasks, filter]);

  const total = tasks.length;
  const completed = tasks.filter((task) => task.done).length;
  const pending = total - completed;

  return (
    <div className="min-h-screen bg-slate-100 p-6 transition-colors dark:bg-slate-950 md:p-10">
      <div className="mx-auto max-w-2xl">
        <div className="rounded-3xl bg-white p-6 shadow-xl transition-colors dark:bg-slate-900 md:p-8">
          <div className="mb-6 flex items-start justify-between gap-4">
            <Header />
            <ThemeToggle theme={theme} onToggleTheme={toggleTheme} />
          </div>

          <div className="mb-8">
            <Stats total={total} pending={pending} completed={completed} />
          </div>

          <TaskForm onAddTask={addTask} />
          <FilterButtons filter={filter} setFilter={setFilter} />

          <TaskList
            tasks={filteredTasks}
            onToggleTask={toggleTask}
            onRemoveTask={removeTask}
            onEditTask={editTask}
          />

          <div className="mt-6 flex flex-col gap-3 border-t border-slate-200 pt-6 dark:border-slate-700 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-500 dark:text-slate-300">
              {completed} tarefa(s) concluída(s)
            </p>

            <button
              type="button"
              onClick={clearCompleted}
              className="rounded-2xl bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
            >
              Limpar concluídas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
