import React from 'react';
import { Link } from 'react-router-dom';
import UserProfile from './userProfile.jsx';
import UserBody from './userBody.jsx';

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
