import React from 'react';

function Library() {
return (
{/*include("header.php");*/}
      	{/*<!-- Page content -->*/}
        <div className='d-block w-100' style='text-align:right;'>
          <p style='text-align:left;' className='d-inline float-left m-2 ml-3'>LoA / Library</p>
          <button className='btn mb-1' type='button' onclick='location.href=`index.js`'>Close <i className='fa-solid fa-xmark'></i></button>
        </div>

        <h3 className='text-center mb-5'>Your library is empty!</h3>

        <div className='box'>
          <button className='btn w-100 my-2 my-sm-0 mr-1' type='button' onClick='location.href=`create.php`'>Create New Story</button>
        </div>

    	</div>
    </main>

  </body>
</html>
)
}

export default Library;
