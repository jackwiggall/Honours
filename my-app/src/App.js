import React from 'react';
import Home from './home.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
return (
<>
<html lang='en'>
  <head>
    <meta charset='UTF-8' />
    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    <meta http-equiv='X-UA-Compatible' content='ie=edge' />
    <title>LoA</title>
    <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
  integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
  crossorigin="anonymous"
/>
    <link rel='stylesheet' href='App.css' />
    <link rel='icon' href='images/icon.png' />
    <script src='https://kit.fontawesome.com/210a3569a8.js' crossorigin='anonymous'></script>
  </head>
  <body>
    <main>
    	<div className='bground'>
      <Home />
      </div>
    </main>
  </body>
</html>
</>
    )
    }
export default Header;
