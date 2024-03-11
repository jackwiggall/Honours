import React from 'react';
import { Link } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';

import { listGameInfos } from './graphql/queries';

const client = generateClient();

function Results() {
const results = client.graphql({ query: listGameInfos, limit: 3});
console.log(results); //can get results just not able to display them

return (
  //{results..map((item) => {
    <div className='box'>
      <div className='card' style={{width: '100%', marginBottom: '20px'}}>
        <Link to={"./Info"} style={{color: 'inherit', textDecoration: 'none'}}>
        <div className='card-body'>
          <h5 className='card-title'>{'item.title'}</h5>
          <p className='card-text d-inline-block'>{'item.shortDesc'}</p>
        </div>
        <ul id='2' className='list-group list-group-flush text-secondary'>
          <li className='list-group-item'>#fantasy, #sci-fi</li>
        </ul>
        </Link>
      </div>
    </div>
  //})
  //}
)}
export default Results;