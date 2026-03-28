import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import NavBar from "./components/NavBar";

// ✅ All pages now correctly imported from /pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/AdminLogin";

import EditNavigation from "./pages/EditNavigation";

// Admin + Protected
import ProtectedRoute from "./components/ProtectedRoute";
import AdminDashboard from "./components/AdminDashboard";
import EditHome from "./components/EditHome";
import EditServices from "./components/EditServices";
import EditTheme from "./components/EditTheme";

// Client Flow
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

          {/* Auth */}
          <Route path="/login" element={<AdminLogin />} />

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
