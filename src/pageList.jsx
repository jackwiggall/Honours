import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header.jsx';

function Top() {
  return (
    <>
    <Header link={"../library/create/buttons"} location={"tB / Library  / Pages"} />

    <div className='box'>
        <Link to={"../library/create/page"}><button className='btn w-100' type='button'>Create Page</button></Link>
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
      <div className='box' onClick={() => localStorage.setItem("currentPage",det.id)}>
        <Link to={"../library/create/page"}>
          <button className='btn w-100' type='button' key={det.id}>
            {det.title}
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
  localStorage.removeItem("currentPage");
  localStorage.removeItem("links");

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
