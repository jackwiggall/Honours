import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserProfile from './userProfile.jsx';
import { Button } from "@aws-amplify/ui-react";
import { useNavigate } from 'react-router-dom';

function Tags() {

  //const [tags, setTags] = useState('');

  const [scifi, setScifi] = useState(false);
  const [fantasy, setFantasy] = useState(false);
  const [mystery, setMystery] = useState(false);
  const [original, setOriginal] = useState(false);
  const [tv, setTV] = useState(false);
  const [film, setFilm] = useState(false);
  const [book, setBook] = useState(false);


  const [run, setRun] = useState(false); //constant bool to prevent loop error

  const nav = useNavigate();

  const handleSubmit = (e) => {

      e.preventDefault();

      const tagList = {
        scifi: scifi,
        fantasy: fantasy,
        mystery: mystery,
        original: original,
        tv: tv,
        film: film,
        book: book,

      }
      localStorage.removeItem("tagList");
      localStorage.setItem("tagList", JSON.stringify(tagList));
      //saves story details as json string

      nav('../library/create/buttons'); // Redirect to buttons

  }

  if (localStorage.getItem("tagList")!==null && run === false) {
    //story details already exist, pull them

    setRun(true); //prevents infinite loop

    var newDetails = JSON.parse(localStorage.getItem("tagList"));

    //set form data
    //setTags(newDetails);
    console.log(newDetails);

    setScifi(newDetails.scifi);
    setFantasy(newDetails.fantasy);
    setMystery(newDetails.mystery);
    setOriginal(newDetails.original);
    setTV(newDetails.tv);
    setFilm(newDetails.film);
    setBook(newDetails.book);

  }

return (
    <>
    <div className='bground'>
      <div className='d-block w-100' style={{textAlign: "right"}}>
        <p style={{textAlign: 'left'}} className='d-inline float-left m-2 ml-3'>LoA / Library</p>
        <Link to={"../user"}><button className='btn mb-1' type='button'>{UserProfile.getName()} <i className='fa-solid fa-user' /></button></Link>
        <Link to={"../library/create/buttons"}><button className='btn mb-1' type='button'>Close <i className='fa-solid fa-xmark' /></button></Link>
      </div>

        <div className='box'>
            <h3 className='w-100'>Tag List</h3>
        </div>

        <form onSubmit={handleSubmit}>
        <div className='box'>
           <input type='checkbox' aria-label='Sci-Fi' defaultChecked={scifi} onChange = {(e) => setScifi(e.target.checked)} value={scifi} /> Sci-Fi<br/>
           <input type='checkbox' aria-label='Fantasy' defaultChecked={fantasy} onChange = {(e) => setFantasy(e.target.checked)}  value={fantasy} /> Fantasy<br/>
           <input type='checkbox' aria-label='Original' defaultChecked={original} onChange = {(e) => setOriginal(e.target.checked)} value={original} /> Original<br/>
           <input type='checkbox' aria-label='Mystery' defaultChecked={mystery} onChange = {(e) => setMystery(e.target.checked)} value={mystery} /> Mystery<br/>
           <input type='checkbox' aria-label='TV' defaultChecked={tv} onChange = {(e) => setTV(e.target.checked)} value={tv} /> TV<br/>
           <input type='checkbox' aria-label='Film' defaultChecked={film} onChange = {(e) => setFilm(e.target.checked)} value={film} /> Film<br/>
           <input type='checkbox' aria-label='Book' defaultChecked={book} onChange = {(e) => setBook(e.target.checked)} value={book} /> Book<br/>
        </div>

        <Button variation="primary" className='w-100 my-2 my-sm-0 mr-1' type='submit' >Submit</Button>
        </form>

      </div>
      </>

)
}

export default Tags;
