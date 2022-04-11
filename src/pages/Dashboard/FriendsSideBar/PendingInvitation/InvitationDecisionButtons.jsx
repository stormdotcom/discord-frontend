import React from 'react'
import { CheckCircle , ClearRounded} from '@mui/icons-material'
import { Box, IconButton } from '@mui/material'
import { grey } from '@mui/material/colors';

function InvitationDecisionButtons({ disabled, acceptInvitationHandler, rejectInvitationHandler}) {
  return (
    <Box
    sx={{display: 'flex'}}
    >
        <IconButton style={{color: 'white'}}
        disabled={disabled}
        onClick={acceptInvitationHandler}
        >
            <CheckCircle sx={{ color: grey[500]}} />
        </IconButton>

        <IconButton style={{color: 'white'}}
        disabled={disabled}
        onClick={rejectInvitationHandler}
        >
            <ClearRounded sx={{ color: grey[500]}} />
        </IconButton>

    </Box>
  )
}

export default InvitationDecisionButtons