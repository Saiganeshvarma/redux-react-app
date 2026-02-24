import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from "react-redux"
import { loginApi } from '../Slices/AuthSlice'
import { useNavigate } from 'react-router'

const AuthUi = () => {
    var [username,setUsername] = useState("")
    var [password,setPassword] = useState("")
    var navigate = useNavigate()
    var {user,loading,error} = useSelector((state)=>state.auth)
    console.log(user);
    var dispatch = useDispatch()

    function handleLogin(){
        dispatch(loginApi({username,password}))
        
    }
    useEffect(()=>{
        if(user){
            navigate("/products")
        }else{
            
        }
    },[user])

    

  return (
    <div>
        <label htmlFor="">Enter user Name</label>
        <input value={username} onChange={(e)=>{setUsername(e.target.value)}} type="text" />
        <label htmlFor="">Enter Password</label>
        <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" />
        <button onClick={()=>handleLogin()}>login</button>

    </div>
  )
}

export default AuthUi