export default function ThemeToggle({ theme, onToggleTheme }) {
  return (
    <button
      type="button"
      onClick={onToggleTheme}
      className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
    >
      {theme === "light" ? "🌙 Modo escuro" : "☀️ Modo claro"}
    </button>
  );
}
