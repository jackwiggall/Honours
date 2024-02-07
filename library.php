<?php
include("header.php");
echo "
      	<!-- Page content -->
        <div class='d-block w-100' style='text-align:right;'>
          <p style='text-align:left;' class='d-inline float-left m-2 ml-3'>LoA / Library</p>
          <button class='btn mb-1' type='button' onclick='location.href=`index.php`'>Close <i class='fa-solid fa-xmark'></i></button>
        </div>

        <h3 class='text-center mb-5'>Your library is empty!</h3>

        <div class='box'>
          <button class='btn w-100 my-2 my-sm-0 mr-1' type='button' onclick='location.href=`create.php`'>Create New Story</button>
        </div>

    	</div>
    </main>
	
  </body>
</html>";
?>
