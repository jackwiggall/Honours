import React from 'react';
import { Button } from "@aws-amplify/ui-react";
import { Link } from 'react-router-dom';

import Publish from './publish.jsx';
import Header from './header.jsx';

function Buttons() {

localStorage.removeItem("currentPage");
localStorage.removeItem("links");

return (
<>
<div className='bground'>
  <Header link={"../library"} location={"LoA / Library / Create"} />

        <div className='box'>
            <Link to={"../library/create"}><button className='btn w-100' type='button'>Story Details</button></Link>
        </div>

        <div className='box'>
            <Link to={"../library/create/page"}><button className='btn w-100' type='button'>Create Page</button></Link>
        </div>

        <div className='box'>
            <Link to={"../library/create/pagelist"}><button className='btn w-100' type='button'>Page List</button></Link>
        </div>

        <div className='box'>
            <Link to={"../library/create/tags"}><button className='btn w-100' type='button'>Tags (not finished)</button></Link>
        </div>

        <p>Games are saved locally until published.</p>
        <Link to={"../library/create/testing"}><Button variation="primary" className='btn w-100 my-2 my-sm-1 mr-1' type='submit' >Test</Button></Link> {/*Not implemented*/}
        <Publish />
        <Button variation="primary" className='btn btn-danger w-100 my-2 my-sm-1 mr-1' type='submit' >Delete</Button> {/*Not implemented*/}

    </div>
  </>
)
}

export default Buttons;
