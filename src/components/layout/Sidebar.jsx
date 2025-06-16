// src/components/layout/Sidebar.jsx
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import {
  Home,
  CheckSquare,
  Calendar,
  BarChart3,
  Settings,
  X,
} from "lucide-react";

const Sidebar = () => {
  const { darkMode, sidebarOpen, setSidebarOpen } = useAppContext();
  const location = useLocation();

  const menuItems = [
    { id: "dashboard", icon: Home, label: "Dashboard", path: "/dashboard" },
    { id: "tasks", icon: CheckSquare, label: "My Tasks", path: "/dashboard" },
    { id: "calendar", icon: Calendar, label: "Calendar", path: "/" },
    { id: "analytics", icon: BarChart3, label: "Analytics", path: "/" },
    { id: "settings", icon: Settings, label: "Settings", path: "/" },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Mobile backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed lg:static inset-y-0 left-0 z-30 w-64 transform
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        transition-transform duration-300 ease-in-out
        ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}
        border-r flex flex-col h-screen
      `}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <CheckSquare className="text-white" size={20} />
            </div>
            <span
              className={`text-xl font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              TaskHive
            </span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label="Close sidebar"
          >
            <X
              size={20}
              className={darkMode ? "text-gray-400" : "text-gray-600"}
            />
          </button>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.path}
                  className={`
                    flex items-center space-x-3 px-3 py-3 rounded-lg transition-colors duration-200
                    ${
                      isActive(item.path)
                        ? darkMode
                          ? "bg-blue-600 text-white shadow-inner"
                          : "bg-blue-50 text-blue-700 border border-blue-200"
                        : darkMode
                        ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }
                  `}
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
