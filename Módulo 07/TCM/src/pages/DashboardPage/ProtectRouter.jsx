import { useContext } from "react"
import { TodoContext } from "../../Providers/TodoContext"
import { Navigate, } from 'react-router-dom'
import { Dashboard } from './Dashboard';

// import { Outlet } from "react-router-dom"

export const ProtectRoute = () =>{
  const { user }= useContext(TodoContext)
  // console.log(user.name)
  return user? <Navigate to="/login"/> : <Dashboard/>
  // return <Dashboard />;
}

