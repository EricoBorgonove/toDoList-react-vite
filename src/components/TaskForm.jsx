import { useState } from "react";

export default function TaskForm({ onAddTask }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const value = text.trim();
    if (!value) return;

    onAddTask(value);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex flex-col gap-3 sm:flex-row">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Digite uma nova tarefa"
        className="flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
      />

      <button
        type="submit"
        className="rounded-2xl bg-slate-900 px-5 py-3 font-medium text-white transition hover:opacity-90 dark:bg-slate-200 dark:text-slate-900"
      >
        Adicionar
      </button>
    </form>
  );
}
