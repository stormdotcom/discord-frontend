import { Dialog, DialogActions, DialogContent,  DialogTitle, Typography} from '@mui/material'
import React, {useEffect, useState} from 'react'
import { validateEmail} from '../../../utils/validate'
import InputLabel from '../../../components/InputLabel' 
import ButtonAuth from '../../../components/Buttons/ButtonAuth'
import { connect } from 'react-redux';
import { getActions } from '../../../redux/actions/friendsAction'
function AddFriendDialog({
    isDialogOpen,
    closeDialogHandler,
    sendFriendInvitation = ()=> {}
}) {
  const [mail, setMail] = useState("")
  const [isFormValid, setIsFormValid] = useState("")

   const handleSendInvitation = (invitation)=> {
    sendFriendInvitation({
      targetMailAddress:mail,
    }, handleCloseDialog)
   }  

   const handleCloseDialog = () => {
     
        closeDialogHandler();
        setMail('')
   }

useEffect(()=> {
  setIsFormValid(validateEmail(mail))
},[mail, setIsFormValid ])

  return (
    <div>
      <Dialog
      open={isDialogOpen}
      onClose={handleCloseDialog}
      >
    <DialogTitle>
       <Typography  sx={{fontWeight: 600}}>Invite a Friend </Typography> 
       </DialogTitle>
       <DialogContent>
         <Typography variant='body2'>
           Enter Email address of friend which you would like to invite
         </Typography>
         <InputLabel 
         label='Email'
          type='text'
          value={mail}
          setValue={setMail}
          placeholder='Enter Mail Address'

         />
       </DialogContent>

      <DialogActions>
        <ButtonAuth 
        onClick={handleSendInvitation}
        disabled={!isFormValid}
        label='Send'
        additionalStyles={{
          marginLeft: '15px',
          marginRight: '15px',
          marginBottom: '10px',

        }}
        
        >

        </ButtonAuth>
      </DialogActions>
      </Dialog>
    </div>
  )
}
const mapActionsToProp = (dispatch)=> {
  return {
    ...getActions(dispatch),
  }
}

export default connect(null, mapActionsToProp)(AddFriendDialog)