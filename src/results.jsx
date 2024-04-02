import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { generateClient } from 'aws-amplify/api';

import { listGameInfos } from './graphql/queries';

function LoopedResult() {
  //NEED TO ADD KEY
  //SHOWS ALL PAGES
  const client = generateClient();
  const results = client.graphql({ query: listGameInfos, limit: 1}); //change limit once working
  console.log(results);
  const details = results.data;
  console.log(`boxes ${details}`); //returning undefined?
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
}

function Results() {

  var run = useRef(false);

    if (!run.current) {
      //var results = client.graphql({ query: listGameInfos, limit: 3});
      //console.log(results); //can get results just not able to display them
      run.current = true;
      return (
        <div>
          {/*<LoopedResult /> {/*Still runs twice even tho rendered once with ref*/}
          {/*Disabled query rn as not working*/}
        </div>
      )
    }



}
export default Results;
