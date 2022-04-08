import { Typography } from '@mui/material'
import React, {useState, useEffect} from 'react'
import AuthBox from '../../components/AuthBox/AuthBox'
import RegisterInputs from './RegisterInputs'
import RegisterPageFooter from './RegisterPageFooter'
import {validateRegister} from "../../utils/validate"
const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userName, setUserName ] = useState("")
  const [isFormValid, setIsFormValid] = useState(false)

  const handelRegister = ( ) => {
    console.log(email, password, userName)
  } 
  useEffect(()=> {
    setIsFormValid(validateRegister({email, password, userName}))
  },[email, password, userName, isFormValid])

  return (
    <AuthBox>
      <Typography variant='h5' sx={{ color: 'white' }} >
        Create an account
      </Typography>
      <RegisterInputs 
      email={email} 
      setEmail={setEmail} 
      password={password} 
      setPassword={setPassword}
      userName={userName} 
      setUserName={setUserName} 
      isFormValid={isFormValid}
      setIsFormValid={setIsFormValid}
      />

      <RegisterPageFooter 
      handleRegister={handelRegister}
      isFormValid={isFormValid}
      setIsFormValid={setIsFormValid}
      />  
    </AuthBox>
  )
}

export default Register