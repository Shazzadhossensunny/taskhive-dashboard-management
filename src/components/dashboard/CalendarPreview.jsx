// src/components/dashboard/CalendarPreview.jsx
import React from "react";
import { useAppContext } from "../../context/AppContext";

const CalendarPreview = () => {
  const { darkMode } = useAppContext();

  const events = [
    { id: 1, title: "Team Meeting", time: "Today, 2:00 PM", color: "blue" },
    {
      id: 2,
      title: "Project Review",
      time: "Tomorrow, 10:00 AM",
      color: "green",
    },
    { id: 3, title: "Client Call", time: "Dec 20, 3:00 PM", color: "purple" },
  ];

  return (
    <div
      className={`border rounded-xl p-6 ${
        darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
      }`}
    >
      <div className="flex items-center justify-between mb-6">
        <h2
          className={`text-xl font-bold ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Upcoming Events
        </h2>
        <button
          className={`text-sm cursor-pointer ${
            darkMode
              ? "text-blue-400 hover:text-blue-300"
              : "text-blue-600 hover:text-blue-700"
          }`}
        >
          View All
        </button>
      </div>

      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event.id}
            className={`p-3 rounded-lg border ${
              darkMode
                ? event.color === "blue"
                  ? "bg-blue-900/30 border-blue-700"
                  : event.color === "green"
                  ? "bg-green-900/30 border-green-700"
                  : "bg-purple-900/30 border-purple-700"
                : event.color === "blue"
                ? "bg-blue-50 border-blue-200"
                : event.color === "green"
                ? "bg-green-50 border-green-200"
                : "bg-purple-50 border-purple-200"
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p
                  className={`font-medium ${
                    darkMode
                      ? event.color === "blue"
                        ? "text-blue-300"
                        : event.color === "green"
                        ? "text-green-300"
                        : "text-purple-300"
                      : event.color === "blue"
                      ? "text-blue-700"
                      : event.color === "green"
                      ? "text-green-700"
                      : "text-purple-700"
                  }`}
                >
                  {event.title}
                </p>
                <p
                  className={`text-sm ${
                    darkMode
                      ? event.color === "blue"
                        ? "text-blue-400"
                        : event.color === "green"
                        ? "text-green-400"
                        : "text-purple-400"
                      : event.color === "blue"
                      ? "text-blue-600"
                      : event.color === "green"
                      ? "text-green-600"
                      : "text-purple-600"
                  }`}
                >
                  {event.time}
                </p>
              </div>
              <div
                className={`w-3 h-3 rounded-full ${
                  darkMode
                    ? event.color === "blue"
                      ? "bg-blue-400"
                      : event.color === "green"
                      ? "bg-green-400"
                      : "bg-purple-400"
                    : event.color === "blue"
                    ? "bg-blue-500"
                    : event.color === "green"
                    ? "bg-green-500"
                    : "bg-purple-500"
                }`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarPreview;
