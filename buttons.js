import React from 'react';

function Buttons() {
return (
{/*include("header.php");*/}
      	{/*<!-- Page content -->*/}
        <div className='d-block w-100' style='text-align:right;'>
          <p style='text-align:left;' className='d-inline float-left m-2 ml-3'>LoA / Create</p>
          <button className='btn mb-1' type='button' onclick='location.href=`library.js`'>Close <i class='fa-solid fa-xmark'></i></button>
        </div>

        <div className='box'>
            <button className='btn w-100' type='button' onClick='location.href=`create.js`'>Story Details</button>
        </div>

        <div className='box'>
            <button className='btn w-100' type='button' onClick='location.href=`page.js`'>Create Page</button>
        </div>

        <div className='box'>
            <button className='btn w-100' type='button' onClick='location.href=`tags.js`'>Tags</button>
        </div>

        <div className='box'>
            <button className='btn w-100' type='button' onClick='alert(`Change font etc`)'>Text Format</button>
        </div>

        <div className='box'>
            <button className='btn w-100' type='button' onClick='alert(`Upload images`)'>Images</button>
        </div>

        <button className='btn btn-primary w-100 my-2 my-sm-0 mr-1' type='button' onClick='alert(`You cannot publish yet!`)'>Publish</button>

    	</div>
    </main>

  </body>
</html>
)
}

export default Buttons;
