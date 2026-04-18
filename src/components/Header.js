export default function Header() {
  return (
    <div>
      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
        React + Vite + Tailwind
      </p>

      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
        To Do List
      </h1>

      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
        Projeto com localStorage, edição de tarefa e modo escuro.
      </p>
    </div>
  );
}
