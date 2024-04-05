import React, { useRef } from 'react';
import { Button } from "@aws-amplify/ui-react";

import Results from './results.jsx';
import Header from './header.jsx';

function Search() {

  var run = useRef(false);

  const handleSearch = (e) => {

      e.preventDefault();
      localStorage.removeItem("searchRes"); //next time viewing page will requery db, need to add reload
      console.log("resetting");
      window.location.reload(); //reloads page so can requery db
    }

if (!run.current) {
  run.current = true;
  return (
      <>
      <div className='bground'>
      <Header link={"../"} location={"LoA / Search"} />

        <div className='box'>
          <form className='form-inline'>
            <input className='form-control mr-2 w-70' type='search' placeholder='Search' aria-label='Search'id='searchBar' />
            <Button variation='primary' className='my-2 my-sm-1 w-33' onClick={handleSearch} type='button'>Search  <i className='fa-solid fa-magnifying-glass'></i></Button>

          </form>
        </div>
        <div className='results'>
          <Results />
        </div>
      </div>
      </>
  )}
}
export default Search;
