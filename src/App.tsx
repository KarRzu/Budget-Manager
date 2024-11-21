import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ROUTES } from "./router/routes";
import { Dashboard } from "./pages/Dashboard";
import { Budgets } from "./pages/Budgets";
import { Layout } from "./components/shared/Layout";
import { Expenses } from "./pages/Expenses";
import { Incomes } from "./pages/Incomes";
import { Profile } from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path={ROUTES.dashboard} element={<Dashboard />} />
          <Route path={ROUTES.budgets} element={<Budgets />} />
          <Route path={ROUTES.expenses} element={<Expenses />} />
          <Route path={ROUTES.incomes} element={<Incomes />} />
          <Route path={ROUTES.profile} element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
