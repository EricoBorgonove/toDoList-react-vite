export default function Stats({ total, pending, completed }) {
  return (
    <div className="grid grid-cols-3 gap-3 text-center text-sm">
      <div className="rounded-2xl bg-slate-50 p-3 dark:bg-slate-800">
        <p className="font-semibold text-slate-900 dark:text-white">{total}</p>
        <p className="text-slate-500 dark:text-slate-300">Total</p>
      </div>

      <div className="rounded-2xl bg-slate-50 p-3 dark:bg-slate-800">
        <p className="font-semibold text-slate-900 dark:text-white">{pending}</p>
        <p className="text-slate-500 dark:text-slate-300">Pendentes</p>
      </div>

      <div className="rounded-2xl bg-slate-50 p-3 dark:bg-slate-800">
        <p className="font-semibold text-slate-900 dark:text-white">{completed}</p>
        <p className="text-slate-500 dark:text-slate-300">Feitas</p>
      </div>
    </div>
  );
}
