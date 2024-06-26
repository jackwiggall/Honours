import React, { useState, useRef } from 'react';
import { Button } from "@aws-amplify/ui-react";
import { useNavigate } from 'react-router-dom';

import Header from './header.jsx';

function LoopedLinks(props) {
  //SHOWS ALL PAGE TITLES FOR LINKS
  const details = props.details;
  return (
    <div>
    <select className='custom-select mt-2 mr-sm-2' onChange = {(e) => localStorage.setItem("links", e.target.value)}>
      {details.map((det) => (
          <option value={det.id}>{det.title}</option>
        )
      )}
    </select>
    </div>
  )
}

function RewriteArray(props,page) {
  //check if already in array and rewrite page if so

    const details = props;
    var newObj = [{}];
    var count = 0;
    details.forEach((det) =>

      {if (det.id!==page.id) {
        newObj[count]=det;
      }else {
        newObj[count]=page;
      }
      count++;
    })
    if (newObj!==[{}])
    {
      return newObj;
    }else {
      return props;
    }
}

function Page() {

  var [prev, setPrev] = useState([{}]); //previous pages

  //const [id, setID] = useState('');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [linkText, setLinkText] = useState('');

  const nav = useNavigate();
  var valid = useRef(0);
  var empty = useRef(true);
  var storyNum = useRef(-1);
  var pageNum = useRef(-1);
  var insertAt = useRef(0);
  const pageDetails = useRef([{}]);
  const allDetails = useRef([]);

  //create page
  const handleSubmit = (e) => {

      e.preventDefault();

      var linkID = 0;

      if (localStorage.getItem("links")!==null) {
        linkID = localStorage.getItem("links");
      }

      if (pageNum.current===-1) { //new page so set to end
        pageDetails.current = [
           // Items before the insertion point:
           ...prev.slice(insertAt),
           // New item:
           {
             id: insertAt.current,
             title : title,
             text : text,
             linkText : linkText,
             linkID : linkID,
           },
           ...prev.slice(0, insertAt),
         ];
         setPrev(pageDetails.current);
      } else {
        //gets current page
        const passObj = {
          id: Number(pageNum.current),
          title : title,
          text : text,
          linkText : linkText,
          linkID : Number(linkID),
        }
        pageDetails.current = RewriteArray(prev, passObj);
      }

      //checks if pages already exist
      if (empty.current) {
        //1st page made
        allDetails.current[storyNum.current] = [{id: 0, title : title, text : text, linkText : linkText, linkID: linkID}];
        localStorage.setItem("pageDetails", JSON.stringify(allDetails.current));
      }else { //NEED IDENTIFIER
        localStorage.removeItem("pageDetails");
        allDetails.current[storyNum.current] = pageDetails.current;
        localStorage.setItem("pageDetails", JSON.stringify(allDetails.current));
      }
      //saves story details as json string

      nav('../library/create/pagelist'); // Redirect to buttons
  }

  //delete page button trigger
  const handleDel = (e) => {

      e.preventDefault();
      //check if page in list
      if (localStorage.getItem("pageDetails")!==undefined && pageNum.current!==-1) {
        var newArray = prev;

        newArray.splice(pageNum.current, 1);

        for (var i = pageNum.current; i < newArray.length; i++) {
          //change all ID's down from deleted page
          newArray[i].id--;
        }

        //need to cut out current page, shift all down one
        if (newArray[0]!==undefined) {
          localStorage.setItem("pageDetails",JSON.stringify(newArray));
        }else {
          localStorage.removeItem("pageDetails");
        }
      }

      nav('../library/create/pagelist'); // Redirect to page list
    }

    if (localStorage.getItem("storyNum")!==null) {
      storyNum.current = localStorage.getItem("storyNum");
    }

  //check if other pages exist
  if (valid.current===0 && storyNum.current>-1) {

    //only run once
    valid.current = 1;

    //story details already exist, pull them
    allDetails.current = JSON.parse(localStorage.getItem("pageDetails"));
    var newDetails = allDetails.current[storyNum.current];
    if(newDetails.length===undefined) {
    }else {
      setPrev(newDetails);
      empty.current = false;
      if (localStorage.getItem("currentPage")!==null) {
        pageNum.current = localStorage.getItem("currentPage"); //sets to the id of editing page, is -1 for new page
      }
    }

    if (pageNum.current===-1) { //set default values
      //new page
      setTitle("");
      setText("");
      setLinkText("Restart");
      insertAt.current = newDetails.length; // add new page to end of list
    }else {
      //editing existing page
      insertAt.current = pageNum.current; //set id to new id
      //set form data
      setTitle(newDetails[pageNum.current].title);
      setText(newDetails[pageNum.current].text);
      setLinkText(newDetails[pageNum.current].linkText);
    }

  }else if (valid.current===0) { //no pages already
    valid.current = 1;

    setTitle("");
    setText("");
    setLinkText("");
    insertAt.current = 0; // add new page to end of list
  }

    return (
      <>
      <div className='bground'>
        <Header link={"../library/create/pagelist"} location={"tB / Library  / Page"} />

        <form onSubmit={handleSubmit}>
            <div className='box'>
                <h3 className='w-100'>Page Title</h3>
                <input className='form-control mr-sm-2' type='search' placeholder='Title' onChange = {(e) => setTitle(e.target.value)} value = {title} required aria-label='Title' />
            </div>

            <div className='box'>
                <h3 className='w-100'>Text</h3>
                <textarea className='form-control mr-sm-2' placeholder='Text' onChange = {(e) => setText(e.target.value)} value = {text} required aria-label='Text'></textarea>
            </div>

            <div className='box'>
                <h3 className='w-100'>Link</h3>
                <input className='form-control mr-sm-2' type='search' placeholder='Link Text' onChange = {(e) => setLinkText(e.target.value)} value = {linkText} aria-label='Text' />
                <LoopedLinks details={prev} storyNum={storyNum.current} />
            </div>

            <Button variation="primary" className='w-100 my-2 my-sm-0 mr-1' type='submit' >Submit</Button>
          </form>

          <form onSubmit={handleDel}>
            <Button variation="primary" className='btn btn-danger w-100 my-2 my-sm-1 mr-1' type='submit'>Delete</Button>
          </form>

          </div>
          </>
    )


}



export default Page;
