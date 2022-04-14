import { Typography } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'

const AvatarPreview = styled('div')({
    height:'42px',
    width: '42px',
    backgroundColor: '#5865f2',
    borderRadius: '42px',
    display: 'flex',
    alignItems : 'center',
    justifyContent : 'center',
    fontSize : '20px',
    fontWeight : 700,
    marginLeft: '5px',
    color: 'white'
})

function Avatar({ username, large}) {
  return (
    <AvatarPreview 
    style={large ? {height: '80px', width: '80px'} : {} }
    >
        <Typography fontWeight={600}> {username?.substring(0,2).toUpperCase()} </Typography>

    </AvatarPreview>
  )
}

export default Avatar