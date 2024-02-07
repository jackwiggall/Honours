<?php
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
          <button class='btn mb-1' type='button' onclick='location.href=`library.php`>Close <i class='fa-solid fa-xmark'></i></button>
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
	<script src='index.js'></script>
  </body>
</html>";
?>
