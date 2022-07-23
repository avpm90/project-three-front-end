import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/index";
import { Login } from "./pages/HomePage/Login";
import { Signup } from "./pages/HomePage/Signup";
import { AuthContextComponent } from "./contexts/authContext";
import { HomeUser } from "./pages/HomeUser/index";
import { ErrorPage } from "./pages/ErrorPage";

import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <p>Hello world.</p>
      <AuthContextComponent>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/user"
            element={<ProtectedRoute component={HomeUser} />}
          />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AuthContextComponent>
    </>
  );
}

export default App;
