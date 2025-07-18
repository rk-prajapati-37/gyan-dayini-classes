# Gyan Dayini Classes

Welcome to the Gyan Dayini Classes project! This project is designed to manage student, parent, and teacher details, featuring a comprehensive login system and various dashboards for each user role.

## Project Structure

The project is divided into two main parts: **frontend** and **backend**.

### Frontend

The frontend is built using React and TypeScript. It includes the following key components:

- **Login**: A login form for user authentication.
- **Dashboards**: Separate dashboards for students, parents, and teachers to manage their respective details.
- **Pages**: Various pages for home, student management, parent management, and teacher management.

### Backend

The backend is built using Node.js and TypeScript with Express. It includes:

- **Controllers**: 
  - `authController.ts`: Handles user authentication (login and registration).
  - `studentController.ts`: Manages student-related functionalities.
  - `parentController.ts`: Handles parent-related operations.
  - `teacherController.ts`: Manages teacher functionalities.

- **Models**: 
  - `student.ts`: Defines the Student model.
  - `parent.ts`: Defines the Parent model.
  - `teacher.ts`: Defines the Teacher model.

- **Routes**: 
  - `authRoutes.ts`: Sets up authentication routes.
  - `studentRoutes.ts`: Sets up student-related routes.
  - `parentRoutes.ts`: Sets up parent-related routes.
  - `teacherRoutes.ts`: Sets up teacher-related routes.

- **Middleware**: 
  - `authMiddleware.ts`: Middleware for authenticating users based on their roles.

- **App Initialization**: 
  - `app.ts`: Initializes the Express application and connects routes.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- TypeScript

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory and install dependencies:
   ```
   cd backend
   npm install
   ```

3. Navigate to the frontend directory and install dependencies:
   ```
   cd frontend
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```
   cd backend
   npm start
   ```

2. Start the frontend application:
   ```
   cd frontend
   npm start
   ```

## Features

- User authentication for students, parents, and teachers.
- Dashboards tailored for each user role.
- Management of student, parent, and teacher details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.