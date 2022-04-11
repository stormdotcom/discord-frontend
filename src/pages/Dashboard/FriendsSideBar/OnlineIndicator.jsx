import React from 'react'
import { Box } from '@mui/material'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
function OnlineIndicator() {
  return (
    <Box sx={{
        color: '#3ba55d',
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        right: '5px',
        
    }}>
        <FiberManualRecordIcon sx={{height: "15px"}} />
    </Box>
  )
}

export default OnlineIndicator