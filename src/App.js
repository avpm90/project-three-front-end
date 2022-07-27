import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/index";
import { AuthContextComponent } from "./contexts/authContext";
import { HomeUser } from "./pages/HomeUser/index";
import { ErrorPage } from "./pages/ErrorPage";
import { HomeAdmin } from "./pages/HomeAdmin/index";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Store } from "./pages/Store/index";
import { EditTrip } from "./pages/HomeAdmin/EditTrip";

function App() {
  return (
    <>
      <AuthContextComponent>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/store" element={<Store />} />
          <Route
            path="/admin/trip/:id"
            element={<ProtectedRoute component={EditTrip} />}
          />
          <Route
            path="/admin"
            element={<ProtectedRoute component={HomeAdmin} />}
          />
          <Route path="/user" element={<HomeUser />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AuthContextComponent>
    </>
  );
}

export default App;
