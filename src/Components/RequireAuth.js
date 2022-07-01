import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
const RequireAuth = ({ children }) => {
    const users = localStorage.getItem('user')
    let location = useLocation();
    if (!users) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    return children
};

export default RequireAuth;