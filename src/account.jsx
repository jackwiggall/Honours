import React from 'react';
import { Link } from 'react-router-dom';
import { AccountsCreateForm } from './ui-components';
import UserProfile from './userProfile.jsx';

function Account() {

return (
      <>
      <div className='bground'>
        <div className='d-block w-100' style={{textAlign: "right"}}>
          <p style={{textAlign: 'left'}} className='d-inline float-left m-2 ml-3'>LoA / User</p>
          <Link to={"../User"}><button className='btn mb-1' type='button'>{UserProfile.getName()} <i className='fa-solid fa-user' /></button></Link>
          <Link to={"../"}><button className='btn mb-1' type='button'>Close <i className='fa-solid fa-xmark' /></button></Link>
        </div>

        <h3 className='text-center mb-3'>Create Account</h3>
          <div className='box'>
              <AccountsCreateForm />
          </div> {/*Give user the passkey on success*/}

      </div>
    	</>
)
}
export default Account;
