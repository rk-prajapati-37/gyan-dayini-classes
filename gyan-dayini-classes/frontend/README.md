# Gyan Dayini Classes Frontend

This is the frontend part of the Gyan Dayini Classes project, which is a web application designed to manage student, parent, and teacher details. The application includes a login system and various dashboards for different user roles.

## Project Structure

The frontend is structured as follows:

```
frontend
├── public
│   └── index.html          # Main HTML file for the React application
├── src
│   ├── components          # Contains reusable components
│   │   ├── Dashboard       # Contains dashboard components for different user roles
│   │   │   ├── ParentDashboard.tsx
│   │   │   ├── StudentDashboard.tsx
│   │   │   └── TeacherDashboard.tsx
│   │   ├── common          # Common components used throughout the application
│   │   │   └── Navbar.tsx
│   │   └── Login.tsx       # Login form component
│   ├── pages               # Contains page components
│   │   ├── Home.tsx
│   │   ├── Parents.tsx
│   │   ├── Students.tsx
│   │   └── Teachers.tsx
│   ├── App.tsx             # Main application component
│   ├── index.tsx           # Entry point of the React application
│   └── index.css           # Global styles for the application
├── package.json             # Lists dependencies and scripts for the frontend
└── tsconfig.json           # TypeScript configuration options for the frontend
```

## Getting Started

To get started with the frontend application, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd gyan-dayini-classes/frontend
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the application**:
   ```
   npm start
   ```

The application will be available at `http://localhost:3000`.

## Features

- **User Authentication**: Login system for students, parents, and teachers.
- **Dashboards**: Separate dashboards for students, parents, and teachers to manage their respective details.
- **Responsive Design**: The application is designed to be responsive and user-friendly.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License.