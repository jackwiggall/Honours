import React, { useState } from 'react';
import { Button } from "@aws-amplify/ui-react";
import { useNavigate } from 'react-router-dom';

import { generateClient } from 'aws-amplify/api';
import { getAccounts } from './graphql/queries';

import UserProfile from './userProfile.jsx';
import Header from './header.jsx';

function CheckValid(i, u) {

  const client = generateClient();
  console.log(i);
  console.log(u);
  const pageResults = client.graphql({ query: getAccounts, variables: {username: u},
  }).then(function(v) { // `delay` returns a promise
    //worked, pages should exist

    console.log(v.data.getAccounts);
    if (i===v.data.getAccounts.id&&u===v.data.getAccounts.username) {
      UserProfile.setName(u);
      UserProfile.setID(i);
      //console.log("working?");
    } else {
      throw "not valid passkey";
    }
  })
  .catch(function(v) {
    // Or do something else if it is rejected
    // (it would not happen in this example, since `reject` is not called).
    console.log("Error, item not in db or doesnt match");
  });


}

function Login() {

  const nav = useNavigate();
  const [user, setUser] = useState("");
  const [key, setKey] = useState("");

  const handleSubmit = (e) => {

      e.preventDefault();

      CheckValid(key,user);
      if (UserProfile.getName()!=="Login") {
        nav("../");
      }
  }

return (
      <>
      <div className='bground'>
      <Header link={"../"} location={"LoA / User"} />

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
)
}

export default Login;
