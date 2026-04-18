const filters = [
  { key: "all", label: "Todas" },
  { key: "pending", label: "Pendentes" },
  { key: "done", label: "Concluídas" },
];

export default function FilterButtons({ filter, setFilter }) {
  return (
    <div className="mb-6 flex flex-wrap gap-2">
      {filters.map((item) => (
        <button
          key={item.key}
          type="button"
          onClick={() => setFilter(item.key)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${
            filter === item.key
              ? "bg-slate-900 text-white dark:bg-slate-200 dark:text-slate-900"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
