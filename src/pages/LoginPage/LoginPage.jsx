import React, {useEffect, useState} from 'react'
import AuthBox from '../../components/AuthBox/AuthBox'
import PageHeader from './PageHeader'
import LoginInput from './LoginInput'
import LoginPageFooter from './LoginPageFooter'
import { validateLoginForm } from '../../utils/validate'
import { connect } from 'react-redux'
import { getActions } from '../../redux/actions/authAction'
import { useHistory } from 'react-router-dom'

const LoginPage = ({loginAction}) => {
  const [email, setMail] = useState("")
  const [password, setPassword] = useState("")
  const [isFormValid, setIsFormValid] = useState(false)
  const history = useHistory()
  useEffect(()=>{
    setIsFormValid(validateLoginForm({email, password}))
  }, [email, password, setIsFormValid])

  const handleLogin = () => {
    const userDetails={email, password, }
    loginAction(userDetails, history)
  }
  return (
      <AuthBox  >
        <PageHeader /> 
        <LoginInput email={email} setMail={setMail} password={password} setPassword={setPassword}/>
        <LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogin}   />
      </AuthBox> 
  )
}
const mapActionsToProp = (dispatch) => {
 return {
   ...getActions(dispatch)
 } 
}

export default connect(null, mapActionsToProp)(LoginPage)