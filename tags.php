<?php
include("header.php");
echo "
<html lang='en'>
  <head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <meta http-equiv='X-UA-Compatible' content='ie=edge'>
    <title>LoA</title>
    <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css' integrity='sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2' crossorigin='anonymous'>
    <link rel='manifest' href='/manifest.json'>
    <link rel='stylesheet' href='./styles.css'>
    <link rel='icon' href='images/icon.png'>
    <script src='https://kit.fontawesome.com/210a3569a8.js' crossorigin='anonymous'></script>
  </head>
  <body>
    <main>
    	<div class='bground'>
      	<!-- Page content -->
        <div class='d-block w-100' style='text-align:right;'>
          <p style='text-align:left;' class='d-inline float-left m-2 ml-3'>LoA / Create</p>
          <button class='btn mb-1' type='button' onclick='location.href=`buttons.php`'>Close <i class='fa-solid fa-xmark'></i></button>
        </div>

        <div class='box'>
            <h3 class='w-100'>Tag List</h3>
        </div>

        <div class='box'>
           <input type='checkbox' aria-label='Sci-Fi'> Sci-Fi<br>
           <input type='checkbox' aria-label='Fantasy' checked> Fantasy<br>
           <input type='checkbox' aria-label='Original' checked> Original<br>
           <input type='checkbox' aria-label='Mystery'> Mystery<br>
           <input type='checkbox' aria-label='TV'> TV<br>
           <input type='checkbox' aria-label='Film'> Film<br>
           <input type='checkbox' aria-label='Book'> Book<br>
        </div>

    	</div>
    </main>
	
  </body>
</html>";
?>
