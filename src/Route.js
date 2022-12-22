import React from 'react';
import { Navigate } from 'react-router-dom';

export function PrivateRoute({ children }) {
  const token =!!localStorage.getItem("Access Token");

  return token ? children : <Navigate to="/login" />;
}

export function PublicRoute({children}){
  const token =!!localStorage.getItem("Access Token");

  return token ?  <Navigate to="/home" /> : children ;
}