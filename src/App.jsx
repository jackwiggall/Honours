import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './home.jsx';
import Library from './library.jsx';
import Create from './create.jsx';
import Page from './page.jsx';
import PageList from './pageList.jsx';
import Buttons from './buttons.jsx';
import Tags from './tags.jsx';
import Info from './info.jsx';
import Search from './search.jsx';
import User from './user.jsx';
import Account from './account.jsx';
import Login from './login.jsx';
import Testing from './testing.jsx';
import Play from './playing.jsx';

import './App.css';

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
          <Route exact path='/library/create/pagelist' element={<PageList />}/>
          <Route exact path='/library/create/testing' element={<Testing />}/>

          <Route exact path='/user' element={<User />} />
          <Route exact path='/user/create' element={<Account/>} />
          <Route exact path='/user/login' element={<Login />} />

          <Route exact path='/search' element={<Search />} />
          <Route exact path='/search/info' element={<Info />} />

          <Route exact path='/play' element={<Play />} />

      </Routes>
      </BrowserRouter>
    )
    }
export default App;
