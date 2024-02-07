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

        <button class='btn btn-primary w-100 my-2 my-sm-0 mr-1' type='submit' onclick='location.href=`buttons.html`'>Submit</button>

    	</div>
    </main>
	<script src='index.js'></script>
  </body>
</html>";
?>
