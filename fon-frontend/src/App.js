import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./views/Layout";
import NoPage from "./views/NoPage";
import List from "./views/List";
import Chart from "./views/Chart";
import Dashboard from "./views/Dashboard";
import SignIn from "./views/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/list" element={<List />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
