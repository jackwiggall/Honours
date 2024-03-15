import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { generateClient } from 'aws-amplify/api';
import { gameInfosByAccountsID } from './graphql/queries';

function displayResult(final) {
    return (
      <>
    {final.map((i) => ( //gets variables just cant render display

    <div className='box'>
      <div className='card' style={{width: '100%', marginBottom: '20px'}}>
        <Link to={'./Create'} style={{color: 'inherit', textDecoration: 'none'}}>
        <div className='card-body'>
          <h5 className='card-title'>{i.title}</h5>
          <p className='card-text d-inline-block'>{i.shortDesc}</p>
        </div>
        <ul className='list-group list-group-flush text-secondary'>
          <li className='list-group-item'>#fantasy, #sci-fi</li>
        </ul>
        </Link>
      </div>
    </div>
  ))
  }
  </>
  )
}

//user is logged in, check if they have games
function LibraryResult() {

  //const [lib, setLib] = useState([{}]);
  const [loop, setLoop] = useState(true); //takes a second to save
  var final = [];

  const client = generateClient();

  const results = client.graphql({ query: gameInfosByAccountsID, headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  }, variables: {accountsID: "8e7829a9-ec07-4b64-8170-d31b7101522e"}, limit: 3});

//runs several times?
  results
  .then((value) => {
    if (loop) { //doesnt prevent loop
      setLoop(false);
      //setLib(value.data.gameInfosByAccountsID.items);//cant use cause timer delay
      final = value.data.gameInfosByAccountsID.items;
      //console.log(final);
    if (loop) { //doesnt prevent loop
      try { //doesnt render
        displayResult(final);
      }
      catch {}
    }
    }
  })
  .catch((err) => {
    console.error(err);
    return (
      <h3 className='text-center mb-5'>Your library is empty!</h3>
    )
 });




}
export default LibraryResult;
