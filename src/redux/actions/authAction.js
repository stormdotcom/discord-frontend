import * as api from '../../api/api';


export const authActions = {
    SET_AUTH_ACTIONS : 'SET_AUTH_ACTIONS'
};

export const getActions = (dispatch) => {
    return {
        login :(userDetails, history)=> dispatch(login(userDetails, history)),
        register:(userDetails, history)=> dispatch(register(userDetails, history))
        

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
        if(response.error) return {error:response.exception}
        const {userDetails} = response?.data;
        localStorage.setItem('user', JSON.stringify(userDetails))
        dispatch(setUserDetails(userDetails))
        history.push('/dashboard')
    }
}

const register = (userInput, history)=> {
    return async (dispatch)=>{
        const response =await api.register(userInput)
        if(response.error) return {error:response.exception}
        const {userDetails} = response?.data;
        localStorage.setItem('user', JSON.stringify(userDetails))
        dispatch(setUserDetails(userDetails))
        history.push('/dashboard')
    }
}