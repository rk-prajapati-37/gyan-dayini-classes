# Gyan Dayini Classes Backend

## Overview
This backend service is designed to manage the functionalities of the Gyan Dayini Classes application. It includes features for managing student, parent, and teacher details, along with a robust authentication system.

## Technologies Used
- Node.js
- Express.js
- TypeScript
- MongoDB (or any other database of choice)

## Features
- User authentication for students, parents, and teachers.
- Management of student profiles and details.
- Management of parent profiles and communication.
- Management of teacher profiles and functionalities.
- Role-based access control.

## Getting Started

### Prerequisites
- Node.js installed on your machine.
- MongoDB (or any other database) set up and running.

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the backend directory:
   ```
   cd gyan-dayini-classes/backend
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Configuration
- Update the database connection settings in the configuration file (if applicable).
- Set up environment variables for sensitive information (e.g., JWT secret, database URI).

### Running the Application
To start the backend server, run:
```
npm start
```
The server will be running on `http://localhost:5000` (or any specified port).

### API Endpoints
- **Authentication**
  - `POST /api/auth/login`: Login for students, parents, and teachers.
  - `POST /api/auth/register`: Register new users.

- **Students**
  - `GET /api/students`: Retrieve all students.
  - `GET /api/students/:id`: Retrieve a specific student by ID.
  - `PUT /api/students/:id`: Update student details.

- **Parents**
  - `GET /api/parents`: Retrieve all parents.
  - `GET /api/parents/:id`: Retrieve a specific parent by ID.
  - `PUT /api/parents/:id`: Update parent details.

- **Teachers**
  - `GET /api/teachers`: Retrieve all teachers.
  - `GET /api/teachers/:id`: Retrieve a specific teacher by ID.
  - `PUT /api/teachers/:id`: Update teacher details.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.