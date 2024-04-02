import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

//import { generateClient } from 'aws-amplify/api';
//import { gameInfosByAccountsID } from './graphql/queries';

//works for singular item in storage
function DisplayResult(i) {

    return (
      <>
    <div className='box' onClick={() => localStorage.setItem("storyNum",0)}> {/*set to id*/}
      <div className='card' style={{width: '100%', marginBottom: '20px'}}>
        <Link to={'./create/buttons'} style={{color: 'inherit', textDecoration: 'none'}}>
        <div className='card-body'>
          <h5 className='card-title'>{i.data.title}</h5>
          <p className='card-text d-inline-block'>{i.data.shortDesc}</p>
        </div>
        <ul className='list-group list-group-flush text-secondary'>
          <li className='list-group-item'>#fantasy, #sci-fi</li>
        </ul>
        </Link>
      </div>
    </div>
  </>
  )

}

//user is logged in, check if they have games
function LibraryResult() {

  const [lib, setLib] = useState([{}]);
  //const [loop, setLoop] = useState(true); //takes a second to save
  //var final = [];

  //const client = generateClient();

  /*const results = client.graphql({ query: gameInfosByAccountsID, headers: {
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
 });*/
 const valid = useRef(0);
 const len = useRef(0);

 useEffect(()=>{
   //needs to inform user of validation of why error, ie no pages etc
     if (localStorage.getItem("storyDetails")!==null && valid.current!==1) {

       var storyDetails = JSON.parse(localStorage.getItem("storyDetails"));
       //console.log(storyDetails);
       setLib(storyDetails);
       valid.current = 1;
       len.current = storyDetails.length;
     }
   }, []); // empty array means only once

   if (valid.current!==1) {
     return (
       <h3 className='text-center mb-5'>Your library is empty!</h3>
     ) //still fires more than once
   }else {
     for (var i=0; i < len.current; i++) {
       return (
         <DisplayResult data={lib[i]}/>
       )
    }
   }

}
export default LibraryResult;
