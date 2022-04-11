import React, { useEffect } from 'react'
import { styled } from '@mui/system';
import FriendsSideBar from './FriendsSideBar/FriendsSideBar';
import SideBar from './SideBar/SideBar';
import AppBar from './AppBar/AppBar';
import Messenger from './Messenger/Messenger';
import { logout } from '../../utils/logout';
import { connect } from 'react-redux';
import { getActions } from '../../redux/actions/authAction';

const Wrapper = styled('div')({
  width:'100%',
  height: '100vh',
  display: 'flex'
})



const Dashboard = ({setUserDetails}) => {

  useEffect(()=>{
    const userDetails = localStorage.getItem('user');
    if(!userDetails) logout()
    setUserDetails(JSON.parse(userDetails))
  },[])

  return (
    <Wrapper>
      <SideBar />
      <FriendsSideBar />
      <Messenger />
      <AppBar />
    </Wrapper>
  )
}
const mapActionsToProps = (dispatch)=>{
  return {
    ...getActions(dispatch)
  }
}
export default connect(null, mapActionsToProps)(Dashboard)