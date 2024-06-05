// import React from 'react';
// import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
// import './App.css'
// import Register from './Auth/Register';
// import Login from './Auth/Login';
// import Dashboard from './Pages/Dashboard';
// import {useAuth} from './Contexts/AuthContext';

// const App = () =>{

//   const {isAuthenticated} = useAuth();


//   return <Router>
//     <Routes>

//       <Route 
//         path = '/' 
//         element={
//           !isAuthenticated ? <Register/> : <Navigate to="./dashboard"/>
//         } 
//       />

//       <Route
//         path = '/login'
//         element={
//           !isAuthenticated ? <Login/> : <Navigate to="./dashboard"/>
//         }  
//       /> 

//       <Route 
//         path = '/dashboard' 
//         element={
//           !isAuthenticated ? <Dashboard/> : <Navigate to="./login"/>
//         } 
//       /> 

//     </Routes>
    
//   </Router>
// }
// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Register from './Auth/Register';
import Login from './Auth/Login';
import Dashboard from './Pages/Dashboard';
import { useAuth } from './Contexts/AuthContext';

const App = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/register" />
          }
        />
        <Route
          path="/register"
          element={
            isAuthenticated ? <Navigate to="/dashboard" /> : <Register />
          }
        />
        <Route
          path="/login"
          element={
            isAuthenticated ? <Navigate to="/dashboard" /> : <Login />
          }
        />
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? <Dashboard /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

