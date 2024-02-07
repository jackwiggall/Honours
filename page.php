<?php
include("header.php");
echo "
      	<!-- Page content -->
        <div class='d-block w-100' style='text-align:right;'>
          <p style='text-align:left;' class='d-inline float-left m-2 ml-3'>LoA / Create</p>
          <button class='btn mb-1' type='button' onclick='location.href=`buttons.php`'>Close <i class='fa-solid fa-xmark'></i></button>
        </div>

        <div class='box'>
            <h3 class='w-100'>Page Title</h3>
            <input class='form-control mr-sm-2' type='search' placeholder='Title' aria-label='Title'>
        </div>

        <div class='box'>
            <h3 class='w-100'>Text</h3>
            <textarea class='form-control mr-sm-2' placeholder='Text' aria-label='Text'></textarea>
        </div>

        <div class='box'>
            <h3 class='w-100'>Link</h3>
            <input class='form-control mr-sm-2' type='search' placeholder='Text' aria-label='Text'>
            <input class='form-control mr-sm-2 mt-2' type='search' placeholder='Page' aria-label='Page'>
        </div>


    	</div>
    </main>
	
  </body>
</html>";
?>
