import React from 'react';
import { Link } from 'react-router-dom';
import UserProfile from './userProfile.jsx';
{/*import Button from 'react-bootstrap/Button';*/}

function Home() {
return (
    <>
    <div className='bground'>
    <div className='d-block w-100' style={{textAlign: "right"}}>
      <p style={{textAlign: 'left'}} className='d-inline float-left m-2 ml-3'>LoA</p>
      <Link to={"../User"}><button className='btn mb-1' type='button'>{UserProfile.getName()} <i className='fa-solid fa-user' /></button></Link> {/*Make sure login is same place*/}
      <button className='btn mb-1 blended' disabled type='button'>Close <i className='fa-solid fa-xmark' /></button>
      </div>
    		<h1 className='centre'>Welcome to the Library of Alexandria</h1>
    		<img src='' className='centre'/>
        <h2 className='centre' style={{marginTop: "5px"}}>Which would you to do?</h2>
        <div className='centre'>

          <div className='box'>
    			     <Link to={"./Search"}> <button className='btn w-100 my-2 my-sm-0 mr-1' type='button' >Read</button></Link>
          </div>

          <h2>OR</h2>

          <div className='box'>
    			     <Link to={"./Library"}><button className='btn w-100 my-2 my-sm-0 mr-1' type='button' >Write</button></Link>
          </div>

    		</div>
      </div>
      </>
)
}

export default Home;
