import React from 'react';
import { Link } from 'react-router-dom';

import Header from './header.jsx';

function Home() {
return (
    <>
    <div className='bground'>
    <Header link={"../"} location={"LoA"} />

    		<h1 className='centre'>Welcome to Title</h1>
    		{/*<img src='' className='centre'/>*/}
        <h3 className='centre' style={{marginTop: "5px"}}>Which would you to do?</h3>
        <div className='centre'>

          <div className='box'>
    			     <Link to={"./search"}> <button className='btn w-100 my-2 my-sm-0 mr-1' type='button' >Read</button></Link>
          </div>

          {/*<h2>OR</h2>*/}

          <div className='box'>
    			     <Link to={"./library"}><button className='btn w-100 my-2 my-sm-0 mr-1' type='button' >Write</button></Link>
          </div>

          <div className='box'>
    			     <Link to={"https://forms.gle/BrYASmBmZRSsSVjQ7"}><button className='btn w-100 my-2 my-sm-0 mr-1' type='button' >Feedback</button></Link>
          </div>

    		</div>
      </div>
      </>
)
}

export default Home;
