import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';



//works for singular item in storage
function DisplayResult(i) {

    return (
      <>
    <div className='box' onClick={() => localStorage.setItem("storyNum",i.data.localID)}> {/*set to id*/}
      <div className='card' style={{width: '100%'}}>
        <Link to={'./create/buttons'} style={{color: 'inherit', textDecoration: 'none'}}>
        <div className='card-body'>
          <h5 className='card-title'>{i.data.title}</h5>
          <p className='card-text d-inline-block'>{i.data.shortDesc}</p>
        </div>
        <ul className='list-group list-group-flush text-secondary'>
          <li className='list-group-item'>#fantasy, #sci-fi</li>
        </ul>
        </Link>
      </div>
    </div>
  </>
  )

}

//user is logged in, check if they have games
function LibraryResult() {

const [lib, setLib] = useState([{}]);

 const valid = useRef(0);
 const len = useRef(0);

 useEffect(()=>{
   //needs to inform user of validation of why error, ie no pages etc
     if (localStorage.getItem("storyDetails")!==null && valid.current!==1) {

       var storyDetails = JSON.parse(localStorage.getItem("storyDetails"));
       //console.log(storyDetails);
       setLib(storyDetails);
       valid.current = 1;
       len.current = storyDetails.length;
     }
   }, []); // empty array means only once

   if (valid.current!==1) {
     return (
       <h3 className='text-center mb-5'>Your library is empty!</h3>
     ) //still fires more than once
   }else {
     return (
         <>
           {lib.map((data) => (
             // Return the element. Also pass key
             <DisplayResult data={data}/>
           ))}
         </>
        )   
   }
}
export default LibraryResult;
