import {authActions} from "../actions/authAction"

const initialState = {
    userDetails : null,
}

const reducer = (state=initialState, action)=> {
    switch (action.type) {
        case authActions.SET_AUTH_ACTIONS:
            return {
                ...state,
                userDetails: action.payload,
            };
        
        default:
            break;
    }
}

export default reducer