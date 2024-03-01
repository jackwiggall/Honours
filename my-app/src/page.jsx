import React from 'react';
import { Link } from 'react-router-dom';

function Page() {
return (
  <>
  <div className='bground'>
    <div className='d-block w-100' style={{textAlign: "right"}}>
      <p style={{textAlign: 'left'}} className='d-inline float-left m-2 ml-3'>LoA / Library</p>
      <Link to={"../Library/Create/Buttons"}><button className='btn mb-1' type='button'>Close <i className='fa-solid fa-xmark' /></button></Link>
    </div>

        <div className='box'>
            <h3 className='w-100'>Page Title</h3>
            <input className='form-control mr-sm-2' type='search' placeholder='Title' aria-label='Title' />
        </div>

        <div className='box'>
            <h3 className='w-100'>Text</h3>
            <textarea className='form-control mr-sm-2' placeholder='Text' aria-label='Text'></textarea>
        </div>

        <div className='box'>
            <h3 className='w-100'>Link</h3>
            <input className='form-control mr-sm-2' type='search' placeholder='Text' aria-label='Text' />
            <input className='form-control mr-sm-2 mt-2' type='search' placeholder='Page' aria-label='Page' />
        </div>

      </div>
      </>
)
}

export default Page;
