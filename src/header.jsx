import { Link } from 'react-router-dom';
import UserProfile from './userProfile.jsx';

function Header({link, location}) {

if (location!=="LoA") {
  return (
  <>
    <div className='d-block w-100' style={{textAlign: "right"}}>
      <p style={{textAlign: 'left'}} className='d-inline float-left m-2 ml-3'>{location}</p>
      <Link to={"../user"}><button className='btn mb-1' type='button'>{UserProfile.getName()} <i className='fa-solid fa-user' /></button></Link>
      <Link to={link}><button className='btn mb-1' type='button'>Close <i className='fa-solid fa-xmark' /></button></Link>
  </div>
  </>
      )
}else {

}
return (
<>
  <div className='d-block w-100' style={{textAlign: "right"}}>
    <p style={{textAlign: 'left'}} className='d-inline float-left m-2 ml-3'>{location}</p>
    <Link to={"../user"}><button className='btn mb-1' type='button'>{UserProfile.getName()} <i className='fa-solid fa-user' /></button></Link>
    <Link to={link}><button className='btn mb-1 blended' type='button'>Close <i className='fa-solid fa-xmark' /></button></Link>
</div>
</>
    )

}
export default Header;
