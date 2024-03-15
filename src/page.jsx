import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserProfile from './userProfile.jsx';
import { Button } from "@aws-amplify/ui-react";
import { useNavigate } from 'react-router-dom';

function Page() {

  const [ptitle, setpTitle] = useState('');
  const [text, setText] = useState('');

  const [run, setRun] = useState(false); //constant bool to prevent loop error

  const nav = useNavigate();

  const handleSubmit = (e) => {

      e.preventDefault();

      const pageDetails = {
        ptitle : ptitle,
        text : text,
      }
      localStorage.removeItem("pageDetails");
      localStorage.setItem("pageDetails", JSON.stringify(pageDetails));
      //saves story details as json string

      nav('../Library/Create/Buttons'); // Redirect to buttons

  }

  if (localStorage.getItem("pageDetails")!==null && run === false) {
    //story details already exist, pull them

    setRun(true); //prevents infinite loop

    var newDetails = JSON.parse(localStorage.getItem("pageDetails"));

    //set form data
    setpTitle(newDetails.ptitle);
    setText(newDetails.text);

  }

return (
  <>
  <div className='bground'>
    <div className='d-block w-100' style={{textAlign: "right"}}>
      <p style={{textAlign: 'left'}} className='d-inline float-left m-2 ml-3'>LoA / Library</p>
      <Link to={"../User"}><button className='btn mb-1' type='button'>{UserProfile.getName()} <i className='fa-solid fa-user' /></button></Link>
      <Link to={"../Library/Create/Buttons"}><button className='btn mb-1' type='button'>Close <i className='fa-solid fa-xmark' /></button></Link>
    </div>

    <form onSubmit={handleSubmit}>
        <div className='box'>
            <h3 className='w-100'>Page Title</h3>
            <input className='form-control mr-sm-2' type='search' placeholder='Title' onChange = {(e) => setpTitle(e.target.value)} value = {ptitle} required aria-label='Title' />
        </div>

        <div className='box'>
            <h3 className='w-100'>Text</h3>
            <textarea className='form-control mr-sm-2' placeholder='Text' onChange = {(e) => setText(e.target.value)} value = {text} required aria-label='Text'></textarea>
        </div>

        <div className='box'>
            <h3 className='w-100'>Link</h3>
            <input className='form-control mr-sm-2' type='search' placeholder='Text' aria-label='Text' />
            <input className='form-control mr-sm-2 mt-2' type='search' placeholder='Page' aria-label='Page' />
        </div>

        <Button variation="primary" className='w-100 my-2 my-sm-0 mr-1' type='submit' >Submit</Button>
        </form>

      </div>
      </>
)
}

export default Page;
