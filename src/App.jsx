import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import NavBar from "./components/NavBar";

// Public Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";

// NEW unified login system
import Login from "./pages/Login";

// Admin + Protected
import ProtectedRoute from "./components/ProtectedRoute";
import AdminDashboard from "./pages/AdminDashboard";   // ✅ FIXED PATH
import EditHome from "./components/EditHome";
import EditServices from "./components/EditServices";
import EditTheme from "./components/EditTheme";
import EditNavigation from "./pages/EditNavigation";

// Client Checkout Flow
import Checkout from "./clientflow/Checkout";
import Success from "./clientflow/Success";
import Cancel from "./clientflow/Cancel";

export default function App() {
  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Header />
        <NavBar />
      </div>

      <div style={{ marginTop: "140px" }}>
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Unified Login */}
          <Route path="/login" element={<Login />} />

          {/* Checkout Flow */}
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />

          {/* Admin Routes */}
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

          <Route
            path="/admin/edit-navigation"
            element={
              <ProtectedRoute>
                <EditNavigation />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
