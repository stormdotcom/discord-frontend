

export function validateLoginForm( {email, password}){
    const isMailValid = validateEmail(email)
    const isPasswordValid = validatePassword(password);
    return isMailValid && isPasswordValid;
}
export function validateRegister( { email, password, userName}){
    const isMailValid = validateEmail(email)
    const isPasswordValid = validatePassword(password)
    const isUserName = validateUserName(userName)
    return isMailValid && isPasswordValid && isUserName;
}

const validateUserName = (userName)=>{
        return userName.length > 2 && userName.length < 16
}

const validatePassword = (password) => { 

    return password.length > 4 && password.length < 19;
}

const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    return emailPattern.test(email)
}
