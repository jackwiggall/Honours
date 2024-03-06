import React from 'react';
import { Link } from 'react-router-dom';
import { generateClient } from 'aws-amplify/api';

import { listGameInfos } from './graphql/queries';

const client = generateClient();

function toggleFilters() {

  document.getElementById("filters").classList.toggle("hidden");
}

function Search() {
return (
    <>
    <div className='bground'>
      <div className='d-block w-100' style={{textAlign: "right"}}>
        <p style={{textAlign: 'left'}} className='d-inline float-left m-2 ml-3'>LoA / Library</p>
        <Link to={"../"}><button className='btn mb-1' type='button'>Close <i className='fa-solid fa-xmark' /></button></Link>
          </div>

      <div className='box'>
        <form className='form-inline'>
          <input className='form-control mr-sm-2' type='search' placeholder='Search' aria-label='Search'/>
          <button className='btn btn-primary my-2 my-sm-0 mr-1' type='button'>Search <i class='fa-solid fa-magnifying-glass'></i></button>

          <select className='custom-select mr-sm-2' id='inlineFormCustomSelect'>
            <option selected>Sort...</option>
            <option value='1'>Views<i className='fa-solid fa-eye'></i></option>
            <option value='2'>Likes<i className='fa-solid fa-heart'></i></option>
            <option value='3'>Comments<i className='fa-solid fa-comment'></i></option>
          </select>


          <button type='button' className='btn btn-primary my-2 my-sm-0' onClick={'toggleFilters()'}>Filter <i className='fa-solid fa-filter'></i></button>
          <div id='filters' className='hidden m-2'>
            <select className='custom-select mr-sm-2' id='inlineFormCustomSelect'>
              <option selected>Genre</option>
              <option value='1'>Fantasy</option>
              <option value='2'>Mystery</option>
              <option value='3'>Sci-Fi</option>
            </select>
          </div>
        </form>
      </div>


      <div className='results'>

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
      </div>

    </div>
    </>
)}
export default Search;

async function SearchQuery() {
  const result = await client.graphql({ query: listGameInfos, variables: {limit: 3}});
  console.log(result);
  //get some games for the search page
};
