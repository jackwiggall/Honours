<?php
include("header.php");
echo "
      	<!-- Page content -->
        <div class='d-block w-100' style='text-align:right;'>
          <p style='text-align:left;' class='d-inline float-left m-2 ml-3'>User / Game</p>
          <button class='btn mb-1' type='button' onclick='location.href=`search.php`'>Close <i class='fa-solid fa-xmark'></i></button>
        </div>

        <div class='box'>
          <img src='C:\Users\jackw\Pictures\Screenshots\Screenshot 2023-11-27 212356.png' style='max-width:100%;' alt='...'>
        </div>

        <div class='box'>
          <H3 class='d-inline-block'>Title</H3><!--Name-->
          <h5 class='d-inline-block float-right'>2 <i class='fa-solid fa-eye'></i><!--Views-->
          3 <i class='fa-solid fa-heart'></i><!--Likes-->
          1 <i class='fa-solid fa-comment'></i></h4><!--Comments-->
          <p>By: User</p><!--Creator-->
          <p>In a world where lorem ipsum, a legendary lorem commits to filling out this description.</p><!--description-->
          <p>#tags #cool #mystery</p><!--tag list-->
        </div>

        <div class='box'>
          <form class='form-inline'>
            <input class='form-control mr-sm-2 w-75' type='comment' placeholder='Comment' required aria-label='Comment'>
            <button class='btn btn-primary my-2 my-sm-0 mr-1' type='button'>Comment <i class='fa-solid fa-comment'></i></button>
        </div>

        <div class='box'>
          <div class='container'>
            <div class='row'>
              <div class='col-sm-2'>
                <img src='C:\Users\jackw\Videos\Books\skyward_square.jpg' style='width:100%;aspect-ratio : 1 / 1;' alt='...'>
                <b class='text-center'>User</b>
              </div>
              <div class='col-7'>
                <p class='text-faded mb-1'>03/01/2023 16:31:08</p>
                <p>Wow nice comment</p>
              </div>
            </div>
          </div>
        </div>

    	</div>
    </main>
	
  </body>
</html>";
?>
