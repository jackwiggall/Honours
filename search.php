<?php
include("header.php");
echo "
      	<!-- Page content -->
        <div class='d-block w-100' style='text-align:right;'>
          <p style='text-align:left;' class='d-inline float-left m-2 ml-3'>LoA / Search</p>
          <button class='btn mb-1' type='button' onclick='location.href=`index.php`'>Close <i class='fa-solid fa-xmark'></i></button>
        </div>

      <div class='box'>
        <form class='form-inline'>
          <input class='form-control mr-sm-2' type='search' placeholder='Search' aria-label='Search'>
          <button class='btn btn-primary my-2 my-sm-0 mr-1' type='submit'>Search <i class='fa-solid fa-magnifying-glass'></i></button>

          <select class='custom-select mr-sm-2' id='inlineFormCustomSelect'>
            <option selected>Sort...</option>
            <option value='1'>Views<i class='fa-solid fa-eye'></i></option>
            <option value='2'>Likes<i class='fa-solid fa-heart'></i></option>
            <option value='3'>Comments<i class='fa-solid fa-comment'></i></option>
          </select>


          <button type='button' class='btn btn-primary my-2 my-sm-0' onclick='toggleFilters()'>Filter <i class='fa-solid fa-filter'></i></button>
          <div id='filters' class='hidden m-2'>
            <select class='custom-select mr-sm-2' id='inlineFormCustomSelect'>
              <option selected>Genre</option>
              <option value='1'>Fantasy</option>
              <option value='2'>Mystery</option>
              <option value='3'>Sci-Fi</option>
            </select>
          </div>
        </form>
      </div>


      <div class='results'> <!--Search Results, will need to do resizing stuff-->

      <div class='card' style='width: 100%; margin-bottom:20px'>
        <a href='info.php'><img src='C:\Users\jackw\Pictures\Screenshots\Screenshot 2023-11-27 212356.png' class='card-img-top' alt='...'>
        </a><div class='card-body'>
          <h5 class='card-title'>Card title</h5>
          <p class='card-text d-inline-block'>Brief description of the project.</p>
        </div>
        <ul id='2' class='list-group list-group-flush text-secondary'>
          <li class='list-group-item'>#fantasy, #sci-fi</li>
        </ul>
      </div>
    </div>

    	</div>
    </main>
	<script src='index.js'></script>
  </body>
</html>";
?>