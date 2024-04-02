import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@aws-amplify/ui-react";

import Header from './header.jsx';

function Info() {


if (localStorage.getItem("infoDets")!==null) {
  var infoDet = JSON.parse(localStorage.getItem("infoDets"));

  return (
  <>
  <div className='bground'>
  <Header link={"../search"} location={"LoA / Search"} />

          <div className='box'>
            <h3 className='d-inline-block'>{infoDet.title}</h3> {/*<!--Name-->*/}
            <h4 className='d-inline-block float-right'> 2 <i className='fa-solid fa-eye'></i> {/*<!--Views-->*/}
            3 <i className='fa-solid fa-heart'></i> {/*<!--Likes-->*/}
            1 <i className='fa-solid fa-comment'></i></h4> {/*<!--Comments-->*/}
            <p>By: User</p>
            <p>{infoDet.longDesc}</p>
            <p>#tags #cool #mystery</p>
            <Link to={"../play"}> <Button variation='primary' className='btn w-100 my-2 my-sm-1 mr-1' type='button'>Play</Button></Link>
          </div>


          <div className='box'>
            <form className='form-inline'>
              <input className='form-control mr-sm-2 w-75' type='comment' placeholder='Comment' required aria-label='Comment' />
              <Button variation='primary' className='my-2 my-sm-0 mr-1' type='button'>Comment <i className='fa-solid fa-comment'></i></Button>
              </form>
          </div>

          <div className='box'>
            <div className='container'>
              <div className='row'>
                <div className='col-sm-2'>
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

}else {
  //display for if viewing page with no information saved
  return (
  <>
  <div className='bground'>
  <Header link={"../search"} location={"LoA / Search"} />

          <div className='box'>
            <h3 className='d-inline-block'>{'Error'}</h3> {/*<!--Name-->*/}
            <h4 className='d-inline-block float-right'> 2 <i className='fa-solid fa-eye'></i> {/*<!--Views-->*/}
            3 <i className='fa-solid fa-heart'></i> {/*<!--Likes-->*/}
            1 <i className='fa-solid fa-comment'></i></h4> {/*<!--Comments-->*/}
            <p>By: User</p>
            <p>{'An error must have occured because you shouldn`t be seeing this page. InfoDets from local storage appears to be missing.'}</p>
            <p>#tags #cool #mystery</p>
          </div>

          <div className='box'>
            <form className='form-inline'>
              <input className='form-control mr-sm-2 w-75' type='comment' placeholder='Comment' required aria-label='Comment' />
              <Button variation='primary' className='my-2 my-sm-0 mr-1' type='button'>Comment <i className='fa-solid fa-comment'></i></Button>
              </form>
          </div>

          <div className='box'>
            <div className='container'>
              <div className='row'>
                <div className='col-sm-2'>
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

}
export default Info;
