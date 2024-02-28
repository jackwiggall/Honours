import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './header.jsx';
import Home from './home.jsx';
import Library from './library.jsx';
import Create from './create.jsx';
import Page from './page.jsx';
import Buttons from './buttons.jsx';
import Tags from './tags.jsx';
import Info from './info.jsx';
import Search from './search.jsx';

import './App.css';
{/*import 'bootstrap/dist/css/bootstrap.min.css';*/}


function App() {
return (
      <BrowserRouter>
      <Routes>

          <Route exact path='/' component={Home} />
          <Route exact path='*' component={Home} />

          <Route exact path='/library' component={Library} />
          <Route exact path='/library/create' component={Create} />
          <Route exact path='/library/buttons' component={Buttons} />
          <Route exact path='/library/tags' component={Tags} />
          <Route exact path='/library/page' component={Page} />

          <Route exact path='/search' component={Search} />
          <Route exact path='/search/info' component={Info} />

      </Routes>
      </BrowserRouter>
    )
    }
export default App;
