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
  //SHOWS ALL PAGES
  const details = props.details;
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
  var storyNum = localStorage.getItem("storyNum");
  newDetails=newDetails[storyNum];
  localStorage.removeItem("currentPage");
  localStorage.removeItem("links");
  return (
    <>
    <div className='bground'>
      <Top /> {/*Header and new page button*/}
      <LoopedPages details={newDetails} />

    </div>
    </>
  )
}

function DisplayNone() {
  return (
    <>
  <div className='bground'>
    <Top /> {/*Header and new page button*/}

    <h3 className='text-center mb-5'>Your page list is empty!</h3>
    </div>
  </>
  )
}


function PageList() {

  if (localStorage.getItem("pageDetails")!==null&&localStorage.getItem("storyNum")!==null) {
    //story details already exist, pull them
    var newDetails = JSON.parse(localStorage.getItem("pageDetails"));
    var storyNum = localStorage.getItem("storyNum");
    if (newDetails[storyNum].length===undefined) {
      return (
      <>
        <DisplayNone /> {/*No pages exist for story yet*/}
      </>
      )
    }else {
      return (
      <>
        <DisplayPages /> {/*Displays pages in story*/}
      </>
      )
    }
  }
  else {
    return (
    <>
      <DisplayNone /> {/*No pages exist for story yet*/}
    </>
    )
  }
}
export default PageList;
