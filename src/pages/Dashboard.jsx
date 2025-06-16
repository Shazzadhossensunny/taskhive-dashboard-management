// src/pages/Dashboard.jsx
import React, { useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import Sidebar from "../components/layout/Sidebar";
import TopBar from "../components/layout/TopBar";
import StatsCards from "../components/dashboard/StatsCards";
import TaskList from "../components/dashboard/TaskList";
import CalendarPreview from "../components/dashboard/CalendarPreview";
import { Plus } from "lucide-react";

const Dashboard = () => {
  const { user, tasks, darkMode } = useAppContext();

  const completedTasks = tasks.filter((task) => task.completed).length;
  const overdueTasks = tasks.filter(
    (task) => !task.completed && new Date(task.dueDate) < new Date()
  ).length;
  const totalTasks = tasks.length;

  const currentHour = new Date().getHours();
  const greeting =
    currentHour < 12
      ? "Good morning"
      : currentHour < 18
      ? "Good afternoon"
      : "Good evening";

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="space-y-6">
            {/* Welcome Section */}
            <div
              className={`rounded-2xl p-6 ${
                darkMode
                  ? "bg-gradient-to-r from-blue-600 to-indigo-700"
                  : "bg-gradient-to-r from-blue-500 to-indigo-600"
              } text-white shadow-lg`}
            >
              <h1 className="text-2xl font-bold mb-2">
                {greeting}, {user?.email?.split("@")[0]}!
              </h1>
              <p className="text-blue-100">
                You have {tasks.filter((t) => !t.completed).length} tasks to
                complete today.
              </p>
            </div>

            {/* Stats Cards */}
            <StatsCards
              totalTasks={totalTasks}
              completedTasks={completedTasks}
              overdueTasks={overdueTasks}
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Today's Tasks */}
              <div className="lg:col-span-2">
                <div
                  className={`border rounded-xl p-6 shadow-sm ${
                    darkMode
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                    <h2
                      className={`text-xl font-bold ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Today's Tasks
                    </h2>
                    <button
                      onClick={() => alert("Add task functionality")}
                      className="flex items-center justify-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-full md:w-auto"
                    >
                      <Plus size={16} />
                      <span>Add Task</span>
                    </button>
                  </div>
                  <TaskList tasks={tasks} />
                </div>
              </div>

              {/* Calendar Preview */}
              <CalendarPreview />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
