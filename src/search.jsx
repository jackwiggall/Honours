import React from 'react';
import { Button } from "@aws-amplify/ui-react";

import Results from './results.jsx';
import Header from './header.jsx';

function Search() {
return (
    <>
    <div className='bground'>
    <Header link={"../"} location={"LoA / Search"} />

      <div className='box'>
        <form className='form-inline'>
          <input className='form-control mr-sm-2' type='search' placeholder='Search' aria-label='Search'id='searchBar' />
          <Button variation='primary' className='my-2 my-sm-0 mr-1' type='button'>Search  <i className='fa-solid fa-magnifying-glass'></i></Button>

          <select className='custom-select mr-sm-2' id='inlineFormCustomSelect'>
            <option defaultValue>Sort...</option>
            <option value='1'>Views</option>
            <option value='2'>Likes</option>
            <option value='3'>Comments</option>
          </select>


          <Button type='button' variation='primary' className='my-2 my-sm-0' onSubmit={alert(`toggleFilters`)}>Filter  <i className='fa-solid fa-filter'></i></Button>
          <div id='filters' className='hidden m-2'>
            <select className='custom-select mr-sm-2' id='inlineFormCustomSelect'>
              <option defaultValue>Genre</option>
              <option value='1'>Fantasy</option>
              <option value='2'>Mystery</option>
              <option value='3'>Sci-Fi</option>
            </select>
          </div>
        </form>
      </div>
      <div className='results'>
        <Results />
      </div>
    </div>
    </>
)}
export default Search;
