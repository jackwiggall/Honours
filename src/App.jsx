import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import config from './amplifyconfiguration.json';

import Home from './home.jsx';
import Library from './library.jsx';
import Create from './create.jsx';
import Page from './page.jsx';
import Buttons from './buttons.jsx';
import Tags from './tags.jsx';
import Info from './info.jsx';
import Search from './search.jsx';
import User from './user.jsx';
import Account from './account.jsx';
import Login from './login.jsx';

import './App.css';
{/*import 'bootstrap/dist/css/bootstrap.min.css';*/}

function App() {
return (
      <BrowserRouter>
      <Routes>

          <Route exact path='/' element={<Home />} />

          <Route exact path='/library' element={<Library />} />
          <Route exact path='/library/create' element={<Create />} />
          <Route exact path='/library/create/buttons' element={<Buttons />} />
          <Route exact path='/library/create/tags' element={<Tags />} />
          <Route exact path='/library/create/page' element={<Page />} />

          <Route exact path='/User' element={<User />} />
          <Route exact path='/User/create' element={<Account/>} />
          <Route exact path='/User/login' element={<Login />} />

          <Route exact path='/search' element={<Search />} />
          <Route exact path='/search/info' element={<Info />} />

      </Routes>
      </BrowserRouter>
    )
    }
export default App;

Amplify.configure(config);
const client = generateClient();
