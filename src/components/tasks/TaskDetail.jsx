import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import SubtaskList from "./SubtaskList";
import CommentSection from "./CommentSection";
import { ArrowLeft, User, MessageSquare, Users } from "lucide-react";

const TaskDetail = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [taskData, setTaskData] = useState(task);
  const { darkMode, addComment } = useAppContext();
  const navigate = useNavigate();

  const toggleSubtask = (subtaskId) => {
    setTaskData({
      ...taskData,
      subtasks: taskData.subtasks.map((subtask) =>
        subtask.id === subtaskId
          ? { ...subtask, completed: !subtask.completed }
          : subtask
      ),
    });
  };

  const handleAddComment = (comment) => {
    addComment(taskData.id, comment);
    setTaskData({
      ...taskData,
      comments: [
        ...taskData.comments,
        {
          id: Date.now(),
          user: "You",
          text: comment,
          timestamp: new Date().toISOString(),
        },
      ],
    });
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <header
        className={`px-4 py-3 border-b flex items-center ${
          darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
        }`}
      >
        <button
          onClick={() => navigate("/dashboard")}
          className={`flex items-center space-x-2 px-3 py-2 rounded-lg ${
            darkMode
              ? "text-gray-400 hover:bg-gray-700"
              : "text-gray-600 hover:bg-gray-100"
          } transition-colors`}
        >
          <ArrowLeft size={20} />
          <span>Back to Dashboard</span>
        </button>

        <div className="flex-1"></div>

        <div className="flex space-x-2">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className={`px-4 py-2 rounded-lg ${
              isEditing
                ? "bg-gray-600 text-white"
                : darkMode
                ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } transition-colors`}
          >
            {isEditing ? "Cancel Editing" : "Edit Task"}
          </button>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Task Details */}
              <div
                className={`border rounded-xl p-6 ${
                  darkMode
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-200"
                }`}
              >
                <div className="space-y-4">
                  <div>
                    <label
                      className={`block text-sm font-medium mb-2 ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Task Title
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={taskData.title}
                        onChange={(e) =>
                          setTaskData({ ...taskData, title: e.target.value })
                        }
                        className={`w-full px-3 py-2 rounded-lg border ${
                          darkMode
                            ? "bg-gray-700 border-gray-600 text-white"
                            : "bg-white border-gray-300"
                        } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                      />
                    ) : (
                      <h1
                        className={`text-2xl font-bold ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {taskData.title}
                      </h1>
                    )}
                  </div>

                  <div>
                    <label
                      className={`block text-sm font-medium mb-2 ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Description
                    </label>
                    {isEditing ? (
                      <textarea
                        value={taskData.description}
                        onChange={(e) =>
                          setTaskData({
                            ...taskData,
                            description: e.target.value,
                          })
                        }
                        rows={4}
                        className={`w-full px-3 py-2 rounded-lg border ${
                          darkMode
                            ? "bg-gray-700 border-gray-600 text-white"
                            : "bg-white border-gray-300"
                        } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                      />
                    ) : (
                      <p
                        className={`whitespace-pre-wrap ${
                          darkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {taskData.description}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        className={`block text-sm font-medium mb-2 ${
                          darkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        Due Date
                      </label>
                      {isEditing ? (
                        <input
                          type="date"
                          value={taskData.dueDate}
                          onChange={(e) =>
                            setTaskData({
                              ...taskData,
                              dueDate: e.target.value,
                            })
                          }
                          className={`w-full px-3 py-2 rounded-lg border ${
                            darkMode
                              ? "bg-gray-700 border-gray-600 text-white"
                              : "bg-white border-gray-300"
                          } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                        />
                      ) : (
                        <p
                          className={`${
                            darkMode ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {new Date(taskData.dueDate).toLocaleDateString()}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        className={`block text-sm font-medium mb-2 ${
                          darkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        Status
                      </label>
                      <div
                        className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
                          taskData.completed
                            ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                            : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                        }`}
                      >
                        {taskData.completed ? "Completed" : "In Progress"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtasks */}
              <div
                className={`border rounded-xl p-6 ${
                  darkMode
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-200"
                }`}
              >
                <h2
                  className={`text-lg font-bold mb-4 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Subtasks (
                  {taskData.subtasks.filter((s) => s.completed).length}/
                  {taskData.subtasks.length})
                </h2>

                <SubtaskList
                  subtasks={taskData.subtasks}
                  onToggleSubtask={toggleSubtask}
                  editable={isEditing}
                />
              </div>

              {/* Comments */}
              <div
                className={`border rounded-xl p-6 ${
                  darkMode
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-200"
                }`}
              >
                <CommentSection
                  comments={taskData.comments}
                  onAddComment={handleAddComment}
                />
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Assigned Users */}
              <div
                className={`border rounded-xl p-6 ${
                  darkMode
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-200"
                }`}
              >
                <h3
                  className={`text-lg font-bold mb-4 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Assigned To
                </h3>
                <div className="space-y-3">
                  {taskData.assignedUsers.map((user, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <User className="text-white" size={16} />
                      </div>
                      <span
                        className={`${
                          darkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {user}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div
                className={`border rounded-xl p-6 ${
                  darkMode
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-200"
                }`}
              >
                <h3
                  className={`text-lg font-bold mb-4 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Quick Actions
                </h3>
                <div className="space-y-2">
                  <button
                    className={`w-full flex items-center px-3 py-2 rounded-lg ${
                      darkMode
                        ? "hover:bg-gray-700 text-gray-300"
                        : "hover:bg-gray-50 text-gray-700"
                    } transition-colors`}
                  >
                    <MessageSquare className="mr-2" size={16} />
                    Add to Calendar
                  </button>
                  <button
                    className={`w-full flex items-center px-3 py-2 rounded-lg ${
                      darkMode
                        ? "hover:bg-gray-700 text-gray-300"
                        : "hover:bg-gray-50 text-gray-700"
                    } transition-colors`}
                  >
                    <Users className="mr-2" size={16} />
                    Share Task
                  </button>
                  <button
                    className={`w-full flex items-center px-3 py-2 rounded-lg ${
                      darkMode
                        ? "hover:bg-gray-700 text-red-400"
                        : "hover:bg-gray-50 text-red-600"
                    } transition-colors`}
                  >
                    Delete Task
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetail;
