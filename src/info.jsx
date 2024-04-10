import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@aws-amplify/ui-react";
import { generateClient } from 'aws-amplify/api';
import { getAccountsByID } from './graphql/queries';
import Header from './header.jsx';


function Info() {


if (localStorage.getItem("infoDets")!==null) {
  var infoDet = JSON.parse(localStorage.getItem("infoDets"));
  if (infoDet.user===undefined) {
    //fetch username and rewrite infoDet
    infoDet.user = "User"; //cant create query to search by id as the username is primarykey
    //set info details locally to save querying again for information page
    //get username from id
    /*const client = generateClient();
    const userResults = client.graphql({ query: getAccountsByID, variables: {id: infoDet.userID}
      }).then(function(v) { // `delay` returns a promise
        //worked, pages should exist
        console.log(v);
        infoDet.user = "Success";
        localStorage.setItem("infoDets",JSON.stringify(infoDet));

      })
      .catch(function(v) {
        // Or do something else if it is rejected
        // (it would not happen in this example, since `reject` is not called).
        console.log("Error, cant find username");
        infoDet.user = "Error";
        localStorage.setItem("infoDets",JSON.stringify(infoDet));
      });*/
  }else {
    //console.log(infoDet.user);
  }

  return (
  <>
  <div className='bground'>
  <Header link={"../search"} location={"tB / Search"} />

          <div className='box'>
            <h3 className='d-inline-block'>{infoDet.title}</h3> {/*<!--Name-->*/}
            <p>By: {infoDet.user}</p>
            <p>{infoDet.longDesc}</p>
            <p>#tags #cool #mystery</p>
            <Link to={"../play"}> <Button variation='primary' className='btn w-100 my-2 my-sm-1 mr-1' type='button'>Play</Button></Link>
          </div>


          {/*<div className='box'>
            <form className='form-inline'>
              <input className='form-control mr-sm-2 w-75' type='comment' placeholder='Comment' required aria-label='Comment' />
              <Button variation='primary' className='my-2 my-sm-0 mr-1' type='button'>Comment <i className='fa-solid fa-comment'></i></Button>
              </form>
          </div>

          <div className='box'>
            <div className='container'>
              <div className='row'>
                <div className='col-sm-2'>
                  <tB className='text-center'>User</b>
                </div>
                <div className='col-7'>
                  <p className='text-faded mb-1'>03/01/2023 16:31:08</p>
                  <p>Wow nice comment</p>
                </div>
              </div>
            </div>
          </div>*/}

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
            <p>By: Error</p>
            <p>{'An error must have occured because you shouldn`t be seeing this text. InfoDets from local storage appears to be missing.'}</p>
            <p>#tags #cool #mystery</p>
          </div>

          {/*<div className='box'>
            <form className='form-inline'>
              <input className='form-control mr-sm-2 w-75' type='comment' placeholder='Comment' required aria-label='Comment' />
              <Button variation='primary' className='my-2 my-sm-0 mr-1' type='button'>Comment <i className='fa-solid fa-comment'></i></Button>
              </form>
          </div>

          <div className='box'>
            <div className='container'>
              <div className='row'>
                <div className='col-sm-2'>
                  <tB className='text-center'>User</b>
                </div>
                <div className='col-7'>
                  <p className='text-faded mb-1'>03/01/2023 16:31:08</p>
                  <p>Wow nice comment</p>
                </div>
              </div>
            </div>
          </div>*/}

        </div>
      	</>
  )
}

}
export default Info;
