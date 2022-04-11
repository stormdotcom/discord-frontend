import React from 'react'
import { styled } from '@mui/system'
import FriendsListItem from './FriendsListItem'
const MainContainer = styled('div')({
    flexGrow: 1,
    width: '100%'
})

const DUMMY_FRIENDS = [
  {id: 1, username: 'Mark', isOnline: true },
  {id: 2, username: 'Steve', isOnline: true},
  {id: 3, username: 'Ajmal', isOnline: false },
  {id: 4, username: 'Elon', isOnline: true}
]

function FriendsList() {
  return (
    <MainContainer>
        {DUMMY_FRIENDS.map((ele)=>(
          <FriendsListItem 
          username={ele.username}
          id={ele.id}
          key={ele.id}
          isOnline={ele.isOnline}
          />
        )
          )}
    </MainContainer>
  )
}

export default FriendsList