import React from 'react';
import { Link } from 'react-router-dom';

function Create() {
return (
<>
  <div className='bground'>
    <div className='d-block w-100' style={{textAlign: "right"}}>
      <p style={{textAlign: 'left'}} className='d-inline float-left m-2 ml-3'>LoA / Library</p>
      <Link to={"../Library"}><button className='btn mb-1' type='button'>Close <i className='fa-solid fa-xmark' /></button></Link>
        </div>

        <div className='box'>
            <h4 className='mr-2'>Title</h4>
            <input className='form-control mr-sm-2' type='comment' placeholder='Title' required aria-label='Title'/>
        </div>

        <div className='box'>
            <h4 className='mr-2'>Short Description</h4>
            <input className='form-control mr-sm-2' type='comment' placeholder='Short Description' required aria-label='Short Description'/>
        </div>

        <div className='box'>
            <h4 className='mr-2'>Longer Description</h4>
            <input className='form-control mr-sm-2' type='comment' placeholder='Longer Description' required aria-label='Longer Description'/>
        </div>

        <div className='box'>
            <h4 className='mr-2'>Genre</h4>
            <select className='custom-select mr-sm-2'>
              <option selected>Genre...</option>
              <option value='1'>Fantasy</option>
              <option value='2'>Sci-Fi</option>
              <option value='3'>Mystery</option>
            </select>
        </div>

        <Link to={"Buttons"}><button className='btn btn-primary w-100 my-2 my-sm-0 mr-1' type='submit'>Submit</button></Link>

    </div>
    </>
)
}

export default Create;
