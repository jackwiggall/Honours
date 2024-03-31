import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//import { generateClient } from 'aws-amplify/api';

//import { listGameInfos } from './graphql/queries';

{/*function LoopedResult() {
  //NEED TO ADD KEY
  //SHOWS ALL PAGES
  const client = generateClient();
  const results = client.graphql({ query: listGameInfos, limit: 3});
  console.log(results);

  const details = results.data.listGameInfos.items;
  console.log(`boxes ${details}`);
  try {
    return (
      <div>
      {details.data.listGameInfos.map((item) => (
        <div className='box'>
          <div className='card' style={{width: '100%', marginBottom: '20px'}}>
            <Link to={"./info"} style={{color: 'inherit', textDecoration: 'none'}}>
            <div className='card-body'>
              <h5 className='card-title'>{item.title}</h5>
              <p className='card-text d-inline-block'>{item.shortDesc}</p>
            </div>
            <ul className='list-group list-group-flush text-secondary'>
              <li className='list-group-item'>#fantasy, #sci-fi</li>
            </ul>
            </Link>
          </div>
        </div>

      ))}

      </div>
    )}
  catch {
    <h2 className='centre' style={{marginTop: "5px"}}>No Results!</h2>
  }
}*/}

function Results() {

  const [result, setResult] = useState(false);

  useEffect(()=>{
    //
    if (!result) {
      //var results = client.graphql({ query: listGameInfos, limit: 3});
      //console.log(results); //can get results just not able to display them
      setResult(true);
      return () => (
        <div>
          {/*<LoopedResult />*/}
          <h2>Hi</h2>
        </div>
      )
    }

    }, []); // empty array means only once

    <div className='box'>
      <div className='card' style={{width: '100%', marginBottom: '20px'}}>
        <Link to={"./info"} style={{color: 'inherit', textDecoration: 'none'}}>
        <div className='card-body'>
          <h5 className='card-title'>{'item.title'}</h5>
          <p className='card-text d-inline-block'>{'item.shortDesc'}</p>
        </div>
        <ul className='list-group list-group-flush text-secondary'>
          <li className='list-group-item'>#fantasy, #sci-fi</li>
        </ul>
        </Link>
      </div>
    </div>

}
export default Results;
