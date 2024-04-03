import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import UserProfile from './userProfile.jsx';


function ShowKey() {

  const [mess, setMess] = useState("View Passkey"); //message
  const [pin, setPin] = useState("**************"); //passkey

  const handleKey = (e) => {

      e.preventDefault();

      if (mess==="View Passkey")
      {
        setMess("Hide Passkey");
        setPin(UserProfile.getID());
      }else {
        setMess("View Passkey");
        setPin("**************");
      }
    }
  return (
    <>
      <div className='box' onClick={handleKey}>
           <button className='btn w-100 my-2 my-sm-0 mr-1' type='button' >{mess}</button>
      </div>

      <h5>{pin}</h5>
    </>
  )
}

function UserBody() {
    if (localStorage.getItem("name")!==null) {
      return (
        <div className='bground'> {/*User is logged in, either redirect to profile or log out*/}
          <h2 className='centre' style={{marginTop: "5px"}}>Hello {UserProfile.getName()}</h2>
          <div className='centre'>

          <ShowKey />



            <div className='box' onClick={() => UserProfile.setName("Login")}>
      			     <Link to={"../"}> <button className='btn w-100 my-2 my-sm-0 mr-1' type='button' >Log Out</button></Link>
            </div>

          </div>
        </div>
      )
    }else {
      return (
        <div className='bground'>
          <h3 className='centre' style={{marginTop: "5px"}}>Which would you to do?</h3> {/*User is not logged in*/}
          <div className='centre'>

            <div className='box'>
      			     <Link to={"../user/create"}> <button className='btn w-100 my-2 my-sm-0 mr-1' type='button' >Create Account</button></Link> {/*Account page*/}
            </div>

            <h2>OR</h2>

            <div className='box'>
      			     <Link to={"../user/login"}><button className='btn w-100 my-2 my-sm-0 mr-1' type='button' >Login</button></Link>{/*Login page*/}
            </div>
          </div>
        </div>
      )
    }

}
export default UserBody;
