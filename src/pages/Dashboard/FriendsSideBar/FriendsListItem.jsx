import {  Button, Typography } from '@mui/material'
import React from 'react'
import Avatar from '../../../components/Avatar/Avatar'
import OnlineIndicator from './OnlineIndicator'

function FriendsListItem({id, username,isOnline}) {
  return (
   <Button
   style={{
       width: '100%',
       height: '42px',
       marginTop: '10px',
       display : 'flex',
       alignItems: 'center',
       justifyContent: 'flex-start',
       textTransform: 'none',
       color: 'black',
       position: 'relative'
   }}
   >
       <Avatar username={username} />
       <Typography 
       variant='subtitle1'
        align='left'
       style={{
           marginLeft: '7px',
            fontWeight: 700,
            color : '#8e9297'
       }} 
       >
           {username}
       </Typography>
       {isOnline && <OnlineIndicator /> }
   </Button>
  )
}

export default FriendsListItem