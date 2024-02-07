<?php
include("header.php");
echo "
      	<!-- Page content -->
        <div class='d-block w-100' style='text-align:right;'>
          <p style='text-align:left;' class='d-inline float-left m-2 ml-3'>LoA / Create</p>
          <button class='btn mb-1' type='button' onclick='location.href=`library.php`'>Close <i class='fa-solid fa-xmark'></i></button>
        </div>

        <div class='box'>
            <button class='btn w-100' type='button' onclick='location.href=`create.php`'>Story Details</button>
        </div>

        <div class='box'>
            <button class='btn w-100' type='button' onclick='location.href=`page.php`'>Create Page</button>
        </div>

        <div class='box'>
            <button class='btn w-100' type='button' onclick='location.href=`tags.php`'>Tags</button>
        </div>

        <div class='box'>
            <button class='btn w-100' type='button' onclick='alert(`Change font etc`)'>Text Format</button>
        </div>

        <div class='box'>
            <button class='btn w-100' type='button' onclick='alert(`Upload images`)'>Images</button>
        </div>

        <button class='btn btn-primary w-100 my-2 my-sm-0 mr-1' type='button' onclick='alert(`You cannot publish yet!`)'>Publish</button>

    	</div>
    </main>

  </body>
</html>";
?>
