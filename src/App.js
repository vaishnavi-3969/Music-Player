import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Feed from './components/Feed';
import Library from './components/Library';
import Player from './components/Player';
import Trending from './components/Trending';
import Favorites from './components/Favorites';

function App() {
  return (
    <div>
      <Router>
          <Routes>
            <Route path='/' element={<Home />} exact />
            <Route path='/feed' element={<Feed />} exact />
            <Route path='/library' element={<Library />} exact />
            <Route path='/player' element={<Player />} exact />
            <Route path='/trending' element={<Trending />} exact />
            <Route path='/favorites' element={<Favorites />} exact />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
