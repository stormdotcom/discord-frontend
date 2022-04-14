import React from 'react'
import InputLabel from '../../components/InputLabel'

function RegisterInputs(props) {
  const {email, password, username, setEmail, setPassword, setUserName} = props
  return (
    <>
    <InputLabel
     value={email}
     setValue={setEmail}
     label="Email"
     placeholder="Enter your Email"
    />
    <InputLabel
     value={password}
     setValue={setPassword}
     label="Password"
     placeholder="Enter Password"
    />
     <InputLabel
     value={username}
     setValue={setUserName}
     label="Username"
     placeholder="Enter Username"
    />
    </>
  )
}

export default RegisterInputs