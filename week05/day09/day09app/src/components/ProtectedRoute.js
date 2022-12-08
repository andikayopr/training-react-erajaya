import React from 'react'
import { useLocation, Navigate } from "react-router-dom"

function ProtectedRoute({children}) {
    let location = useLocation()

    if (!localStorage.getItem("token")) {
        return <Navigate to="/login" state={{ from: location}} />
    }

    return children
}

export default ProtectedRoute