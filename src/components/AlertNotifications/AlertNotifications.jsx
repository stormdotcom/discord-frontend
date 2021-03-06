import React from 'react'
import { Snackbar, Alert } from '@mui/material';
import { connect } from 'react-redux';
import { getActions } from '../../redux/actions/alertAction' 

function AlertNotifications({
    showAlertMessage,
    closeAlertMessage,
    alertMessage,
}) {

  return (
    <Snackbar 
    anchorOrigin={{  vertical: "top", horizontal: "center" }}
    open={showAlertMessage}
    onClose={closeAlertMessage}
    autoHideDuration={6000}

    >
        <Alert severity='info' >{alertMessage}</Alert>
    </Snackbar>
  )
}

const mapStoreStatetoProps = ({alert})=> {
    return {
        ...alert
    }
} 
const mapActionsToProp = (dispatch)=> {
    return {
        ...getActions(dispatch)
    }
}
export default connect(mapStoreStatetoProps, mapActionsToProp)(AlertNotifications)