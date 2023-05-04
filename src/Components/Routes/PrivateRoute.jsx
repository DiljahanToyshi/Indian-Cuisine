import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner';

const PrivateRoute = ({children}) => {
    const {user,loading} =useContext(AuthContext);
    const location = useLocation();
    // console.log(location)
    if(loading){
        return <LoadingSpinner></LoadingSpinner>
    }
    if(user){
        return children;
    }
    return (
      <Navigate to='/login' state ={{from:location}} replace></Navigate>
    );
};

export default PrivateRoute;