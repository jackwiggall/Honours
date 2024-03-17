import React from 'react';
import { Link } from 'react-router-dom';
import UserProfile from './userProfile.jsx';

function Top() {
  return (
    <>
    <div className='d-block w-100' style={{textAlign: "right"}}>
      <p style={{textAlign: 'left'}} className='d-inline float-left m-2 ml-3'>LoA / Library  / Pages</p>
      <Link to={"../user"}><button className='btn mb-1' type='button'>{UserProfile.getName()} <i className='fa-solid fa-user' /></button></Link>
      <Link to={"../library/create/buttons"}><button className='btn mb-1' type='button'>Close <i className='fa-solid fa-xmark' /></button></Link>
    </div>

    <div className='box'>
        <Link to={"../library/create/new_page"}><button className='btn w-100' type='button'>Create Page</button></Link>
    </div>
  </>
  )
}

function LoopedPages(props) {
  //NEED TO ADD KEY
  //SHOWS ALL PAGES 
  const details = props.details

  return (
    <div>
    {details.map((det) => (
      <div className='box'>
        <Link to={"../library/create/page"}>
          <button className='btn w-100' type='button'>
            {det.ptitle}
          </button>
        </Link>
      </div>

    ))}

    </div>
  )

}

function DisplayPages() {
  var newDetails = JSON.parse(localStorage.getItem("pageDetails"));
  //console.log(`Title: ${newDetails.ptitle}`);

  return (
    <>
    <div className='bground'>
      <Top />
      <LoopedPages details={newDetails} />

    </div>
    </>
  )
}

function DisplayNone() {
  //console.log("found none");
  return (
    <>
  <div className='bground'>
    <Top />

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
