import React, {useContext} from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Components/contexts/UserContext';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user, loading} = useContext(AuthContext)

    if (loading) {
        return <div style={{textAlign: 'center', color: 'red'}}><h1>Loading...</h1></div>
    }

    if (user && user.uid) {
        return children;
    }
    return <Navigate to='/login' state={{from: location }} replace></Navigate>
};

export default PrivateRoute;