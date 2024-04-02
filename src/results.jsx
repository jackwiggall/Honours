import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { generateClient } from 'aws-amplify/api';

import { listGameInfos } from './graphql/queries';


function LoopedResult() {
  //NEED TO ADD KEY
  //SHOWS ALL PAGES
  var run = useRef(false);
  const [res, setRes] = useState([{}]);

  if (!run.current) {
    //still runs twice, doesnt prevent single run
    run.current = true;

    const client = generateClient();
    const results = client.graphql({ query: listGameInfos, limit: 1}) //change limit later, just to save network/query space
    .then(function(v) { // `delay` returns a promise
      //console.log(v.data.listGameInfos.items); // Log the value once it is resolved

        setRes(v.data.listGameInfos.items);

    }) //change limit once working
    .catch(function(v) {
      // Or do something else if it is rejected
      // (it would not happen in this example, since `reject` is not called).
      console.log("error");
    });
  }
  if (res.length!==0) {
    for (var i=0; i < res.length; i++) {
      //console.log(res[i]);
      return (
        <DisplayResults data={res[i]}/>
      )
   }
  }else {
    return (
      <h2 className='centre' style={{marginTop: "5px"}}>No Results!</h2>
    )
  }
}

function DisplayResults(i) {
  //console.log(i.data); //takes a second to load

  //set info details locally to save querying again for information page
  const infoDet = {
      gameID : i.data.id,
      title : i.data.title,
      longDesc : i.data.longDesc,
    }

    return (
      <>
    <div className='box' onClick={() => localStorage.setItem("infoDets",JSON.stringify(infoDet))}> {/*set to id*/}
      <div className='card' style={{width: '100%', marginBottom: '20px'}}>
        <Link to={'./info'} style={{color: 'inherit', textDecoration: 'none'}}>
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

function Results() {

  var run = useRef(false);

    if (!run.current) {
      //var results = client.graphql({ query: listGameInfos, limit: 3});
      //console.log(results); //can get results just not able to display them
      run.current = true;
      return (
        <div>
          <LoopedResult />
        </div>
      )
    }



}
export default Results;
