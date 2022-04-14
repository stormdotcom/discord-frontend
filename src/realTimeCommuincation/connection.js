import io from 'socket.io-client';
import {setPendingFriendsInvitation, setFriends, setOnlineUsers} from '../redux/actions/friendsAction'
import store from '../redux/store'
let socket = null;

export const  connectWithSocketServer = (userDetails)=> {
    const jwtToken = userDetails.token
    socket =  io('http://localhost:4000', {
        auth: {
            token:jwtToken,
        }
    });

    socket.on('connect',()=>{
        console.log('successfully connected', socket.id)
    });

    socket.on('friends-invitation', (data)=> {
        const { pendingInvitations } =data;
        console.log("Pending friends-invitation \n ", data)
        store.dispatch(setPendingFriendsInvitation(pendingInvitations))
    })

    socket.on('friends-list', (data)=>{
        const { friends } = data;
        store.dispatch(setFriends(friends))
    })
    socket.on('online-user', (data)=>{
        const { onlineUsers } = data;
        store.dispatch(setOnlineUsers(onlineUsers))
    })
}