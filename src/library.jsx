import React from 'react';
import { Link } from 'react-router-dom';
import UserProfile from './userProfile.jsx';
import UserBody from './userBody.jsx';

function Library() {
return (
      <>
      <div className='bground'>
        <div className='d-block w-100' style={{textAlign: "right"}}>
          <p style={{textAlign: 'left'}} className='d-inline float-left m-2 ml-3'>LoA / Library</p>
          <Link to={"../User"}><button className='btn mb-1' type='button'>{UserProfile.getName()} <i className='fa-solid fa-user' /></button></Link>
          <Link to={"../"}><button className='btn mb-1' type='button'>Close <i className='fa-solid fa-xmark' /></button></Link>
        </div>
        <LibraryBody />

      </div>
    	</>
)}
export default Library;

function LibraryBody() {
  if (localStorage.getItem("name")!==null) {
    return (
    <> {/*User is logged in, show library*/}
      <h3 className='text-center mb-5'>Your library is empty!</h3>
      <div className='box'>
        <Link to={"./Create"}><button className='btn w-100 my-2 my-sm-0 mr-1' type='button'>Create New Story</button></Link>
      </div>
    </>
  )
  }else {
    return (
    <> {/*User is not logged in, show login*/}
        <h2 className='centre' style={{marginTop: "5px"}}>Login to access this feature</h2>
      <UserBody />
    </>
  )
  }

}
