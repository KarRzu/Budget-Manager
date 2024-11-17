export function Sidebar() {
  return (
    <>
      <section className="w-1/5 bg-slate-400 h-screen">
        <h1 className="p-10 text-lg font-bold">BudgetManager </h1>

        <ul className="flex flex-col gap-6 ml-4">
          <li>Dashboard</li>
          <li>Incomes</li>
          <li>Budgets</li>
          <li>Expenses</li>
          <li>Profile</li>
        </ul>
      </section>
    </>
  );
}
