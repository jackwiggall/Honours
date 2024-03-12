import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@aws-amplify/ui-react";
import UserProfile from './userProfile.jsx';

function Buttons() {
return (
<>
<div className='bground'>
  <div className='d-block w-100' style={{textAlign: "right"}}>
    <p style={{textAlign: 'left'}} className='d-inline float-left m-2 ml-3'>LoA / Library</p>
    <Link to={"../User"}><button className='btn mb-1' type='button'>{UserProfile.getName()} <i className='fa-solid fa-user' /></button></Link>
    <Link to={"../Library"}><button className='btn mb-1' type='button'>Close <i className='fa-solid fa-xmark' /></button></Link>
      </div>

        <div className='box'>
            <Link to={"../Library/Create"}><button className='btn w-100' type='button'>Story Details</button></Link>
        </div>

        <div className='box'>
            <Link to={"../Library/Create/Page"}><button className='btn w-100' type='button'>Create Page</button></Link>
        </div>

        <div className='box'>
            <Link to={"../Library/Create/Tags"}><button className='btn w-100' type='button'>Tags</button></Link>
        </div>

        <div className='box'>
            <button className='btn w-100' type='button' onClick={'alert(`Change font etc`)'}>Text Format</button>
        </div>

        <div className='box'>
            <button className='btn w-100' type='button' onClick={'alert(`Upload images`)'}>Images</button>
        </div>

        <Button variation="primary" className='w-100 my-2 my-sm-0 mr-1' type='button' onClick={'alert(`You cannot publish yet!`)'}>Publish</Button>

    </div>
    </>
)
}

export default Buttons;
