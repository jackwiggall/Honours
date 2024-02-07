<?php
include("header.php");
echo "
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
	
  </body>
</html>";
?>
