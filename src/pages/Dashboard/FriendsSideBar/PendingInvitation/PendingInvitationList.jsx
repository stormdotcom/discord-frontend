import { styled } from '@mui/system'
import React from 'react'
import PendingInvitationListItem from './PendingInvitationListItem'
import { connect } from 'react-redux'
const MainContainer = styled('div')({
  height: '22%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overFlow: 'auto'
})


function PendingInvitationList({ pendingFriendsInvitations }) {
  console.log(pendingFriendsInvitations)
  return (
    <MainContainer>
      {pendingFriendsInvitations.map((ele, i) => (
        <div key={i}>
          <PendingInvitationListItem
            key={ele._id}
            id={ele._id}
            username={ele.senderId?.username}
            mail={ele.senderId?.email}
          />
        </div>
      ))}
    </MainContainer>
  )
}
const mapStoretoProps = ({ friends }) => {
  return {
    ...friends,
  }
}
export default connect(mapStoretoProps)(PendingInvitationList)