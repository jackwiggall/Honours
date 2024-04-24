import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@aws-amplify/ui-react";
import UserProfile from './userProfile.jsx';
import { useNavigate } from 'react-router-dom';

function RewriteArray(props,page) {
  //check if already in array and rewrite page if so

    const details = props;
    var newObj = [{}];
    var count = 0;
    details.forEach((det) =>

      {if (det.localID!==page.localID) {
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


function Create() {

//https://stackoverflow.com/questions/23929432/submit-form-in-reactjs-using-button-element
  const [prev, setPrev] = useState([{}]); //previous storyDetails

  const [title, setTitle] = useState('');
  const [shortDesc, setSDesc] = useState('');
  const [longDesc, setLDesc] = useState('');
  //above required
  const [genre, setGen] = useState('');
  const [run, setRun] = useState(false); //constant bool to prevent loop error

  var storyNum = useRef(-1);
  var localID = useRef(0);
  var newEntry = useRef(true);
  var firstEntry = useRef(true);

  const nav = useNavigate();

  const handleSubmit = (e) => {

      e.preventDefault();
      var storyDetails = [{}];
      //first story
      if (firstEntry.current!==true) {
        if (newEntry.current) {
          //new story
          storyDetails = [
            ...prev.slice(0,localID.current),
            // New item:
            {
              localID : localID.current,
              title : title,
              shortDesc : shortDesc,
              longDesc : longDesc,
              genre : genre
            },
            ...prev.slice(localID.current),
          ];
          localStorage.setItem("storyNum",localID.current);
          //set pages to empty
          var pageDetails = JSON.parse(localStorage.getItem("pageDetails"));
          var newPages = [
          ...pageDetails.slice(0,localID.current),
          {},
          ...pageDetails.slice(localID.current),
        ];
          localStorage.setItem("pageDetails",JSON.stringify(newPages));
        }else {
          //edit story when some already exist
          const newDetails =
            {
              localID : localID.current,
              title : title,
              shortDesc : shortDesc,
              longDesc : longDesc,
              genre : genre,
            };
          storyDetails = RewriteArray(prev, newDetails);
          localStorage.setItem("storyNum",storyNum.current);
          //localStorage.setItem("pageDetails",JSON.stringify([{}]));
        }
      }else {
        //first story
        storyDetails = [
          {
            localID : 0,
            title : title,
            shortDesc : shortDesc,
            longDesc : longDesc,
            genre : genre
          },
        ];
        localStorage.setItem("storyNum",0);
        localStorage.setItem("pageDetails",JSON.stringify([{}]));
      }
      localStorage.removeItem("storyDetails");
      localStorage.setItem("storyDetails", JSON.stringify(storyDetails));

      //saves story details as json string

      nav('./buttons'); // Redirect to buttons
  }

  if (localStorage.getItem("storyDetails")!==null && run === false) {
    //story details already exist, pull them

    setRun(true); //prevents infinite loop
    firstEntry.current = false;

    var newDetails = JSON.parse(localStorage.getItem("storyDetails"));
    setPrev(newDetails);

    if (localStorage.getItem("storyNum")!==null) {
      storyNum.current = Number(localStorage.getItem("storyNum")); //add try catch security
      //set form data
      newEntry.current = false;

      if (storyNum.current>-1) {
        setTitle(newDetails[storyNum.current].title);
        setSDesc(newDetails[storyNum.current].shortDesc);
        setLDesc(newDetails[storyNum.current].longDesc);
        setGen(newDetails[storyNum.current].genre);
        localID.current = newDetails[storyNum.current].localID;
        storyNum.current = 0;
      }
    }  else {
      setTitle("");
      setSDesc("");
      setLDesc("");
      localID.current = newDetails.length; //sets new id of story to length of list
    }
  }

  return (
  <>
    <div className='bground'>
      <div className='d-block w-100' style={{textAlign: "right"}}>
        <p style={{textAlign: 'left'}} className='d-inline float-left m-2 ml-3'>tB / Library / Create</p>
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
          <Button variation="primary" className='w-100 my-2 my-sm-0 mr-1' type='submit' >Submit</Button>
          </form>

    </div>
    </>
    )
}
export default Create;
