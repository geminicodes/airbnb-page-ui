import React from 'react';
import Home from './Home';
import Navbar from './Navbar';
import Footer from './Footer';
import SearchPage from './SearchPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <Router>
        <Navbar />

        <Switch>
          <Route path='/search'>
            <SearchPage />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
