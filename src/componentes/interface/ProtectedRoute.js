
import React from "react"
import { Navigate } from "react-router-dom"
import { UseContext } from "../../useContext"

const ProtectedRoute = ({children}) => {
  const { login } = React.useContext(UseContext)
  
  return login ? children : <Navigate to='/login' />
}

export default ProtectedRoute