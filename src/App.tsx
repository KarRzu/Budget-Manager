import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ROUTES } from "./router/routes";
import { Dashboard } from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.dashboard} element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
