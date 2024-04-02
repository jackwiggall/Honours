import React from 'react';
import { Link } from 'react-router-dom';
import UserBody from './userBody.jsx';
import LibraryResult from './libraryResults.jsx';
import Header from './header.jsx';

function Library() {
  localStorage.removeItem("storyNum");
return (
      <>
      <div className='bground'>
      <Header link={"../"} location={"LoA / Library"} />
        <LibraryBody />
      </div>
    	</>
)}
export default Library;

//check if logged in
function LibraryBody() {
  if (localStorage.getItem("name")!==null) {
    return (
    <> {/*User is logged in, show library*/}
      <div className='box'>
        <Link to={"./create"}><button className='btn w-100 my-2 my-sm-0 mr-1' type='button'>Create New Story</button></Link>
      </div>
      <LibraryResult /> {/*query db for games*/}
    </>
  )
  }else {
    return (
    <> {/*User is not logged in, show login*/}
        <h2 className='centre' style={{marginTop: "5px"}}>Login to access this feature</h2>
      <UserBody />
    </>
    )
  }
}
