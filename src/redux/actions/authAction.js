import * as api from '../../api/api';
import { openAlertMessage} from "./alertAction"

export const authActions = {
    SET_AUTH_ACTIONS : 'SET_AUTH_ACTIONS'
};

export const getActions = (dispatch) => {
    return {
        loginAction :(userDetails, history)=> dispatch(login(userDetails, history)),
<<<<<<< HEAD
        registerAction:(userDetails, history)=> dispatch(register(userDetails, history)),
        setUserDetails: (userDetails)=> {
            dispatch(setUserDetails(userDetails))
        }
=======
        registerAction:(userDetails, history)=> dispatch(register(userDetails, history))
>>>>>>> main
        

    }
}

const setUserDetails = (userDetails) => {
    return {
        type : authActions.SET_AUTH_ACTIONS,
        userDetails,
    }
}

const login = (userInput, history)=> {
    return async (dispatch)=>{
        const response =await api.login(userInput)
        if(response?.error) {
            dispatch(openAlertMessage(response?.message))
        }
        else {
            const {userDetails} = response?.data;
            localStorage.setItem('user', JSON.stringify(userDetails))
            dispatch(setUserDetails(userDetails))
            history.push('/dashboard')
        }

    }
}

const register = (userInput, history)=> {
    return async (dispatch)=>{
        const response =await api.register(userInput)
        console.log("register response", response)
        if(response?.error) {
            dispatch(openAlertMessage(response?.message))
        }
        else {
            const {userDetails} = response?.data;
            localStorage.setItem('user', JSON.stringify(userDetails))
            dispatch(setUserDetails(userDetails))
            history.push('/dashboard')
        }

    }
}