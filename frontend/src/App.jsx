import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/auth/Login";
import Dashboard from "./pages/admin/Dashboard";

import ProtectedRoute from "./routes/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      {/* Default Route */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Public Route */}
      <Route path="/login" element={<Login />} />

      {/* Protected Admin Route */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute roles={["ADMIN"]}>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* 404 */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}