import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/index';
import { Login } from './pages/HomePage/Login';
import { Signup } from './pages/HomePage/Signup';
import { AuthContextComponent } from './contexts/authContext';
import { HomeUser } from './pages/HomeUser/index';
import { ErrorPage } from './pages/ErrorPage';
import { HomeAdmin } from './pages/HomeAdmin/index';
import { ProtectedRoute } from './components/ProtectedRoute';

import { Store } from './pages/Store/index';

function App() {
  return (
    <>
      <AuthContextComponent>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/log-in" element={<Login />} />
          <Route
            path="/user"
            element={<ProtectedRoute component={HomeUser} />}
          />
          <Route path="/admin" element={<HomeAdmin />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AuthContextComponent>
    </>
  );
}

export default App;
