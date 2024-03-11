import React from 'react';
import { Link } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import config from './amplifyconfiguration.json';

import { listGameInfos } from './graphql/queries';

Amplify.configure(config);
const client = generateClient();

function Results() {
return (
    <>

    <div className='box'>
      <div className='card' style={{width: '100%', marginBottom: '20px'}}>
        <Link to={"./Info"}> <img src='' class='card-img-top' alt='...'/>
        </Link><div className='card-body'>
          <h5 className='card-title'>Card title</h5>
          <p className='card-text d-inline-block'>Brief description of the project.</p>
        </div>
        <ul id='2' className='list-group list-group-flush text-secondary'>
          <li className='list-group-item'>#fantasy, #sci-fi</li>
        </ul>
      </div>
    </div>
    </>
)}
export default Results;

const result = await client.graphql({ query: listGameInfos, limit: 3});
console.log(result);
//get some games for the search page
