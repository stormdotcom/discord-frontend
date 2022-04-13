import * as api from '../../api/api'
import { openAlertMessage} from './alertAction'
export const friendsActions = {
    SET_FRIENDS : 'SET_FRIENDS',
    SET_PENDING_INVITATION : 'SET_PENDING_INVITATION',
    SET_ONLINE_USERS : 'SET_ONLINE_USERS'

}

export const getActions =(dispatch)=> {
    return {
        sendFriendInvitation : (data, closeDialogHandler) => dispatch(sendFriendInvitation(data, closeDialogHandler)),

    }
}

const sendFriendInvitation = (data, closeDialogHandler)=> {
    return async (dispatch)=> {
        const response = await api.sendFriendInvitation(data)
        console.log(response)
        if(response.error) {
            dispatch(openAlertMessage(response.message))
        }
        else { dispatch(openAlertMessage('Invitation has been sent'));
        closeDialogHandler();
    }
    }
}