import React, {useState} from 'react'
import ButtonAuth from '../../../components/Buttons/ButtonAuth'
import AddFriendDialog from './AddFriendDialog'

const additionalStyles = {
    marginTop: '10px',
    marginLeft : '5px',
    width: '80%',
    height: '30px',
    background: '#3ba55d'
}


function AddFriendButton() {
const [isDialogOpen, setIsDialogOpen] = useState(false)

const handleOpenAddFriendDialog = ()=>{
  setIsDialogOpen(true)
}

const handleCloseAddFriendDialog = () => {
  setIsDialogOpen(false)
}

  return (
    <>
        <ButtonAuth  additionalStyles={additionalStyles} label='Add Friend' onClick={handleOpenAddFriendDialog} />
        
        <AddFriendDialog  isDialogOpen={isDialogOpen} closeDialogHandler={handleCloseAddFriendDialog} />
    </>
  )
}

export default AddFriendButton