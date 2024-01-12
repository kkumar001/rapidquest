import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {

  return (
    <main>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />}/>
        </Routes>
      </Router>
    </main>
  )
}

export default App;
