<?php
include("header.php");
echo "
      	<!-- Page content -->
        <div class='d-block w-100' style='text-align:right;'>
          <p style='text-align:left;' class='d-inline float-left m-2 ml-3'>LoA / Create</p>
          <button class='btn mb-1' type='button' onclick='location.href=`library.php`'>Close <i class='fa-solid fa-xmark'></i></button>
        </div>

        <div class='box'>
            <h4 class='mr-2'>Title</h4>
            <input class='form-control mr-sm-2' type='comment' placeholder='Title' required aria-label='Title'>
        </div>

        <div class='box'>
            <h4 class='mr-2'>Short Description</h4>
            <input class='form-control mr-sm-2' type='comment' placeholder='Short Description' required aria-label='Short Description'>
        </div>

        <div class='box'>
            <h4 class='mr-2'>Longer Description</h4>
            <input class='form-control mr-sm-2' type='comment' placeholder='Longer Description' required aria-label='Longer Description'>
        </div>

        <div class='box'>
            <h4 class='mr-2'>Genre</h4>
            <select class='custom-select mr-sm-2'>
              <option selected>Genre...</option>
              <option value='1'>Fantasy</option>
              <option value='2'>Sci-Fi</option>
              <option value='3'>Mystery</option>
            </select>
        </div>

        <button class='btn btn-primary w-100 my-2 my-sm-0 mr-1' type='submit' onclick='location.href=`buttons.php`'>Submit</button>

    	</div>
    </main>

  </body>
</html>";
?>
