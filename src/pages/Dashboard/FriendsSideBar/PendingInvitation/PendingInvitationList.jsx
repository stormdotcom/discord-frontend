import {styled} from '@mui/system'
import React from 'react'
import PendingInvitationListItem from './PendingInvitationListItem'

const MainContainer = styled('div')({
    height: '22%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems : 'center',
    overFlow : 'auto'
})

const DUMMY_INVITATION = [
  {id:1, senderId: {username: "Adharsh", mail:"adharsh@gmail.com",  } },
  {id:2, senderId: {username: "Rakesh", mail:"rakesh@gmail.com",  } },
  {id:3, senderId: {username: "Gokul", mail:"gokul@gmail.com",  } }
]

function PendingInvitationList() {
  return (
    <MainContainer>
      {DUMMY_INVITATION.map((ele)=> (
        <PendingInvitationListItem 
        key={ele.id}
        id={ele.id}
        username={ele.senderId.username}
        mail={ele.senderId.mail}
        />
      ))}
    </MainContainer>
  )
}

export default PendingInvitationList