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
  <Header link={"../search"} location={"tB / Search"} />

          <div className='box'>
            <h3 className='d-inline-block'>{infoDet.title}</h3> {/*<!--Name-->*/}
            <p>{infoDet.longDesc}</p>
            <Link to={"../play"}> <Button variation='primary' className='btn w-100 my-2 my-sm-1 mr-1' type='button'>Play</Button></Link>
          </div>

        </div>
      	</>
  )

}else {
  //display for if viewing page with no information saved
  return (
  <>
  <div className='bground'>
  <Header link={"../search"} location={"tB / Search"} />

          <div className='box'>
            <h3 className='d-inline-block'>{'Error'}</h3> {/*<!--Name-->*/}
            <h4 className='d-inline-block float-right'> 2 <i className='fa-solid fa-eye'></i> {/*<!--Views-->*/}
            3 <i className='fa-solid fa-heart'></i> {/*<!--Likes-->*/}
            1 <i className='fa-solid fa-comment'></i></h4> {/*<!--Comments-->*/}
            <p>{'An error must have occured because you shouldn`t be seeing this text. InfoDets from local storage appears to be missing.'}</p>
            <p>#tags #cool #mystery</p>
          </div>

        </div>
      	</>
  )
}

}
export default Info;
