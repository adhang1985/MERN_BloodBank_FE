import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import API from '../../services/API';
import { getCurrentUser } from '../../redux/features/authActions';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {

    const dispatch = useDispatch();

    const getUser = async() => {
        try {
            const { data } = await API.get("/auth/currentUser");
            if (data?.success) {
                dispatch(getCurrentUser(data));
            }

        } catch (error) {
            localStorage.clear();
            console.log(error);
        }
    }

   
    useEffect(() => {
        getUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    if(localStorage.getItem('token')){
        return children
    }
    else{
        return <Navigate to={'/login'}></Navigate>
    }

}

export default ProtectedRoute