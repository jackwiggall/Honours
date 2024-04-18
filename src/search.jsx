import React, { useRef } from 'react';
import { Button } from "@aws-amplify/ui-react";
import { useNavigate } from 'react-router-dom';

import Results from './results.jsx';
import Header from './header.jsx';

function Search() {

  var run = useRef(false);
  const nav = useNavigate();

  const handleSearch = (e) => {

      e.preventDefault();
      localStorage.removeItem("searchRes"); //next time viewing page will requery db, need to add reload
      localStorage.setItem("redirect",true);
      nav("../");
    }

if (!run.current) {
  run.current = true;
  localStorage.removeItem("redirect");
  return (
      <>
      <div className='bground'>
      <Header link={"../"} location={"tB / Search"} />

          <form className='form-inline'>
            <Button variation='primary' className='my-2 my-sm-2 w-100' onClick={handleSearch} type='button'>Search  <i className='fa-solid fa-magnifying-glass'></i></Button>
          </form>

        <div className='results'>
          <Results />
        </div>
      </div>
      </>
  )}
}
export default Search;
