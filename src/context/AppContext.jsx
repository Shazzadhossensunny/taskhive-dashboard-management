// src/context/AppContext.jsx
import React, { createContext, useState, useContext, useEffect } from "react";
import { dummyTasks } from "../utils/dummyData";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedDarkMode);

    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setTasks(dummyTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const login = (userData) => {
    setUser(userData);
    setTasks(dummyTasks);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const toggleTaskStatus = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const addComment = (taskId, comment) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            comments: [
              ...task.comments,
              {
                id: Date.now(),
                user: user.name,
                text: comment,
                timestamp: new Date().toISOString(),
              },
            ],
          };
        }
        return task;
      })
    );
  };

  return (
    <AppContext.Provider
      value={{
        user,
        tasks,
        setTasks,
        darkMode,
        setDarkMode,
        sidebarOpen,
        setSidebarOpen,
        login,
        logout,
        toggleTaskStatus,
        addComment,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
