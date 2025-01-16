'use client'
import HookForm from '@/components/hook-form/HookForm'

import {showLogin} from '@/components/hook-form/HookForm';
import { CircularProgress } from "@mui/material";
import useCheckAuth from "@/hooks/useCheckAuth";
import { useState } from 'react';


function Login() {
  const [isOpenLogin, setIsOpenLogin] = useState(false)

  const showLogin = () => {
    setIsOpenLogin(!isOpenLogin)
  }
  
  const {status} = useCheckAuth()
  if (status === "checking") {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#101011", color: "#f59e0b"}}>
        <CircularProgress />
      </div>
    );
  }
  return (
    <div>
      <HookForm showLogin={showLogin} />
    </div>
  )
}

export default Login

 