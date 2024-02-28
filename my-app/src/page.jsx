import React from 'react';

function Page() {
return (
  <>
        <div className='d-block w-100' style='text-align:right;'>
          <p style='text-align:left;' class='d-inline float-left m-2 ml-3'>LoA / Create</p>
          <button className='btn mb-1' type='button' onClick='location.href=`buttons.js`'>Close <i className='fa-solid fa-xmark'></i></button>
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
</>
)
}

export default Page;
