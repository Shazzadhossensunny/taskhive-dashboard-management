// src/components/dashboard/TaskList.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import { CheckSquare, Clock, Users } from "lucide-react";

const TaskCard = ({ task }) => {
  const { darkMode, toggleTaskStatus } = useAppContext();
  const navigate = useNavigate();

  const openTaskDetail = () => {
    navigate(`/task/${task.id}`);
  };

  return (
    <div
      className={`p-4 rounded-lg border cursor-pointer transition-all mb-3 last:mb-0 ${
        task.completed
          ? darkMode
            ? "bg-gray-700/50 border-gray-600"
            : "bg-gray-50 border-gray-200"
          : darkMode
          ? "bg-gray-700 border-gray-600 hover:bg-gray-600"
          : "bg-white border-gray-200 hover:shadow-md"
      }`}
      onClick={openTaskDetail}
    >
      <div className="flex items-start space-x-3">
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleTaskStatus(task.id);
          }}
          className={`
            mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors
            ${
              task.completed
                ? "bg-green-500 border-green-500"
                : darkMode
                ? "border-gray-500 hover:border-green-400"
                : "border-gray-300 hover:border-green-500"
            }
          `}
          aria-label={
            task.completed ? "Mark as incomplete" : "Mark as complete"
          }
        >
          {task.completed && (
            <svg
              className="w-3 h-3 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </button>

        <div className="flex-1 min-w-0">
          <h3
            className={`
            font-medium transition-all
            ${
              task.completed
                ? darkMode
                  ? "text-gray-400 line-through"
                  : "text-gray-500 line-through"
                : darkMode
                ? "text-white"
                : "text-gray-900"
            }`}
          >
            {task.title}
          </h3>
          <p
            className={`text-sm mt-1 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {task.description}
          </p>
          <div className="flex flex-wrap gap-3 mt-2">
            <div className="flex items-center space-x-1">
              <Clock
                size={14}
                className={darkMode ? "text-gray-500" : "text-gray-400"}
              />
              <span
                className={`text-xs ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Due {new Date(task.dueDate).toLocaleDateString()}
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <Users
                size={14}
                className={darkMode ? "text-gray-500" : "text-gray-400"}
              />
              <span
                className={`text-xs ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {task.assignedUsers.length} assigned
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TaskList = ({ tasks }) => {
  const { darkMode } = useAppContext();

  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map((task) => <TaskCard key={task.id} task={task} />)
      ) : (
        <div
          className={`text-center py-8 rounded-lg ${
            darkMode ? "bg-gray-800/50" : "bg-gray-50"
          }`}
        >
          <p className={darkMode ? "text-gray-400" : "text-gray-500"}>
            No tasks found. Create a new task to get started!
          </p>
        </div>
      )}
    </div>
  );
};

export default TaskList;
