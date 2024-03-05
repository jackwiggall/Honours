import React from 'react';
import { Link } from 'react-router-dom';

function Tags() {
return (
    <>
    <div className='bground'>
      <div className='d-block w-100' style={{textAlign: "right"}}>
        <p style={{textAlign: 'left'}} className='d-inline float-left m-2 ml-3'>LoA / Library</p>
        <Link to={"../Library/Create/Buttons"}><button className='btn mb-1' type='button'>Close <i className='fa-solid fa-xmark' /></button></Link>
      </div>

        <div className='box'>
            <h3 className='w-100'>Tag List</h3>
        </div>

        <div className='box'>
           <input type='checkbox' aria-label='Sci-Fi' /> Sci-Fi<br/>
           <input type='checkbox' aria-label='Fantasy' checked /> Fantasy<br/>
           <input type='checkbox' aria-label='Original' checked /> Original<br/>
           <input type='checkbox' aria-label='Mystery' /> Mystery<br/>
           <input type='checkbox' aria-label='TV' /> TV<br/>
           <input type='checkbox' aria-label='Film' /> Film<br/>
           <input type='checkbox' aria-label='Book' /> Book<br/>
        </div>

      </div>
      </>

)
}

export default Tags;
