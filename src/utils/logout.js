export const logout = ()=>{
    localStorage.clear("user")
    window.location.pathname='/login'

}