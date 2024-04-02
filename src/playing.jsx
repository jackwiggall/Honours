import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@aws-amplify/ui-react";
import Header from './header.jsx';

import { generateClient } from 'aws-amplify/api';
const client = generateClient();


function Play() {

    var pageNum = useRef(0);
    var run = useRef(false);
    var gameDetails = useRef([{}]);

  useEffect(()=>{
    //needs to inform user of validation of why error, ie no pages etc
      if (localStorage.getItem("gameDetails")!==null && run.current === false) {

        run.current = true;

        gameDetails.current = JSON.parse(localStorage.getItem("gameDetails"));


      } else if (run.current===false) {
        run.current = true;
        //set other fields to error
        //RUN QUERY TO SET GAMEDETAILS
        var results = [{}];
        localStorage.setItem("gameDetails",JSON.stringify(results));
      }
    }, []); // empty array means only once

    const handleLink = () => {

        //e.preventDefault();
        //console.log("change page");
        //pageNum.current = linkID;
        //setpTitle(pageDetails.current[pageNum.current].title);
        //setpText(pageDetails.current[pageNum.current].text);
        //setLinkText(pageDetails.current[pageNum.current].linkText);
        //setLinkID(pageDetails.current[pageNum.current].linkID);
    }

  return (
        <>
        <div className='bground'>
        <Header link={"../search/info"} location={"LoA / Library / Play"} />

          <div className='box'>
              <h3 className='mr-2 text-center'>{gTitle}</h3> {/*Game Title*/}
          </div>

          <div className='box'>
              <h3 className='mr-2'>{pTitle}</h3>
              <h5 className='mr-2'>{pText}</h5>
          </div>

          <form >
            <Button variation="primary" className='btn w-100 my-2 my-sm-0 mr-1' type='button' onClick={handleLink}>{linkText}</Button>
          </form>

        </div>
        </>
      )
}
export default Play;
