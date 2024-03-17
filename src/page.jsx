import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserProfile from './userProfile.jsx';
import { Button } from "@aws-amplify/ui-react";
import { useNavigate } from 'react-router-dom';

function Page() {

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

      nav('../library/create/pagelist'); // Redirect to page list

  }

  const handleDelete = (e) => {

  }


  if (localStorage.getItem("pageDetails")!==null && run === false) {
    //story details already exist, pull them

    setRun(true); //prevents infinite loop
    setEmpty(false); //pages already exist

    var newDetails = JSON.parse(localStorage.getItem("pageDetails"));

    //set form data
    //console.log(newDetails);
    setpTitle(newDetails.ptitle);
    setText(newDetails.text);

    return (
      <>
      <div className='bground'>
        <div className='d-block w-100' style={{textAlign: "right"}}>
          <p style={{textAlign: 'left'}} className='d-inline float-left m-2 ml-3'>LoA / Library / Page</p>
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
                <LinkChoice details={ptitle} /> {/*Dropdown box of pages*/}
            </div>

            <Button variation="primary" className='w-100 my-2 my-sm-1 mr-1' type='submit' >Save</Button>
          </form>

          <form onSubmit={handleDelete}>
            <Button variation="primary" className='btn btn-danger w-100 my-2 my-sm-1 mr-1' type='submit' >Delete</Button>
          </form>

          </div>
          </>
    )

  }else {
    return (
      <>
      <div className='bground'>
        <div className='d-block w-100' style={{textAlign: "right"}}>
          <p style={{textAlign: 'left'}} className='d-inline float-left m-2 ml-3'>LoA / Library / Page</p>
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

            <Button variation="primary" className='w-100 my-2 my-sm-1 mr-1' type='submit' >Save</Button>
          </form>

          <form onSubmit={handleDelete}>
            <Button variation="primary" className='btn btn-danger w-100 my-2 my-sm-1 mr-1' type='submit' >Delete</Button>
          </form>

          </div>
          </>
    )
  }

}
export default Page;

function LinkChoice(props) {
  //NEED TO ADD KEY
  const details = props.details

  try{
  return (
    <div>
    <select className='custom-select mt-2 mr-sm-2'>
      <option defaultValue>Page...</option>

      {details.map((det) => (
        <option>{det}</option>

      ))}
    </select>
    </div>
  )}
  catch {
    return; //can't display links
  }
}
