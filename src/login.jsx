import React from 'react';
import { Link } from 'react-router-dom';
import UserProfile from './userProfile.jsx';
import { Button } from "@aws-amplify/ui-react";

function Login() {
return (
      <>
      <div className='bground'>
        <div className='d-block w-100' style={{textAlign: "right"}}>
          <p style={{textAlign: 'left'}} className='d-inline float-left m-2 ml-3'>LoA / User</p>
          <Link to={"../User"}><button className='btn mb-1' type='button'>{UserProfile.getName()}<i className='fa-solid fa-user' /></button></Link>
          <Link to={"../"}><button className='btn mb-1' type='button'>Close <i className='fa-solid fa-xmark' /></button></Link>
        </div>

        <h3 className='text-center mb-5'>Login</h3>

        <form>
        <div className='box'>
            <h4 className='mr-2'>Username</h4>
            <input className='form-control mr-sm-2' id='username' type='comment' placeholder='Username' required aria-label='Username'/>
        </div>
        <div className='box'>
            <h4 className='mr-2'>Passkey</h4>
            <input className='form-control mr-sm-2' id='passkey' type='comment' placeholder='Passkey' required aria-label='Passkey'/>
        </div>

        <Button variation="primary" className='btn w-100 my-2 my-sm-0 mr-1' type='submit' onSubmit={UserProfile.setName("Logged")} >Submit</Button> {/*Set to username*/}
        </form>
      </div>
    	</>
)
}

export default Login;
