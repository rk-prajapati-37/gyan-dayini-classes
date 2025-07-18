import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Students from './pages/Students';
import Parents from './pages/Parents';
import Teachers from './pages/Teachers';
import Login from './components/Login';
import Navbar from './components/common/Navbar';
import StudentDashboard from './components/Dashboard/StudentDashboard';
import ParentDashboard from './components/Dashboard/ParentDashboard';
import TeacherDashboard from './components/Dashboard/TeacherDashboard';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/students" component={Students} />
        <Route path="/parents" component={Parents} />
        <Route path="/teachers" component={Teachers} />
        <Route path="/student-dashboard" component={StudentDashboard} />
        <Route path="/parent-dashboard" component={ParentDashboard} />
        <Route path="/teacher-dashboard" component={TeacherDashboard} />
      </Switch>
    </Router>
  );
};

export default App;