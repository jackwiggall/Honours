import React, { useState } from 'react';
import { Button } from "@aws-amplify/ui-react";
import { useNavigate } from 'react-router-dom';

import Header from './header.jsx';

function Page() {

  const [prev, setPrev] = useState([{}]); //previous pages

  const [id, setID] = useState('');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const [run, setRun] = useState(false); //constant bool to prevent loop error

  const nav = useNavigate();

  const handleSubmit = (e) => {

      e.preventDefault();

      const insertAt = prev.length; // Could be any index
      const pageDetails = [
         // Items before the insertion point:
         ...prev.slice(0, insertAt),
         // New item:
         {
           id: insertAt,
           title : title,
           text : text,
         },
         // Items after the insertion point:
         ...prev.slice(insertAt)
       ];
       setPrev(pageDetails);

      //checks if pages already exist
      if (!run) {
        localStorage.setItem("pageDetails", JSON.stringify([{id: 0, title : title, text : text}]));
      }else { //NEED IDENTIFIER
        localStorage.removeItem("pageDetails");
        localStorage.setItem("pageDetails", JSON.stringify(pageDetails));
      }
      //saves story details as json string

      nav('../library/create/pagelist'); // Redirect to buttons
  }

  //check if other pages exist
  if (localStorage.getItem("pageDetails")!==null && run === false) {
    //story details already exist, pull them

    setRun(true); //prevents infinite loop

    var newDetails = JSON.parse(localStorage.getItem("pageDetails"));

    setPrev(newDetails);
    //set form data
    setID(newDetails.id);
    setTitle(newDetails.title);
    setText(newDetails.text);

    return (
      <>
      <div className='bground'>
        <Header link={"../library/create/buttons"} location={"LoA / Library  / Page"} />

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
                <input className='form-control mr-sm-2' type='search' placeholder='Text' aria-label='Text' />
                <select className='custom-select mt-2 mr-sm-2'>
                  <option defaultValue>Page...</option>
                  <option value={id}>{title}</option>
                </select>
            </div>

            <Button variation="primary" className='w-100 my-2 my-sm-0 mr-1' type='submit' >Submit</Button>
            </form>

          </div>
          </>
    )
    } else {
      //this is first page
      return (
        <>
        <div className='bground'>
          <Header link={"../library/create/buttons"} location={"LoA / Library  / Page"} />

          <form onSubmit={handleSubmit}>
              <div className='box'>
                  <h3 className='w-100'>Page Title</h3>
                  <input className='form-control mr-sm-2' type='search' placeholder='Title' onChange = {(e) => setTitle(e.target.value)} value = {title} required aria-label='Title' />
              </div>

              <div className='box'>
                  <h3 className='w-100'>Text</h3>
                  <textarea className='form-control mr-sm-2' placeholder='Text' onChange = {(e) => setText(e.target.value)} value = {text} required aria-label='Text'></textarea>
              </div>

              <Button variation="primary" className='w-100 my-2 my-sm-1 mr-1' type='submit' >Submit</Button>
              </form>

            </div>
            </>
      )
    }
}



export default Page;
