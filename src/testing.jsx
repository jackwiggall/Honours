import React, { useState, useEffect } from 'react';
import Header from './header.jsx';

function Testing() {

    const [gTitle, setgTitle] = useState(''); //game title
    const [pTitle, setpTitle] = useState(''); //page title
    const [pText, setpText] = useState(''); //page text

    const [run, setRun] = useState(false); //constant bool to prevent loop error

  useEffect(()=>{
    //needs to inform user of validation of why error, ie no pages etc
      if (localStorage.getItem("storyDetails")!==null&&localStorage.getItem("pageDetails")!==null && run === false) {

        setRun(true);
        var storyDetails = {};
        var pageDetails = [{}];
        storyDetails = JSON.parse(localStorage.getItem("storyDetails"));
        pageDetails = JSON.parse(localStorage.getItem("pageDetails"));

        //set form data
        setgTitle(storyDetails.title);
        setpTitle(pageDetails[0].title);
        setpText(pageDetails[0].text);
      } else {
        setRun(true);
        setgTitle("Error");
      }
    }, []); // empty array means only once


  return (
        <>
        <div className='bground'>
        <Header link={"../library/create/buttons"} location={"LoA / Library  / Testing"} />

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
