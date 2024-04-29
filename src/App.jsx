import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthProvider from "./AuthContext.provider";
import Login from "./Login";
import PrivateRoute from "./PrivateRoutes";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            {/* Other routes */}
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
