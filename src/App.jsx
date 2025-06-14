import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import { Toaster } from "react-hot-toast";
import PrivateRoutes from "./utils/PrivateRoutes.jsx";
import RedirectRoutes from "./utils/RedirectRoutes.jsx";

function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<RedirectRoutes />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
