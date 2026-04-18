import { useState } from "react";

export default function TaskItem({ task, onToggleTask, onRemoveTask, onEditTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  function handleSave() {
    const value = editText.trim();
    if (!value) return;

    onEditTask(task.id, value);
    setIsEditing(false);
  }

  function handleCancel() {
    setEditText(task.text);
    setIsEditing(false);
  }

  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 p-4 dark:border-slate-700">
      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => onToggleTask(task.id)}
          className="flex items-center gap-3 text-left"
        >
          <span
            className={`flex h-6 w-6 items-center justify-center rounded-full border ${
              task.done
                ? "border-slate-900 bg-slate-900 text-white dark:border-slate-200 dark:bg-slate-200 dark:text-slate-900"
                : "border-slate-300 bg-white dark:border-slate-600 dark:bg-slate-800"
            }`}
          >
            {task.done ? "✓" : ""}
          </span>

          {!isEditing && (
            <span
              className={`text-sm md:text-base ${
                task.done
                  ? "text-slate-400 line-through dark:text-slate-500"
                  : "text-slate-800 dark:text-slate-100"
              }`}
            >
              {task.text}
            </span>
          )}
        </button>

        {!isEditing && (
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="rounded-xl px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              Editar
            </button>

            <button
              type="button"
              onClick={() => onRemoveTask(task.id)}
              className="rounded-xl px-3 py-2 text-sm text-slate-500 transition hover:bg-slate-100 hover:text-red-500 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              Excluir
            </button>
          </div>
        )}
      </div>

      {isEditing && (
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-slate-900 outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />

          <div className="flex gap-2">
            <button
              type="button"
              onClick={handleSave}
              className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white dark:bg-slate-200 dark:text-slate-900"
            >
              Salvar
            </button>

            <button
              type="button"
              onClick={handleCancel}
              className="rounded-2xl bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 dark:bg-slate-700 dark:text-slate-100"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
