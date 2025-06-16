import React from "react";
import { CheckSquare, Clock } from "lucide-react";
import { useAppContext } from "../../context/AppContext";

const StatsCards = ({ totalTasks, completedTasks, overdueTasks }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
      {/* Total Tasks */}
      <div
        className={`rounded-xl p-5 shadow-sm border ${
          useAppContext().darkMode
            ? "bg-gray-800 border-gray-700"
            : "bg-white border-gray-200"
        }`}
      >
        <div className="flex items-center justify-between">
          <div>
            <p
              className={`text-sm font-medium ${
                useAppContext().darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Total Tasks
            </p>
            <p
              className={`text-2xl font-bold mt-1 ${
                useAppContext().darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {totalTasks}
            </p>
          </div>
          <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-blue-100 dark:bg-blue-900/30">
            <CheckSquare
              className="text-blue-600 dark:text-blue-400"
              size={24}
            />
          </div>
        </div>
      </div>

      {/* Completed Tasks */}
      <div
        className={`rounded-xl p-5 shadow-sm border ${
          useAppContext().darkMode
            ? "bg-gray-800 border-gray-700"
            : "bg-white border-gray-200"
        }`}
      >
        <div className="flex items-center justify-between">
          <div>
            <p
              className={`text-sm font-medium ${
                useAppContext().darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Completed
            </p>
            <p
              className={`text-2xl font-bold mt-1 ${
                useAppContext().darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {completedTasks}
            </p>
          </div>
          <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-green-100 dark:bg-green-900/30">
            <CheckSquare
              className="text-green-600 dark:text-green-400"
              size={24}
            />
          </div>
        </div>
      </div>

      {/* Overdue Tasks */}
      <div
        className={`rounded-xl p-5 shadow-sm border ${
          useAppContext().darkMode
            ? "bg-gray-800 border-gray-700"
            : "bg-white border-gray-200"
        }`}
      >
        <div className="flex items-center justify-between">
          <div>
            <p
              className={`text-sm font-medium ${
                useAppContext().darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Overdue
            </p>
            <p
              className={`text-2xl font-bold mt-1 ${
                useAppContext().darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {overdueTasks}
            </p>
          </div>
          <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-red-100 dark:bg-red-900/30">
            <Clock className="text-red-600 dark:text-red-400" size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCards;
