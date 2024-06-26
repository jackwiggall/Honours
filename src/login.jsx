import React, { useState } from 'react';
import { Button } from "@aws-amplify/ui-react";
import { useNavigate } from 'react-router-dom';

import { generateClient } from 'aws-amplify/api';
import { getAccounts } from './graphql/queries';

import UserProfile from './userProfile.jsx';
import Header from './header.jsx';

function CheckValid(i, u) {

  const client = generateClient();
  if (i!==""&&u!=="") { //make sure not empty button press
      client.graphql({ query: getAccounts, variables: {username: u},
    }).then(function(v) { // `delay` returns a promise
      //worked, pages should exist

      if (i===v.data.getAccounts.id&&u===v.data.getAccounts.username) {
        UserProfile.setName(u);
        UserProfile.setID(i);
      } else {
        throw v; //invalid object
      }
    })
    .catch(function(v) {
      // Or do something else if it is rejected
      // (it would not happen in this example, since `reject` is not called).
      console.log(v);
    });
  }
}

function Login() {

  const nav = useNavigate();
  const [user, setUser] = useState("");
  const [key, setKey] = useState("");

  const handleSubmit = (e) => {

      e.preventDefault();

      CheckValid(key,user); //adds to db if username not taken
      if (UserProfile.getName()!=="Login") {
        nav("../user");
      }
  }

return (
      <>
      <div className='bground'>
      <Header link={"../"} location={"tB / User"} />

        <h3 className='text-center mb-3'>Login</h3>

        <form onSubmit={handleSubmit}>
        <div className='box'>
            <h4 className='mr-2'>Username</h4>
            <input className='form-control mr-sm-2' id='username' type='comment' onChange={(e) => setUser(e.target.value)} value={user} placeholder='Username' required aria-label='Username'/>
        </div>
        <div className='box'>
            <h4 className='mr-2'>Passkey</h4>
            <input className='form-control mr-sm-2' id='passkey' type='comment' onChange={(e) => setKey(e.target.value)} value={key} placeholder='Passkey' required aria-label='Passkey'/>
        </div>

        <Button variation="primary" className='btn w-100 my-2 my-sm-0 mr-1' type='submit' >Submit</Button> {/*Set to username*/}
        </form>
      </div>
    	</>
)}
export default Login;
