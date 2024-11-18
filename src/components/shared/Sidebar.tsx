import { BsCashCoin } from "react-icons/bs";
import { CgNotes, CgProfile } from "react-icons/cg";
import { GrMoney } from "react-icons/gr";
import { RxDashboard } from "react-icons/rx";
import { ROUTES } from "../../router/routes";
import { Link } from "react-router-dom";

export const SidebarLinks = [
  { path: ROUTES.dashboard, name: "Dashboard", icons: RxDashboard },
  { path: ROUTES.incomes, name: "Incomes", icons: BsCashCoin },
  { path: ROUTES.budgets, name: "Budgets", icons: GrMoney },
  { path: ROUTES.expenses, name: "Expenses", icons: CgNotes },
  { path: ROUTES.profile, name: "Profile", icons: CgProfile },
];

export function Sidebar() {
  return (
    <>
      <section className="w-1/5 bg-slate-900 h-screen">
        <h1 className="p-10 text-lg font-bold text-gray-300">BudgetManager </h1>

        <ul className="flex flex-col gap-8 ml-12 mt-8 text-gray-300">
          {SidebarLinks.map((link) => {
            return (
              <li key={link.path}>
                <Link to={link.path} className="flex gap-2 items-center">
                  {link.icons && <link.icons />}
                  <span>{link.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
