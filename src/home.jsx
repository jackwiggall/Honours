import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Header from './header.jsx';

function Home() {

  const nav = useNavigate();

  //'reloads' the search page by auto navigating to it
  useEffect(() => {
    if (localStorage.getItem("redirect")!==null) {
      localStorage.removeItem("redirect");
      nav("../search");
    }
  }, [nav]);

return (
    <>
    <div className='bground'>
    <Header link={"../"} location={"tB"} />

    		<h1 className='centre'>Welcome to the Bookshelf</h1>
    		{/*<img src='' className='centre'/>*/}
        <h3 className='centre' style={{marginTop: "5px"}}>Which would you to do?</h3>
        <div className='centre'>

          <div className='box'>
    			     <Link to={"./search"}> <button className='btn w-100 my-2 my-sm-0 mr-1' type='button' >Read A Story</button></Link>
          </div>

          <div className='box'>
    			     <Link to={"./library"}><button className='btn w-100 my-2 my-sm-0 mr-1' type='button' >Write A Tale</button></Link>
          </div>

          <div className='box'>
    			     <Link to={"https://forms.gle/BrYASmBmZRSsSVjQ7"}><button className='btn w-100 my-2 my-sm-0 mr-1' type='button' >Provide Feedback</button></Link>
          </div>

    		</div>
      </div>
      </>
)
}

export default Home;
