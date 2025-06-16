// src/pages/TaskDetailPage.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import TaskDetail from "../components/tasks/TaskDetail";

const TaskDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks } = useAppContext();
  const task = tasks.find((t) => t.id === parseInt(id));

  if (!task) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-900">
        <div className="text-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            Task not found
          </p>
          <button
            onClick={() => navigate("/dashboard")}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return <TaskDetail task={task} />;
};

export default TaskDetailPage;
