import React from "react";
import { useAppContext } from "../../context/AppContext";

const SubtaskItem = ({ subtask, onToggle, editable }) => {
  const { darkMode } = useAppContext();

  return (
    <div className="flex items-center space-x-3 py-2">
      <button
        onClick={() => editable && onToggle(subtask.id)}
        disabled={!editable}
        className={`
          mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors
          ${
            subtask.completed
              ? "bg-green-500 border-green-500"
              : darkMode
              ? "border-gray-500"
              : "border-gray-300"
          }
          ${
            editable && !subtask.completed
              ? darkMode
                ? "hover:border-green-400"
                : "hover:border-green-500"
              : ""
          }
        `}
        aria-label={
          subtask.completed ? "Mark as incomplete" : "Mark as complete"
        }
      >
        {subtask.completed && (
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
      <span
        className={`
        ${
          subtask.completed
            ? darkMode
              ? "text-gray-400 line-through"
              : "text-gray-500 line-through"
            : darkMode
            ? "text-gray-300"
            : "text-gray-700"
        }
      `}
      >
        {subtask.title}
      </span>
    </div>
  );
};

const SubtaskList = ({ subtasks, onToggleSubtask, editable = true }) => {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      {subtasks.map((subtask) => (
        <SubtaskItem
          key={subtask.id}
          subtask={subtask}
          onToggle={onToggleSubtask}
          editable={editable}
        />
      ))}
    </div>
  );
};

export default SubtaskList;
