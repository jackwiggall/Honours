import React from 'react';
import { Link } from 'react-router-dom';
{/*import Button from 'react-bootstrap/Button';*/}

function Home() {
return (
    <>
    <div className='bground'>
    		<h1 className='centre'>Welcome to the Library of Alexandria</h1>
    		<img src='' className='centre'/>
        <h2 className='centre' style={{marginTop: "5px"}}>Which would you to do?</h2>
        <div class='centre'>

          <div class='box'>
    			     <Link to={"./Search"}> <button className='btn w-100 my-2 my-sm-0 mr-1' type='button' >Read</button></Link>
          </div>

          <h2>OR</h2>

          <div class='box'>
    			     <Link to={"./Library"}><button className='btn w-100 my-2 my-sm-0 mr-1' type='button' >Write</button></Link>
          </div>

    		</div>
      </div>
      </>
)
}

export default Home;
