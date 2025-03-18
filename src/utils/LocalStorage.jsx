const employees = [
  {
    "id": 1,
    "firstName": "Aarav",
    "email": "emp@me.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 0,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Design a prototype",
        "taskDescription": "Create a functional prototype for the new product design.",
        "taskDate": "2024-10-20",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Client meeting",
        "taskDescription": "Attend the meeting with the client and discuss the product features.",
        "taskDate": "2024-09-28",
        "category": "Meetings"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Write documentation",
        "taskDescription": "Complete technical documentation for the design process.",
        "taskDate": "2024-11-10",
        "category": "Documentation"
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Vivan",
    "email": "emp2@me.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Develop API",
        "taskDescription": "Develop the new API for the payment system.",
        "taskDate": "2024-10-25",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Bug Fixes",
        "taskDescription": "Fix the bugs reported in the backend code.",
        "taskDate": "2024-09-30",
        "category": "Maintenance"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Refactor Code",
        "taskDescription": "Refactor the legacy code in the billing system.",
        "taskDate": "2024-10-05",
        "category": "Refactoring"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Optimize Database",
        "taskDescription": "Optimize the database queries for better performance.",
        "taskDate": "2024-11-01",
        "category": "Database"
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Ananya",
    "email": "emp3@me.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 2,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Content Creation",
        "taskDescription": "Create content for the new blog series.",
        "taskDate": "2024-10-22",
        "category": "Content"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Market Analysis",
        "taskDescription": "Conduct market analysis for the new product launch.",
        "taskDate": "2024-10-01",
        "category": "Research"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "SEO Optimization",
        "taskDescription": "Optimize the website for better search engine rankings.",
        "taskDate": "2024-09-29",
        "category": "SEO"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Email Campaign",
        "taskDescription": "Design and launch a new email campaign for the subscribers.",
        "taskDate": "2024-11-15",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Graphic Design",
        "taskDescription": "Create graphics for the promotional material.",
        "taskDate": "2024-10-28",
        "category": "Design"
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Reyansh",
    "email": "emp4@me.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 0,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Sales Pitch",
        "taskDescription": "Prepare a sales pitch for the potential clients.",
        "taskDate": "2024-10-27",
        "category": "Sales"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Lead Generation",
        "taskDescription": "Identify new leads from the database and outreach.",
        "taskDate": "2024-10-02",
        "category": "Leads"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Proposal Writing",
        "taskDescription": "Write a detailed proposal for the new project.",
        "taskDate": "2024-11-20",
        "category": "Writing"
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Diya",
    "email": "emp5@me.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 0,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Customer Support",
        "taskDescription": "Assist customers with inquiries and troubleshoot issues.",
        "taskDate": "2024-10-21",
        "category": "Support"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "System Upgrade",
        "taskDescription": "Oversee the system upgrade to the latest version.",
        "taskDate": "2024-09-25",
        "category": "IT"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Inventory Management",
        "taskDescription": "Manage the inventory records for the office supplies.",
        "taskDate": "2024-10-05",
        "category": "Management"
      }
    ]
  }
];


  
const admin = [{
  "id": 1,
  "firstName": "Avi",
  "email": "admin@me.com",
  "password": "123"
}]


export const setLocalStorage = ()=>{
  localStorage.setItem('employees',JSON.stringify(employees))
  localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = () =>{
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  
  // Return the values as an object
  return { employees: employees || [], admin: admin || [] }; // Provide default values if null
}

