import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserProfile from './userProfile.jsx';
import { Button } from "@aws-amplify/ui-react";
import { useNavigate } from 'react-router-dom';

function NewPage() {

  const [pID, setpID] = useState('');
  const [ptitle, setpTitle] = useState('');
  const [text, setText] = useState('');

  const [run, setRun] = useState(false); //constant bool to prevent loop error
  const [empty, setEmpty] = useState(true); //is list empty

  const nav = useNavigate();

  const handleSubmit = (e) => {

      e.preventDefault();

      const pageDetails = [
         {
           ptitle : ptitle,
           text : text,
         }
      ]

      //checks if pages already exist
      if (empty) {
        localStorage.setItem("pageDetails", JSON.stringify(pageDetails));
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

    //set form data
    //setpID(newDetails);
    setpTitle(newDetails.ptitle);
    setText(newDetails.text);

    return (
      <>
      <div className='bground'>
        <div className='d-block w-100' style={{textAlign: "right"}}>
          <p style={{textAlign: 'left'}} className='d-inline float-left m-2 ml-3'>LoA / Library  / New Page</p>
          <Link to={"../user"}><button className='btn mb-1' type='button'>{UserProfile.getName()} <i className='fa-solid fa-user' /></button></Link>
          <Link to={"../library/create/buttons"}><button className='btn mb-1' type='button'>Close <i className='fa-solid fa-xmark' /></button></Link>
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
                <select className='custom-select mt-2 mr-sm-2'>
                  <option defaultValue>Page...</option>
                  <option value={pID}>{ptitle}</option>
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
          <div className='d-block w-100' style={{textAlign: "right"}}>
            <p style={{textAlign: 'left'}} className='d-inline float-left m-2 ml-3'>LoA / Library  / New Page</p>
            <Link to={"../user"}><button className='btn mb-1' type='button'>{UserProfile.getName()} <i className='fa-solid fa-user' /></button></Link>
            <Link to={"../library/create/buttons"}><button className='btn mb-1' type='button'>Close <i className='fa-solid fa-xmark' /></button></Link>
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

              <Button variation="primary" className='w-100 my-2 my-sm-1 mr-1' type='submit' >Submit</Button>
              </form>

            </div>
            </>
      )
    }
}



export default NewPage;
