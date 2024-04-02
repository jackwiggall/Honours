import React from 'react';
import { Button } from "@aws-amplify/ui-react";
import { useNavigate } from 'react-router-dom';

import UserProfile from './userProfile.jsx';
import Header from './header.jsx';

function Login() {

  const nav = useNavigate();

  const handleSubmit = (e) => {

      e.preventDefault();

      UserProfile.setName("Admin");
      UserProfile.setID('8e7829a9-ec07-4b64-8170-d31b7101522e');
      nav("../");
  }

return (
      <>
      <div className='bground'>
      <Header link={"../"} location={"LoA / User"} />

        <h3 className='text-center mb-5'>Login</h3>

        <form onSubmit={handleSubmit}>
        <div className='box'>
            <h4 className='mr-2'>Username</h4>
            <input className='form-control mr-sm-2' id='username' type='comment' placeholder='Username' required aria-label='Username'/>
        </div>
        <div className='box'>
            <h4 className='mr-2'>Passkey</h4>
            <input className='form-control mr-sm-2' id='passkey' type='comment' placeholder='Passkey' required aria-label='Passkey'/>
        </div>

        <Button variation="primary" className='btn w-100 my-2 my-sm-0 mr-1' type='submit' >Submit</Button> {/*Set to username*/}
        </form>
      </div>
    	</>
)
}

export default Login;
