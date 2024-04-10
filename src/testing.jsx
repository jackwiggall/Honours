import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@aws-amplify/ui-react";
import Header from './header.jsx';

function Testing() {

    const [gTitle, setgTitle] = useState(''); //game title
    const [pTitle, setpTitle] = useState(''); //page title
    const [pText, setpText] = useState(''); //page text
    const [linkText, setLinkText] = useState(''); //text for link
    const [linkID, setLinkID] = useState(0); //link to what

    var pageNum = useRef(0);
    var storyNum = useRef(0);
    var run = useRef(false);
    var storyDetails = useRef([{}]);
    var pageDetails = useRef([{}]);

  useEffect(()=>{
    //needs to inform user of validation of why error, ie no pages etc
      if (localStorage.getItem("storyDetails")!==null&&localStorage.getItem("pageDetails")!==null && run.current === false) {

        run.current = true;

        storyNum.current = localStorage.getItem("storyNum");
        storyDetails.current = JSON.parse(localStorage.getItem("storyDetails"));
        pageDetails.current = JSON.parse(localStorage.getItem("pageDetails"));

        storyDetails.current = storyDetails.current[storyNum.current];
        pageDetails.current = pageDetails.current[storyNum.current];

        storyDetails.current = JSON.parse(localStorage.getItem("storyDetails"));

        if (pageDetails.current.length>1) {
          setgTitle(storyDetails.current[0].title); //incorrect position
          setpTitle(pageDetails.current[0].title);
          setpText(pageDetails.current[0].text);
          setLinkText(pageDetails.current[0].linkText);
          setLinkID(pageDetails.current[0].linkID);
          pageNum.current = pageDetails.current[0].linkID;
        }else {
          setgTitle("Error");
          setpTitle("Error");
          setpText("Error");
          setLinkText("");
          setLinkID(0);
          pageDetails.current = [{title: "Error", text: "Error", linkText: "", linkID: 0}]; //prevents loading undefined data on pressing nav button
        }

      } else if (run.current===false) {
        run.current = true;
        //set other fields to error
        setgTitle("Error");
        setpTitle("Error");
        setpText("Error");
        setLinkText("");
        setLinkID(0);
        pageDetails.current = [{title: "Error", text: "Error", linkText: "", linkID: 0}]; //prevents loading undefined data on pressing nav button
      }
    }, []); // empty array means only once

    const handleLink = () => {

        //e.preventDefault();
        //console.log("change page");
        pageNum.current = linkID;
        setpTitle(pageDetails.current[pageNum.current].title);
        setpText(pageDetails.current[pageNum.current].text);
        setLinkText(pageDetails.current[pageNum.current].linkText);
        setLinkID(pageDetails.current[pageNum.current].linkID);
    }

  return (
        <>
        <div className='bground'>
        <Header link={"../library/create/buttons"} location={"tB / Library  / Testing"} />

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
export default Testing;
