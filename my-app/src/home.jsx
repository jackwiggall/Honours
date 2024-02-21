import React from 'react';
import Button from 'react-bootstrap/Button';

function Home() {
return (
    {/*change onClick buttons for search and library*/},
    <>
    		<h1 className='centre'>Welcome to the Library of Alexandria</h1>
    		<img src='C:\Users\jackw\Pictures\2023.png' className='centre'/>
        <h2 className='centre' style={{marginTop: "5px"}}>Which would you to do?</h2>
        <div class='centre'>

          <div class='box'>
    			     <button className='btn w-100 my-2 my-sm-0 mr-1' type='button' >Read</button>
          </div>

          <h2>OR</h2>

          <div class='box'>
    			     <button className='btn w-100 my-2 my-sm-0 mr-1' type='button' >Write</button>
          </div>

    		</div>
        </>
)
}

export default Home;
