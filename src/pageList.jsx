import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserProfile from './userProfile.jsx';

function DisplayPages() {
  var newDetails = JSON.parse(localStorage.getItem("pageDetails"));
  console.log(`Title: ${newDetails.ptitle}`);
  return (
    <>
    <div className='bground'>
      <div className='d-block w-100' style={{textAlign: "right"}}>
        <p style={{textAlign: 'left'}} className='d-inline float-left m-2 ml-3'>LoA / Library</p>
        <Link to={"../user"}><button className='btn mb-1' type='button'>{UserProfile.getName()} <i className='fa-solid fa-user' /></button></Link>
        <Link to={"../library/create/buttons"}><button className='btn mb-1' type='button'>Close <i className='fa-solid fa-xmark' /></button></Link>
      </div>

      <div className='box'>
          <Link to={"../library/create/new_page"}><button className='btn w-100' type='button'>Create Page</button></Link>
      </div>

      <div className='box'>
          <Link to={"../library/create/page"}><button className='btn w-100' type='button'>{newDetails.ptitle}</button></Link>
      </div>

    </div>
    </>
  )
}

function DisplayNone() {
  console.log("found none");
  return (
    <>
  <div className='bground'>
    <div className='d-block w-100' style={{textAlign: "right"}}>
      <p style={{textAlign: 'left'}} className='d-inline float-left m-2 ml-3'>LoA / Library</p>
      <Link to={"../user"}><button className='btn mb-1' type='button'>{UserProfile.getName()} <i className='fa-solid fa-user' /></button></Link>
      <Link to={"../library/create/buttons"}><button className='btn mb-1' type='button'>Close <i className='fa-solid fa-xmark' /></button></Link>
    </div>

    <div className='box'>
        <Link to={"../library/create/new_page"}><button className='btn w-100' type='button'>Create Page</button></Link>
    </div>

    <h3 className='text-center mb-5'>Your page list is empty!</h3>

    </div>
  </>
  )
}


function PageList() {

  if (localStorage.getItem("pageDetails")!==null) {
    //story details already exist, pull them
    return (
    <>
      <DisplayPages />
    </>
    )
  }
  else {
    return (
    <>
      <DisplayNone />
    </>
    )
  }
}
export default PageList;
