import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserProfile from './userProfile.jsx';
import UserBody from './userBody.jsx';

function TopTest() {

}

function Testing() {

    const [gTitle, setgTitle] = useState(''); //game title
    const [pTitle, setpTitle] = useState(''); //page title
    const [pText, setpText] = useState(''); //page text

    const [run, setRun] = useState(false); //constant bool to prevent loop error
    const [valid, setValid] = useState(false); //is game loadable

  var storyDetails = {};
  var pageDetails = [{}];

  useEffect(()=>{
    //needs to inform user of validation of why error, ie no pages etc
      if (localStorage.getItem("storyDetails")!==null&&localStorage.getItem("pageDetails")!==null && run === false) {

        setRun(true);
        setValid(true);
        storyDetails = JSON.parse(localStorage.getItem("storyDetails"));
        pageDetails = JSON.parse(localStorage.getItem("pageDetails"));

        //set form data
        setgTitle(storyDetails.title);
        setpTitle(pageDetails[0].ptitle);
        setpText(pageDetails[0].text);
      } else {
        setRun(true);
        setgTitle("Error");
        setValid(false);
      }
    }, []); // empty array means only once


  return (
        <>
        <div className='bground'>
          <div className='d-block w-100' style={{textAlign: "right"}}>
            <p style={{textAlign: 'left'}} className='d-inline float-left m-2 ml-3'>LoA / Library / Testing</p>
            <Link to={"../user"}><button className='btn mb-1' type='button'>{UserProfile.getName()} <i className='fa-solid fa-user' /></button></Link>
            <Link to={"../library/create/buttons"}><button className='btn mb-1' type='button'>Close <i className='fa-solid fa-xmark' /></button></Link>
          </div>

          <div className='box'>
              <h3 className='mr-2 text-center'>{gTitle}</h3> {/*Game Title*/}
          </div>

          <div className='box'>
              <h3 className='mr-2'>{pTitle}</h3>
              <h5 className='mr-2'>{pText}</h5>
          </div>

        </div>
        </>
      )
}
export default Testing;
