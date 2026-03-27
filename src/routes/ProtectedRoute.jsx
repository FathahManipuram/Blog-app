import React, { Children } from 'react'
import { useAuth } from '../context/AuthContex'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
	const {user}= useAuth()
	console.log("user",user)

	if(!user) {
		return <Navigate to="/login" replace />
	}
  return children
}

export default ProtectedRoute
