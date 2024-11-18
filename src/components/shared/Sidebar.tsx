import { BsCashCoin } from "react-icons/bs";
import { CgNotes, CgProfile } from "react-icons/cg";
import { GrMoney } from "react-icons/gr";
import { RxDashboard } from "react-icons/rx";

export function Sidebar() {
  return (
    <>
      <section className="w-1/5 bg-slate-400 h-screen">
        <h1 className="p-10 text-lg font-bold">BudgetManager </h1>

        <ul className="flex flex-col gap-6 ml-4">
          <div className="flex gap-2 items-center">
            <RxDashboard />
            <li>Dashboard</li>
          </div>
          <div className="flex gap-2 items-center">
            <BsCashCoin />
            <li>Incomes</li>
          </div>
          <div className="flex gap-2 items-center">
            <GrMoney />
            <li>Budgets</li>
          </div>
          <div className="flex gap-2 items-center">
            <CgNotes />
            <li>Expenses</li>
          </div>
          <div className="flex gap-2 items-center">
            <CgProfile />
            <li>Profile</li>
          </div>
        </ul>
      </section>
    </>
  );
}
