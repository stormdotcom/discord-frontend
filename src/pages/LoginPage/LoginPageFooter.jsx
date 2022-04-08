import React from 'react'
import ButtonAuth from '../../components/Buttons/ButtonAuth'
import RedirectInfo from '../../components/RedirectInfo'
import { useHistory } from 'react-router-dom'
import {Tooltip} from '@mui/material'
function LoginPageFooter({handleLogin, isFormValid}) {
const history = useHistory()
const handlePushtoRegister = () => {
  history.push('/register')
}
const getFormNotValidMessage = ()=> {
  return 'Enter valid Email & Password'
}
const getFormValidMessage = ()=> {
    return 'Press to login'
}

  return (
    <>   
    <Tooltip title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}>  
     <div>
        <ButtonAuth label="Login" additionalStyles={{marginTop: '40px'}} disabled={!isFormValid} onClick={handleLogin} />
    </div>
    </Tooltip>
    <RedirectInfo 
    text='Need an account? ' 
    redirectText='Create an account'
    additionalStyles={{marginTop : '7px'}}
    redirectHandler={handlePushtoRegister}
    />
    </>

  )
}

export default LoginPageFooter