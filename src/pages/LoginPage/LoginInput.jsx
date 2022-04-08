import React, {  } from 'react'
import InputLabel from '../../components/InputLabel'

function LoginInput({email, password, setMail, setPassword}) {
  return (
   <>
   <InputLabel
   value={email}
   setValue={setMail}
   label= 'Email'
   type='text'
   placeholder='Enter email address'
    />
 <InputLabel
   value={password}
   setValue={setPassword}
   label= 'Password'
   type='text'
   placeholder='Enter Password'
    />
   </>
  )
}

export default LoginInput