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

  const getColorClasses = (color) => {
    if (darkMode) {
      return {
        bg: `bg-${color}-900/30 border-${color}-700`,
        text: `text-${color}-300`,
        time: `text-${color}-400`,
        dot: `bg-${color}-400`,
      };
    }
    return {
      bg: `bg-${color}-50 border-${color}-200`,
      text: `text-${color}-700`,
      time: `text-${color}-600`,
      dot: `bg-${color}-500`,
    };
  };

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
          className={`text-sm ${
            darkMode
              ? "text-blue-400 hover:text-blue-300"
              : "text-blue-600 hover:text-blue-700"
          }`}
        >
          View All
        </button>
      </div>

      <div className="space-y-4">
        {events.map((event) => {
          const colorClasses = getColorClasses(event.color);
          return (
            <div
              key={event.id}
              className={`p-3 rounded-lg border ${colorClasses.bg}`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className={`font-medium ${colorClasses.text}`}>
                    {event.title}
                  </p>
                  <p className={`text-sm ${colorClasses.time}`}>{event.time}</p>
                </div>
                <div
                  className={`w-3 h-3 rounded-full ${colorClasses.dot}`}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarPreview;
