import alertActions from "../actions/alertAction";
const initialState = {
    showAlertMessage : false,
    alertMessage:null,
}

const reducer = (state= initialState, action) => {
    switch (action.type) {
        case alertActions.SHOW_ALERT_MESSAGE:
            
            return {
                ...state, 
                showAlertMessage:true,
                alertMessage: action.content
                 };
        case alertActions.HIDE_ALERT_MESSAGE:

            return {
                ...state,
                showAlertMessage:false,
                alertMessage: null
           }
    
        default:
            return state;
    }
}

export default reducer