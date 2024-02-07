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
    		<h1 class='centre'>Welcome to the Library of Alexandria</h1>
    		<img src='C:\Users\jackw\Pictures\2023.png' class='centre'>
        <h2 class='centre' style='margin-top:5px'>Which would you to do?</h2>
        <div class='centre'>

          <div class='box'>
    			     <button class='btn w-100 my-2 my-sm-0 mr-1' type='button' onclick='location.href=`search.php`'>Read</button>
          </div>

          <h2>OR</h2>

          <div class='box'>
    			     <button class='btn w-100 my-2 my-sm-0 mr-1' type='button' onclick='location.href=`library.php`'>Write</button>
          </div>

    		</div>
      </div>
    	</div>
    </main>
	<script src='index.js'></script>
  </body>
</html>";
?>
