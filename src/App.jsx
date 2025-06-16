// src/App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AppProvider, useAppContext } from "./context/AppContext";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import TaskDetailPage from "./pages/TaskDetailPage";

// Create ProtectedRoute as a separate component inside AppProvider
const ProtectedRoute = ({ children }) => {
  const { user } = useAppContext();
  return user ? children : <Navigate to="/" replace />;
};

function AppContent() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/task/:id"
          element={
            <ProtectedRoute>
              <TaskDetailPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
