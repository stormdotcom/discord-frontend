import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/Register/Register'
import Dashboard from './pages/Dashboard/Dashboard'
import AlertNotifications from "./components/AlertNotifications/AlertNotifications"
function App() {
  return (
    <> 
   <Router>
     <Switch>
         <Route exact path='/login' >
           <LoginPage /> 
         </Route>
         <Route exact path='/register'>
           <RegisterPage />
         </Route>
         <Route exact path ='/dashboard'>
           <Dashboard />
         </Route>
        <Route  path="/*">
          <Redirect to="/dashboard" />
       </Route>
     </Switch>
   </Router>
    <AlertNotifications />
   </>

  )
}
export default App