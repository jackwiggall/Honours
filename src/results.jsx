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
      const results = client.graphql({ query: listGameInfos, limit: 3}) //limit no work
      .then(function(v) { // `delay` returns a promise

          setRes(v.data.listGameInfos.items);
          localStorage.setItem("searchRes",JSON.stringify(v.data.listGameInfos.items));

      }) //change limit once working
      .catch(function(v) {
        // Or do something else if it is rejected
        // (it would not happen in this example, since `reject` is not called).
        console.log(v);
      });
    }else {
      var searchRes = JSON.parse(localStorage.getItem("searchRes"));
      setRes(searchRes);
    }
  }
  if (res.length!==0) {

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
          </Link>
        </div>
      </div>
    </>
  )}
}

function Results() {
  localStorage.removeItem("gameDetails");
  var run = useRef(false);

    if (!run.current) {
      run.current = true;
      return (
        <div>
          <LoopedResult />
        </div>
      )
    }
}
export default Results;
