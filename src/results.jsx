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

    if (localStorage.getItem("searchRes")===null) {
      const client = generateClient();
      const results = client.graphql({ query: listGameInfos, limit: 3}) //change limit later, just to save network/query space
      .then(function(v) { // `delay` returns a promise
        //console.log(v.data.listGameInfos.items); // Log the value once it is resolved

          setRes(v.data.listGameInfos.items);
          localStorage.setItem("searchRes",JSON.stringify(v.data.listGameInfos.items));

      }) //change limit once working
      .catch(function(v) {
        // Or do something else if it is rejected
        // (it would not happen in this example, since `reject` is not called).
        console.log("error");
      });
    }else {
      var searchRes = JSON.parse(localStorage.getItem("searchRes"));
      //console.log(searchRes);
      setRes(searchRes);
    }
  }
  if (res.length!==0) {
    //console.log(res.length);
    //console.log(res);

    //loop through results and display
    return (
      <>
        {res.map((data) => (
          // Return the element. Also pass key
          <DisplayResults data={data} />
        ))}
      </>
      )

  }else {
    return (
      <h2 className='centre' style={{marginTop: "5px"}}>No Results!</h2>
    )
  }
}

function DisplayResults(i) {
  //console.log(i); //takes a second to load

  if (i.data!==undefined) {
    const infoDet = {
        userID : i.data.accountsID,
        gameID : i.data.id,
        title : i.data.title,
        longDesc : i.data.longDesc,
      }

      return (
        <>
      <div className='box' onClick={() => localStorage.setItem("infoDets",JSON.stringify(infoDet))}> {/*set to id*/}
        <div className='card' style={{width: '100%'}}>
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
  )}
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
