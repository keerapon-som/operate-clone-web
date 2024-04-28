import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Change the import statement here
import Dashboard from './pages/dashboard/mainDashboard';
import Processes from './pages/processes/mainProcess';


const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" Component={Dashboard} /> {/* Change Component to component */}
                <Route path="/dashboard" Component={Dashboard} /> {/* Change Component to component */}
                <Route path="/processes" Component={Processes} /> {/* Add element prop here */}
            </Routes>
        </Router>
    );
}

export default AppRoutes;
