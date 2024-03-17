import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@aws-amplify/ui-react";
import UserProfile from './userProfile.jsx';
import { useNavigate } from 'react-router-dom';


function Create() {

//https://stackoverflow.com/questions/23929432/submit-form-in-reactjs-using-button-element
  const [title, setTitle] = useState('');
  const [shortDesc, setSDesc] = useState('');
  const [longDesc, setLDesc] = useState('');
  //above required
  const [genre, setGen] = useState('');

  const [run, setRun] = useState(false); //constant bool to prevent loop error


  const nav = useNavigate();

  const handleSubmit = (e) => {

      e.preventDefault();

      const storyDetails = {
        title : title,
        shortDesc : shortDesc,
        longDesc : longDesc,
        genre : genre
      }
      localStorage.removeItem("storyDetails");
      localStorage.setItem("storyDetails", JSON.stringify(storyDetails));
      //saves story details as json string

      nav('./buttons'); // Redirect to buttons

  }

  if (localStorage.getItem("storyDetails")!==null && run === false) {
    //story details already exist, pull them

    setRun(true); //prevents infinite loop

    var newDetails = JSON.parse(localStorage.getItem("storyDetails"));

    //set form data
    setTitle(newDetails.title);
    setSDesc(newDetails.shortDesc);
    setLDesc(newDetails.longDesc);
    setGen(newDetails.genre);

  }



  return (
  <>
    <div className='bground'>
      <div className='d-block w-100' style={{textAlign: "right"}}>
        <p style={{textAlign: 'left'}} className='d-inline float-left m-2 ml-3'>LoA / Library / Create</p>
        <Link to={"../User"}><button className='btn mb-1' type='button'>{UserProfile.getName()} <i className='fa-solid fa-user' /></button></Link>
        <Link to={"../Library"}><button className='btn mb-1' type='button'>Close <i className='fa-solid fa-xmark' /></button></Link>
          </div>

          <form onSubmit={handleSubmit}>
          <div className='box'>
              <h4 className='mr-2'>Title*</h4>
              <input className='form-control mr-sm-2' type='comment' onChange = {(e) => setTitle(e.target.value)} value = {title} required aria-label='Title' />
          </div>

          <div className='box'>
              <h4 className='mr-2'>Short Description*</h4>
              <input className='form-control mr-sm-2' type='comment' onChange = {(e) => setSDesc(e.target.value)} value = {shortDesc} required aria-label='Short Description'/>
          </div>

          <div className='box'>
              <h4 className='mr-2'>Longer Description*</h4>
              <input className='form-control mr-sm-2' type='comment' onChange = {(e) => setLDesc(e.target.value)} value = {longDesc} required aria-label='Longer Description'/>
          </div>

          <div className='box'>
              <h4 className='mr-2'>Genre</h4>
              <select className='custom-select mr-sm-2' onChange = {(e) => setGen(e.target.value)} value = {genre}>
                <option defaultValue> </option>
                <option value='fantasy'>Fantasy</option>
                <option value='sci-fi'>Sci-Fi</option>
                <option value='mystery'>Mystery</option>
              </select>
          </div>
          <i>*Required</i>
          {/*<Link to="Buttons">*/}<Button variation="primary" className='w-100 my-2 my-sm-0 mr-1' type='submit' >Submit</Button>{/*</Link>*/}
          </form>

    </div>
    </>
    )
}
export default Create;
