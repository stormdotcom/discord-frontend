import React, {useEffect, useState} from 'react'
import AuthBox from '../../components/AuthBox/AuthBox'
import PageHeader from './PageHeader'
import LoginInput from './LoginInput'
import LoginPageFooter from './LoginPageFooter'
import { validateLoginForm } from '../../utils/validate'
const LoginPage = () => {
  const [email, setMail] = useState("")
  const [password, setPassword] = useState("")
  const [isFormValid, setIsFormValid] = useState(false)
  useEffect(()=>{
    setIsFormValid(validateLoginForm({email, password}))
    console.log(validateLoginForm({email, password}))
    // setIsFormValid(validateLoginForm({email, password}))
  }, [email, password, setIsFormValid])

  const handleLogin = () => {

  }
  return (
      <AuthBox  >
        <PageHeader /> 
        <LoginInput email={email} setMail={setMail} password={password} setPassword={setPassword}/>
        <LoginPageFooter isFormValid={isFormValid} handleLogin={setIsFormValid}  />
      </AuthBox> 
  )
}

export default LoginPage