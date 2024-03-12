import React from 'react';
import { Link } from 'react-router-dom';
import UserProfile from './userProfile.jsx';

function User() {
  return (
        <>
        <div className='bground'>
          <div className='d-block w-100' style={{textAlign: "right"}}>
            <p style={{textAlign: 'left'}} className='d-inline float-left m-2 ml-3'>LoA / User</p>
            <Link to={"../User"}><button className='btn mb-1' type='button'>{UserProfile.getName()} <i className='fa-solid fa-user' /></button></Link>
            <Link to={"../"}><button className='btn mb-1' type='button'>Close <i className='fa-solid fa-xmark' /></button></Link>
            <UserBody />
          </div>
        </div>
        </>
      )
}
export default User;

function UserBody() {
  const username = UserProfile.getName();
    if (username !=='Login') {
      return (
        <div className='bground'> {/*User is logged in, either redirect to profile or log out*/}
          <h2 className='centre' style={{marginTop: "5px"}}>Welcome</h2>
          <div className='centre'>

            <div className='box' onClick={() => UserProfile.setName("Login")}>
      			     <Link to={"../"}> <button className='btn w-100 my-2 my-sm-0 mr-1' type='button' >Log Out</button></Link> {/*Link doesnt work, change to reload page*/}
            </div>
          </div>
        </div>
      )
    }else {
      return (
        <div className='bground'>
          <h2 className='centre' style={{marginTop: "5px"}}>Which would you to do?</h2> {/*User is not logged in*/}
          <div className='centre'>

            <div className='box'>
      			     <Link to={"./Create"}> <button className='btn w-100 my-2 my-sm-0 mr-1' type='button' >Create Account</button></Link> {/*Account page*/}
            </div>

            <h2>OR</h2>

            <div className='box'>
      			     <Link to={"./Login"}><button className='btn w-100 my-2 my-sm-0 mr-1' type='button' >Login</button></Link>{/*Login page*/}
            </div>
          </div>
        </div>
      )
    }

}
