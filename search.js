import React from 'react';

function toggleFilters() {

  document.getElementById("filters").classList.toggle("hidden");
}

function Search() {
return (
{/*include("header.php");*/}
      	{/*<!-- Page content -->*/}
        <div className='d-block w-100' style='text-align:right;'>
          <p style='text-align:left;' class='d-inline float-left m-2 ml-3'>LoA / Search</p>
          <button className='btn mb-1' type='button' onClick='location.href=`index.js`'>Close <i className='fa-solid fa-xmark'></i></button>
        </div>

      <div className='box'>
        <form className='form-inline'>
          <input className='form-control mr-sm-2' type='search' placeholder='Search' aria-label='Search'/>
          <button className='btn btn-primary my-2 my-sm-0 mr-1' type='submit'>Search <i class='fa-solid fa-magnifying-glass'></i></button>

          <select className='custom-select mr-sm-2' id='inlineFormCustomSelect'>
            <option selected>Sort...</option>
            <option value='1'>Views<i className='fa-solid fa-eye'></i></option>
            <option value='2'>Likes<i className='fa-solid fa-heart'></i></option>
            <option value='3'>Comments<i className='fa-solid fa-comment'></i></option>
          </select>


          <button type='button' className='btn btn-primary my-2 my-sm-0' onClick='toggleFilters()'>Filter <i className='fa-solid fa-filter'></i></button>
          <div id='filters' className='hidden m-2'>
            <select className='custom-select mr-sm-2' id='inlineFormCustomSelect'>
              <option selected>Genre</option>
              <option value='1'>Fantasy</option>
              <option value='2'>Mystery</option>
              <option value='3'>Sci-Fi</option>
            </select>
          </div>
        </form>
      </div>


      <div className='results'>
      {/* <!--Search Results, will need to do resizing stuff--> */}

      <div className='card' style='width: 100%; margin-bottom:20px'>
        <a href='info.php'><img src='C:\Users\jackw\Pictures\Screenshots\Screenshot 2023-11-27 212356.png' class='card-img-top' alt='...'/>
        </a><div className='card-body'>
          <h5 className='card-title'>Card title</h5>
          <p className='card-text d-inline-block'>Brief description of the project.</p>
        </div>
        <ul id='2' className='list-group list-group-flush text-secondary'>
          <li className='list-group-item'>#fantasy, #sci-fi</li>
        </ul>
      </div>
    </div>

    	</div>
    </main>
  </body>
</html>
)
}

export default Search;
