// import React, { useContext } from "react";
// import { AppContext } from "../../context/AppContext";
// import { CheckSquare, Clock, Users } from "lucide-react";

// function TaskCard({ task, onToggleComplete, onOpenDetail }) {
//   const { darkMode } = useContext(AppContext);

//   const isOverdue = !task.completed && new Date(task.dueDate) < new Date();

//   return (
//     <div
//       className={`
//         p-4 rounded-lg border cursor-pointer transition-all duration-200
//         ${
//           task.completed
//             ? darkMode
//               ? "bg-gray-700/50 border-gray-600"
//               : "bg-gray-50 border-gray-200"
//             : darkMode
//             ? "bg-gray-700 border-gray-600 hover:bg-gray-600"
//             : "bg-white border-gray-200 hover:shadow-md"
//         }
//         ${isOverdue ? "border-red-300 dark:border-red-700" : ""}
//       `}
//       onClick={onOpenDetail}
//     >
//       <div className="flex items-start space-x-3">
//         <button
//           onClick={(e) => {
//             e.stopPropagation();
//             onToggleComplete();
//           }}
//           className={`
//             mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors duration-200
//             ${
//               task.completed
//                 ? "bg-green-500 border-green-500"
//                 : darkMode
//                 ? "border-gray-500 hover:border-green-400"
//                 : "border-gray-300 hover:border-green-500"
//             }
//           `}
//         >
//           {task.completed && <CheckSquare className="text-white" size={12} />}
//         </button>

//         <div className="flex-1 min-w-0">
//           <h3
//             className={`
//             font-medium transition-all duration-200
//             ${
//               task.completed
//                 ? darkMode
//                   ? "text-gray-400 line-through"
//                   : "text-gray-500 line-through"
//                 : darkMode
//                 ? "text-white"
//                 : "text-gray-900"
//             }
//           `}
//           >
//             {task.title}
//           </h3>
//           <p
//             className={`text-sm mt-1 ${
//               darkMode ? "text-gray-400" : "text-gray-600"
//             }`}
//           >
//             {task.description}
//           </p>

//           <div className="flex items-center space-x-4 mt-2">
//             <div className="flex items-center space-x-1">
//               <Clock
//                 size={14}
//                 className={`${
//                   isOverdue
//                     ? "text-red-500"
//                     : darkMode
//                     ? "text-gray-500"
//                     : "text-gray-400"
//                 }`}
//               />
//               <span
//                 className={`text-xs ${
//                   isOverdue
//                     ? "text-red-500 font-medium"
//                     : darkMode
//                     ? "text-gray-400"
//                     : "text-gray-500"
//                 }`}
//               >
//                 Due {new Date(task.dueDate).toLocaleDateString()}
//                 {isOverdue && " (Overdue)"}
//               </span>
//             </div>

//             <div className="flex items-center space-x-1">
//               <Users
//                 size={14}
//                 className={darkMode ? "text-gray-500" : "text-gray-400"}
//               />
//               <span
//                 className={`text-xs ${
//                   darkMode ? "text-gray-400" : "text-gray-500"
//                 }`}
//               >
//                 {task.assignedUsers.length} assigned
//               </span>
//             </div>

//             {task.subtasks && task.subtasks.length > 0 && (
//               <div className="flex items-center space-x-1">
//                 <CheckSquare
//                   size={14}
//                   className={darkMode ? "text-gray-500" : "text-gray-400"}
//                 />
//                 <span
//                   className={`text-xs ${
//                     darkMode ? "text-gray-400" : "text-gray-500"
//                   }`}
//                 >
//                   {task.subtasks.filter((s) => s.completed).length}/
//                   {task.subtasks.length} subtasks
//                 </span>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TaskCard;
