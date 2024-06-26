import React from 'react';
import { Button } from "@aws-amplify/ui-react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Publish from './publish.jsx';
import Header from './header.jsx';

function Buttons() {

//not looking at a page anymore
localStorage.removeItem("currentPage");
localStorage.removeItem("links");
const nav = useNavigate(); //sets up auto navigation

const handleDel= (e) => {
//delete story from storage
    e.preventDefault();

    if (localStorage.getItem("storyNum")!==null&&localStorage.getItem("storyDetails")!==null) {
      //make sure can get the number of story currently on to delete
      var storyNum = JSON.parse(localStorage.getItem("storyNum"));
      var storyDetails = JSON.parse(localStorage.getItem("storyDetails"));
      var pageDetails = JSON.parse(localStorage.getItem("pageDetails"));

      storyDetails.splice(storyNum, 1);
      pageDetails.splice(storyNum, 1);

      for (var i = storyNum; i < storyDetails.length; i++) {
        //change all ID's down from deleted page
        storyDetails[i].localID--;
      }
      if (storyDetails[0]!==undefined) {
        localStorage.setItem("storyDetails",JSON.stringify(storyDetails));
        localStorage.setItem("pageDetails",JSON.stringify(pageDetails));
      }else {
        //no stories saved
        localStorage.removeItem("storyDetails");
        localStorage.removeItem("pageDetails");
      }

    }
    nav('../library');
  }

return (
<>
<div className='bground'>
  <Header link={"../library"} location={"tB / Library / Create"} />

        <div className='box'>
            <Link to={"../library/create"}><button className='btn w-100' type='button'>Story Details</button></Link>
        </div>

        <div className='box'>
            <Link to={"../library/create/page"}><button className='btn w-100' type='button'>Create Page</button></Link>
        </div>

        <div className='box'>
            <Link to={"../library/create/pagelist"}><button className='btn w-100' type='button'>Page List</button></Link>
        </div>

        <p>Stories are saved locally until published. Testing recommended.</p>
        <Link to={"../library/create/testing"}><Button variation="primary" className='btn w-100 my-2 my-sm-1 mr-1' type='submit' >Test</Button></Link> {/*Not implemented*/}
        <Publish />

        <form onSubmit={handleDel}>
          <Button variation="primary" className='btn btn-danger w-100 my-2 my-sm-1 mr-1' type='submit' >Delete</Button>
        </form>

    </div>
  </>
)
}

export default Buttons;
