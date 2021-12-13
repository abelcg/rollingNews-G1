import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import AdminNav from '../common/AdminNav'


const AdminPage = () => {
    return (
        <Router>
        <AdminNav></AdminNav>
        </Router>
    );
};

export default AdminPage;