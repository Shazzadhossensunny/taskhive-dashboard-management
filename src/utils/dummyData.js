export const dummyTasks = [
  {
    id: 1,
    title: "Complete project proposal",
    description: "Write and submit the Q2 project proposal document",
    dueDate: "2024-12-20",
    completed: false,
    assignedUsers: ["Alex Johnson", "Sarah Kim"],
    subtasks: [
      { id: 1, title: "Research requirements", completed: true },
      { id: 2, title: "Draft proposal", completed: false },
      { id: 3, title: "Review with team", completed: false },
    ],
    comments: [
      {
        id: 1,
        user: "Sarah Kim",
        text: "I've started the research phase",
        timestamp: "2024-12-15T10:30:00Z",
      },
      {
        id: 2,
        user: "Alex Johnson",
        text: "Great! Let me know if you need any help",
        timestamp: "2024-12-15T11:00:00Z",
      },
    ],
  },
  {
    id: 2,
    title: "Update website design",
    description: "Implement new brand guidelines on homepage",
    dueDate: "2024-12-18",
    completed: true,
    assignedUsers: ["Mike Chen"],
    subtasks: [
      { id: 1, title: "Update color scheme", completed: true },
      { id: 2, title: "Replace images", completed: true },
    ],
    comments: [],
  },
  {
    id: 3,
    title: "Team meeting preparation",
    description: "Prepare agenda and materials for weekly team sync",
    dueDate: "2024-12-17",
    completed: false,
    assignedUsers: ["Alex Johnson"],
    subtasks: [
      { id: 1, title: "Create agenda", completed: false },
      { id: 2, title: "Gather reports", completed: false },
    ],
    comments: [],
  },
];
