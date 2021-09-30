import React from 'react'
import './App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {AnimatePresence} from 'framer-motion';

//* Pages
import Home from './pages/Home';
import Header from './components/Header';
import Model from './pages/Model';

function App() {

  const imageDetails = {
    width: 524,
    height: 650
  }

  return (
    <Router>
      <Header />
      <Route 
        render={({location}) => (
          <AnimatePresence 
            // initial={false} 
            exitBeforeEnter>          
            <Switch location={location} key={location.pathname}>
              <Route 
                exact
                path="/"
                render={() => <Home imageDetails={imageDetails}/>}
              />
              <Route 
                exact
                path="/model/:id"
                render={() => <Model imageDetails={imageDetails} />}
              />
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
  );
}

export default App;
