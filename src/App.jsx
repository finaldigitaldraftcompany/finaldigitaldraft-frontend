import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import NavBar from "./components/NavBar";

import Home from "./components/Home";
import Services from "./components/Services";
import Login from "./components/Login";
import Signup from "./components/Signup";

import ProtectedRoute from "./components/ProtectedRoute";
import AdminDashboard from "./components/AdminDashboard";
import EditHome from "./components/EditHome";
import EditServices from "./components/EditServices";
import EditTheme from "./components/EditTheme";

import Checkout from "./clientflow/Checkout";
import Success from "./clientflow/Success";
import Cancel from "./clientflow/Cancel";

export default function App() {
  return (
    <Router>

      {/* ✅ Top Section: Header + NavBar stacked neatly */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Header />
        <NavBar />
      </div>

      {/* ✅ Push page content down so it doesn't hide behind fixed NavBar */}
      <div style={{ marginTop: "140px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* ✅ Checkout Flow */}
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />

          {/* ✅ Admin Routes */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/edit-home"
            element={
              <ProtectedRoute>
                <EditHome />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/edit-services"
            element={
              <ProtectedRoute>
                <EditServices />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/edit-theme"
            element={
              <ProtectedRoute>
                <EditTheme />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>

    </Router>
  );
}