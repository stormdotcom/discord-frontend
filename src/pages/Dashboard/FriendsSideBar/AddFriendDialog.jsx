import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography} from '@mui/material'
import React, {useEffect, useState} from 'react'
import { validateEmail} from '../../../utils/validate'
import InputLabel from '../../../components/InputLabel' 
import ButtonAuth from '../../../components/Buttons/ButtonAuth'

function AddFriendDialog({
    isDialogOpen,
    closeDialogHandler,
    sendFriendInvitation = ()=> {}
}) {
  const [mail, setMail] = useState("")
  const [isFormValid, setIsFormValid] = useState("")

   const handleSendInvitation = (invitation)=> {
    // to server
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
       <Typography variant='h5' sx={{fontWeight: 600}}>Invite a Friend </Typography> 
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

export default AddFriendDialog