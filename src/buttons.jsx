import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@aws-amplify/ui-react";
import UserProfile from './userProfile.jsx';
import Publish from './publish.jsx';


function Buttons() {

return (
<>
<div className='bground'>
  <div className='d-block w-100' style={{textAlign: "right"}}>
    <p style={{textAlign: 'left'}} className='d-inline float-left m-2 ml-3'>LoA / Library / Create</p>
    <Link to={"../user"}><button className='btn mb-1' type='button'>{UserProfile.getName()} <i className='fa-solid fa-user' /></button></Link>
    <Link to={"../library"}><button className='btn mb-1' type='button'>Close <i className='fa-solid fa-xmark' /></button></Link>
      </div>

        <div className='box'>
            <Link to={"../library/create"}><button className='btn w-100' type='button'>Story Details</button></Link>
        </div>

        <div className='box'>
            <Link to={"../library/create/new_page"}><button className='btn w-100' type='button'>Create Page</button></Link>
        </div>

        <div className='box'>
            <Link to={"../library/create/pagelist"}><button className='btn w-100' type='button'>Page List</button></Link>
        </div>

        <div className='box'>
            <Link to={"../library/create/tags"}><button className='btn w-100' type='button'>Tags (not finished)</button></Link>
        </div>

        <p>Games are saved locally until published.</p>
        <Link to={"../library/create/testing"}><Button variation="primary" className='btn w-100 my-2 my-sm-1 mr-1' type='submit' >Test</Button></Link> {/*Not implemented*/}
        <Publish />
        <Button variation="primary" className='btn btn-danger w-100 my-2 my-sm-1 mr-1' type='submit' >Delete</Button> {/*Not implemented*/}

    </div>
    </>
)
}

export default Buttons;
