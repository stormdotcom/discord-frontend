import React from 'react'
import {Button} from '@mui/material'
function ButtonAuth({label, additionalStyles, disabled, onClick}) {
  return (
    <Button 
    variant='contained'
    sx={{
      bgcolor: '#5865f2',
      color: 'white',
      textTransform: 'none',
      fontSize: '16px',
      fontWeight: 500,
      width : '100%',
      height: '40px',
      ":hover": {
        bgcolor: '#1123e8',
      }
    }}
    style={additionalStyles ? additionalStyles : {}}
    disabled={disabled}
    onClick={onClick}
    >
      {label}
    </Button>
  )
}

export default ButtonAuth