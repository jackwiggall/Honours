import React from 'react';
import { Link } from 'react-router-dom';

function Info() {
return (
<>
<div className='bground'>
  <div className='d-block w-100' style={{textAlign: "right"}}>
    <p style={{textAlign: 'left'}} className='d-inline float-left m-2 ml-3'>LoA / Library</p>
    <Link to={"../search"}><button className='btn mb-1' type='button'>Close <i className='fa-solid fa-xmark' /></button></Link>
      </div>

        <div className='box'>
          <img src='' style={{maxWidth: '100%'}} alt='...' />
        </div>

        <div className='box'>
          <h3 className='d-inline-block'>Title</h3> {/*<!--Name-->*/}
          <h4 className='d-inline-block float-right'> 2 <i className='fa-solid fa-eye'></i> {/*<!--Views-->*/}
          3 <i className='fa-solid fa-heart'></i> {/*<!--Likes-->*/}
          1 <i className='fa-solid fa-comment'></i></h4> {/*<!--Comments-->*/}
          <p>By: User</p>
          <p>In a world where lorem ipsum, a legendary lorem commits to filling out this description.</p>
          <p>#tags #cool #mystery</p>
        </div>

        <div className='box'>
          <form className='form-inline'>
            <input className='form-control mr-sm-2 w-75' type='comment' placeholder='Comment' required aria-label='Comment' />
            <button className='btn btn-primary my-2 my-sm-0 mr-1' type='button'>Comment <i class='fa-solid fa-comment'></i></button>
            </form>
        </div>

        <div className='box'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-2'>
                <img src='' style={{width: '100%', aspectRatio: '1 / 1'}} alt='...' />
                <b className='text-center'>User</b>
              </div>
              <div className='col-7'>
                <p className='text-faded mb-1'>03/01/2023 16:31:08</p>
                <p>Wow nice comment</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    	</>
)
}
export default Info;
