import { BsCashCoin } from "react-icons/bs";
import { CgNotes, CgProfile } from "react-icons/cg";
import { GrMoney } from "react-icons/gr";
import { RxDashboard } from "react-icons/rx";
import { ROUTES } from "../../router/routes";
import { NavLink } from "react-router-dom";

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
      <section className="w-1/5 bg-slate-900 h-screen shadow-lg">
        <h1 className="p-8 text-lg font-bold text-gray-300 border-b border-slate-700">
          BudgetManager
        </h1>

        <ul className="flex flex-col gap-4 mt-8 text-gray-300">
          {SidebarLinks.map((link) => {
            return (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center gap-4 px-4 py-2 rounded-md transition ${
                      isActive
                        ? "bg-slate-700 text-white font-semibold"
                        : "hover:bg-slate-800 hover:text-white"
                    }`
                  }
                >
                  {link.icons && <link.icons className="text-xl" />}
                  <span className="text-sm">{link.name}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
