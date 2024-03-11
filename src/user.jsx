import React from 'react';
import { Link } from 'react-router-dom';

function User() {
return (
      <>
      <div className='bground'>
        <div className='d-block w-100' style={{textAlign: "right"}}>
          <p style={{textAlign: 'left'}} className='d-inline float-left m-2 ml-3'>LoA / User</p>
          <Link to={"../User"}><button className='btn mb-1' type='button'>User <i className='fa-solid fa-user' /></button></Link>
          <Link to={"../"}><button className='btn mb-1' type='button'>Close <i className='fa-solid fa-xmark' /></button></Link>
        </div>

        <h2 className='centre' style={{marginTop: "5px"}}>Which would you to do?</h2>
        <div className='centre'>

          <div className='box'>
    			     <Link to={"./Create"}> <button className='btn w-100 my-2 my-sm-0 mr-1' type='button' >Create Account</button></Link>
          </div>

          <h2>OR</h2>

          <div className='box'>
    			     <Link to={"./Login"}><button className='btn w-100 my-2 my-sm-0 mr-1' type='button' >Login</button></Link>
          </div>

    		</div>

      </div>
    	</>
)
}

export default User;
