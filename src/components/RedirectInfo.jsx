import { Typography } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'

const RedirectText = styled('span')({
    color: '#1a71ff',
    fontWeight: 500,
    cursor: 'pointer',
    paddingLeft: '5px'
})

function RedirectInfo( {text, redirectText, additionalStyle, redirectHandler }) {
  return (
    <Typography 
    sx={{ color: '#72767d'}}
    style={additionalStyle ? additionalStyle : {}}
    >
        {text}
        <RedirectText onClick={redirectHandler} > {redirectText} </RedirectText>
    </Typography>
  )
}

export default RedirectInfo