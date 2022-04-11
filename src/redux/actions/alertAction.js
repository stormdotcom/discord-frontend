 
 const alertActions = {
     SHOW_ALERT_MESSAGE: "SHOW_ALERT_MESSAGE",
     HIDE_ALERT_MESSAGE: "HIDE_ALERT_MESSAGE"
 }

 export const getActions = ( dispatch)=> {
     return {
         openAlertMessage:(content)=> dispatch(openAlertMessage(content)),
         closeAlertMessage:()=> dispatch(closeAlertMessage())
     }
 }

export const openAlertMessage=(content)=> {

    return {
        type: alertActions.SHOW_ALERT_MESSAGE,
        content,
    }
}

export const closeAlertMessage = (content)=> {

    return {
        type: alertActions.HIDE_ALERT_MESSAGE,
        content,
    }
}

export default alertActions