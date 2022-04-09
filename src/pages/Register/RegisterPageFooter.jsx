import React from 'react'
import ButtonAuth from '../../components/Buttons/ButtonAuth'
import RedirectInfo from '../../components/RedirectInfo'
import { useHistory } from 'react-router-dom'
import {Tooltip} from '@mui/material'
function RegisterPageFooter({isFormValid, handleRegister}) {
    const history = useHistory()
const handlePushtoLogin = () => {
  history.push('/login')
}
const getFormNotValidMessage = ()=> {
  return 'Enter valid Email & Password'
}
const getFormValidMessage = ()=> {
    return 'Press to Register'
}
  return (
    
    <>   
    <Tooltip title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}>  
     <div>
        <ButtonAuth label="Register" additionalStyles={{marginTop: '40px'}} disabled={!isFormValid} onClick={handleRegister} />
    </div>
    </Tooltip>
    <RedirectInfo 
    text='Already have an account? ' 
    redirectText='Login'
    additionalStyles={{marginTop : '7px'}}
    redirectHandler={handlePushtoLogin}
    />
    </>

  )
}

export default RegisterPageFooter