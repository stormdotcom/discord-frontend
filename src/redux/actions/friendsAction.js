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
        acceptFriendInvitation :(data)=> dispatch(acceptFriendInvitation(data)),
        rejectFriendInvitation : (data)=> dispatch(rejectFriendInvitation(data))

    }
}



export const acceptFriendInvitation = (data) => {
    return async (dispatch )=> {
        const response = await api.acceptFriendInvitation(data)
             if(response.error) {
            dispatch(openAlertMessage(response.message))
        }
        else { 
            dispatch(openAlertMessage('Invitation Accepted'));
    }
        
    }
}

export const rejectFriendInvitation = (data) => {
    return async (dispatch )=> {
        const response = await api.rejectFriendInvitation(data)
             if(response.error) {
            dispatch(openAlertMessage(response.message))
        }
        else { dispatch(openAlertMessage('Invitation Rejected'));
    }
        
    }    
}

export const setPendingFriendsInvitation = (pendingFriendsInvitations) => {
    return {
        type:friendsActions.SET_PENDING_INVITATION,
        pendingFriendsInvitations,
    }
}

export const setFriends = (friends) => {
    return {
        type: friendsActions.SET_FRIENDS,
        friends,
    }
}

export const setOnlineUsers = ( onlineUsers )=>{
    return {
        type: friendsActions.SET_ONLINE_USERS,
        onlineUsers,
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