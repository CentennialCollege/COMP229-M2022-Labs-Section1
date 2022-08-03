import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthService from '../services/auth-service'; 

export default function AuthGuard({ children}: {children: JSX.Element})
{
    let auth = AuthService.getCurrentUser();
    let location = useLocation(); // alias

    if(!auth.user)
    {
        return <Navigate to="/login" state={{ from: location }} replace />;   
    }

    return children;
}