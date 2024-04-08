import React from 'react';
import UserBody from './userBody.jsx';
import Header from './header.jsx';

function User() {
  return (
        <>
        <div className='bground'>
        <Header link={"../"} location={"tB / User"} />
            <UserBody />
        </div>
        </>
      )
}
export default User;
