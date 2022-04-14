import { Typography } from '@mui/material'
import React, {useState, useEffect} from 'react'
import AuthBox from '../../components/AuthBox/AuthBox'
import RegisterInputs from './RegisterInputs'
import RegisterPageFooter from './RegisterPageFooter'
import {validateRegister} from "../../utils/validate"
import { connect } from 'react-redux'
import { getActions } from '../../redux/actions/authAction'
import { useHistory } from 'react-router-dom'


const Register = ({registerAction}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUserName ] = useState("")
  const [isFormValid, setIsFormValid] = useState(false)

  const history = useHistory()

  const handelRegister = ( ) => {
    const userDetails = {email, password, username};
    registerAction(userDetails, history)
  } 
  useEffect(()=> {
    setIsFormValid(validateRegister({email, password, username}))
  },[email, password, username, isFormValid])

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
      username={username} 
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
const mapActionsToProp = (dispatch) => {
  return {
    ...getActions(dispatch)
  } 
 }

export default connect(null, mapActionsToProp)(Register)