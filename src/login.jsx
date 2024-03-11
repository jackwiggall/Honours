import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
return (
      <>
      <div className='bground'>
        <div className='d-block w-100' style={{textAlign: "right"}}>
          <p style={{textAlign: 'left'}} className='d-inline float-left m-2 ml-3'>LoA / User</p>
          <Link to={"../User"}><button className='btn mb-1' type='button'>User <i className='fa-solid fa-user' /></button></Link>
          <Link to={"../"}><button className='btn mb-1' type='button'>Close <i className='fa-solid fa-xmark' /></button></Link>
        </div>

        <h3 className='text-center mb-5'>Login</h3>

        <div className='box'>
            <h4 className='mr-2'>Username</h4>
            <input className='form-control mr-sm-2' id='username' type='comment' placeholder='Username' required aria-label='Username'/>
        </div>
        <div className='box'>
            <h4 className='mr-2'>Passkey</h4>
            <input className='form-control mr-sm-2' id='passkey' type='comment' placeholder='Passkey' required aria-label='Passkey'/>
        </div>


        <button className='btn btn-primary w-100 my-2 my-sm-0 mr-1' type='submit'>Submit</button>
      </div>
    	</>
)
}

export default Login;
